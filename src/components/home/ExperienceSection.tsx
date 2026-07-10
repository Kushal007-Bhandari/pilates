"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Calm by design",
    text: "Soft light, natural textures, and unhurried sessions — your nervous system can finally exhale.",
  },
  {
    title: "Precision over intensity",
    text: "Every movement is intentional. Build real strength without the burnout of traditional fitness.",
  },
  {
    title: "A space for every body",
    text: "Beginners welcome. No judgment. Instructors who meet you exactly where you are.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The Align Experience"
            title="Equipment-rich Pilates, thoughtfully programmed"
            description="Every session uses professional apparatus — programs rotate weekly and refine monthly so your practice stays dynamic and results-driven."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/studio-curved-wall.png"
              alt="Align wellness studio interior — reformers at One Sky Building"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-sand/80 bg-white/40 p-8 backdrop-blur-sm"
            >
              <p className="font-serif text-2xl text-charcoal">{pillar.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
