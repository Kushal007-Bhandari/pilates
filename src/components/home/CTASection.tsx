"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-20 text-center md:px-16 md:py-28"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_50%,#D4A59A_0%,transparent_50%)]" />
          </div>
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
              Begin your journey
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl text-cream md:text-5xl text-balance">
              Your first session is the start of feeling at home in your body
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/60">
              Memberships & pricing — message us on WhatsApp or Instagram @studion8pilates.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book" variant="secondary">
                Book a class
              </Button>
              <Button
                href="/memberships"
                variant="outline"
                className="!border-cream/30 !text-cream hover:!bg-cream/10"
              >
                View Memberships
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
