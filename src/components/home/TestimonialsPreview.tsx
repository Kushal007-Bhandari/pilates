"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { studio, testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsPreview() {
  const featured = testimonials.filter((t) => t.id !== "3");

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Stories"
          title="What our community feels"
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featured.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="rounded-2xl border border-sand bg-white/50 p-10 md:p-12"
            >
              <p className="font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-charcoal/50">{t.detail}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <Link
            href="/testimonials"
            className="text-sm uppercase tracking-widest text-charcoal/50 transition-colors hover:text-charcoal"
          >
            Read more stories →
          </Link>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-charcoal/45 transition-colors hover:text-charcoal"
          >
            Daily updates on @{studio.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
