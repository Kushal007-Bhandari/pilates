"use client";

import { motion, useReducedMotion } from "framer-motion";
import { studio } from "@/lib/data";
import { HeroMedia } from "@/components/home/HeroMedia";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-page-hero
      className="relative min-h-[calc(100svh-var(--home-footer-peek))] w-full overflow-hidden bg-[#2a1818]"
      aria-label="Welcome"
    >
      <div className="absolute inset-0">
        <HeroMedia variant="cinematic" />
        <div
          className="pointer-events-none absolute inset-0 bg-black/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-var(--home-footer-peek))] flex-col items-center justify-center px-6 pb-16 pt-[calc(var(--site-header-height)+1.5rem)] text-center md:px-12 md:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-balance sm:max-w-3xl md:max-w-4xl [text-shadow:0_1px_20px_rgba(0,0,0,0.35)]"
        >
          <h1 className="text-[0.65rem] font-medium uppercase leading-[1.85] tracking-[0.18em] text-white/95 sm:text-xs sm:tracking-[0.2em] md:text-[0.8125rem] md:leading-[1.9] md:tracking-[0.22em]">
            <span className="text-white">{studio.homeManifestoLead}</span>
            {" — "}
            {studio.homeManifesto}
          </h1>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.35 }}
          className="mt-7 font-serif text-xl italic leading-tight text-white/90 sm:mt-8 sm:text-2xl md:mt-10 md:text-[1.75rem]"
        >
          {studio.homeLocationLabel}
        </motion.p>
      </div>
    </section>
  );
}
