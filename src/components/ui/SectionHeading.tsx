"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-stone">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal/70 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
