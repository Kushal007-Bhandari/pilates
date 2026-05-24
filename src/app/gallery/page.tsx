"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = galleryImages.find((img) => img.id === selected);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, close]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A space designed to slow you down"
        description="Studio N°8 — a calm equipment studio in Bhaisepati, Lalitpur."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(img.id)}
                className="mb-4 block w-full min-h-11 overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={i % 2 === 0 ? 1100 : 700}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-5"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute right-5 top-5 flex min-h-11 min-w-11 items-center justify-center rounded-full bg-cream/10 text-cream focus-visible:ring-2 focus-visible:ring-cream/50"
              onClick={close}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
