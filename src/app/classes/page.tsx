import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { classes } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Classes",
  description:
    "Group reformer, equipment circuit, and personal Pilates sessions at Studio N°8 — Bhaisepati, Lalitpur.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Classes"
        title="Every session is an experience"
        description="Reformer, Cadillac, Wunda Chair, TRX & more — 60-minute sessions rotated through the week for every level."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-24">
            {classes.map((cls, i) => (
              <article
                key={cls.id}
                id={cls.id}
                className={`grid items-center gap-12 scroll-mt-28 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={cls.image}
                    alt={cls.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone">
                    {cls.duration} · {cls.level}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">
                    {cls.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/70 md:text-base">
                    {cls.description}
                  </p>
                  <Button href={`/book?class=${cls.id}`} className="mt-6">
                    Book this class
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-sand/40 p-10 text-center md:p-14">
            <p className="font-serif text-2xl text-charcoal md:text-3xl">
              Not sure where to start?
            </p>
            <p className="mt-3 text-sm text-charcoal/60">
              Message us on WhatsApp for membership options and pricing — we&apos;ll
              help you choose group or personal sessions.
            </p>
            <Button href="/book" variant="outline" className="mt-6">
              Book a session
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
