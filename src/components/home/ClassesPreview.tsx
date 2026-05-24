"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { classes } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ClassesPreview() {
  return (
    <section className="bg-sand/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Classes"
            title="Sessions crafted for how you want to feel"
          />
          <Button href="/classes" variant="ghost" className="shrink-0">
            View all classes <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link href={`/classes#${cls.id}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={cls.image}
                    alt={cls.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-5 text-cream">
                    <p className="text-xs uppercase tracking-wider text-cream/70">
                      {cls.duration} · {cls.level}
                    </p>
                    <p className="mt-1 font-serif text-xl">{cls.title}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
