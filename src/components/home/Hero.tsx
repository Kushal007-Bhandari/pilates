"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroMedia } from "@/components/home/HeroMedia";

export function Hero() {
  return (
    <section
      data-page-hero
      className="relative flex flex-col bg-cream lg:grid lg:min-h-[100svh] lg:grid-cols-2"
      aria-label="Welcome"
    >
      {/* Video / poster — inset below fixed header so the nav does not cover the frame */}
      <div className="relative order-1 h-[calc(38vh+var(--site-header-height))] min-h-[calc(240px+var(--site-header-height))] max-h-[calc(360px+var(--site-header-height))] w-full overflow-hidden sm:h-[calc(42vh+var(--site-header-height))] sm:max-h-[calc(400px+var(--site-header-height))] lg:order-2 lg:h-auto lg:min-h-[100svh] lg:max-h-none">
        <div className="absolute inset-x-0 bottom-0 top-[var(--site-header-height)]">
          <div className="relative h-full w-full">
            <HeroMedia />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[var(--site-header-height)] bg-gradient-to-b from-charcoal/20 via-transparent to-cream/90 lg:bg-gradient-to-r lg:from-cream/80 lg:via-cream/25 lg:to-transparent"
          aria-hidden
        />
        <p className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:right-6 lg:left-auto lg:text-right">
          <span className="inline-block rounded-full bg-cream/95 px-3 py-1.5 text-[10px] uppercase tracking-wider text-charcoal shadow-sm">
            Certified instruction · All levels
          </span>
        </p>
      </div>

      {/* Copy — second on phone (still in first screen), left on desktop */}
      <div className="relative z-10 order-2 flex flex-col px-5 pb-8 pt-5 sm:px-6 sm:pb-10 lg:order-1 lg:justify-center lg:px-10 lg:pb-32 lg:pt-32 xl:px-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-stone"
        >
          Lalitpur · Pilates & Wellness
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl font-serif text-[2rem] leading-[1.1] text-charcoal sm:text-4xl lg:text-6xl xl:text-7xl text-balance"
        >
          Strength. Precision.
          <br />
          <span className="italic text-charcoal/85">Your pace, your progress.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-charcoal/75 sm:text-base lg:text-lg"
        >
          Small-group reformer Pilates in Bhaisepati — certified guidance, beginners welcome.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button href="/book" className="w-full sm:w-auto">
            Book Your First Class
          </Button>
          <Button href="/schedule" variant="outline" className="w-full sm:w-auto">
            View schedule
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 lg:mt-10"
        >
          <Link
            href="#experience"
            className="inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest text-charcoal/45 transition-colors hover:text-charcoal"
          >
            <span>Discover the studio</span>
            <ArrowDown size={14} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
