"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section
      data-page-hero
      className="border-b border-sand/60 bg-sand/20 pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-xs uppercase tracking-[0.2em] text-stone"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-3xl font-serif text-4xl text-charcoal md:text-6xl text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
