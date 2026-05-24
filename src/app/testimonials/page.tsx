import { PageHero } from "@/components/shared/PageHero";
import { studio, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Stories",
  description: "Community stories from Studio N°8 — reformer Pilates in Bhaisepati, Lalitpur.",
};

export default function TestimonialsPage() {
  const quotes = testimonials.filter((t) => t.id !== "3");

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Transformation happens quietly"
        description="Our members come for how they feel — calm instruction, small groups, and equipment that meets you where you are."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {quotes.map((t) => (
              <blockquote
                key={t.id}
                className="rounded-2xl border border-sand bg-white/50 p-10 md:p-12"
              >
                <p className="font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-sand pt-6">
                  <p className="font-medium text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal/50">{t.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sand bg-sand/25 p-8 text-center md:p-10">
            <p className="font-serif text-xl text-charcoal">
              Follow the studio on Instagram
            </p>
            <p className="mt-2 text-sm text-charcoal/60">
              Schedules, stories, and behind-the-scenes from Bhaisepati.
            </p>
            <a
              href={studio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-charcoal underline-offset-4 hover:underline"
            >
              @studion8pilates →
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="font-serif text-2xl text-charcoal">
              Ready to write your own story?
            </p>
            <Button href="/book" className="mt-6">
              Book your first class
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
