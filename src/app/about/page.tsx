import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { studioStory } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description:
    "Align Pilates & Wellness at One Sky Building — certified instruction, Pilates, yoga, barre & spa.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Pilates & wellness, tailored to you"
        description={studioStory.intro}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand/30">
              <Image
                src="/images/reformer-strap.png"
                alt="Pilates session at Align — One Sky Building, Pulchowk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone">Philosophy</p>
              <h2 className="mt-2 font-serif text-3xl text-charcoal md:text-4xl">
                Programs that evolve with you
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/70 md:text-base">
                <p>{studioStory.philosophy}</p>
                <p>{studioStory.equipment}</p>
                <p>
                  Open Sunday through Friday — group sessions mornings and evenings,
                  with personal sessions reserved 11am–4pm daily.
                </p>
              </div>
              <Button href="/book" className="mt-8">
                Book a session
              </Button>
            </div>
          </div>

          <div className="mt-24 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Certified instruction",
                text: "Each 60-minute session is led by certified instructors who tailor work to your body.",
              },
              {
                title: "Full equipment studio",
                text: "Reformer, Cadillac, Wunda Chair, Spine Corrector, Ladder Barrel, and TRX — rotated through the week.",
              },
              {
                title: "One Sky Building, Pulchowk",
                text: "Inside A-Fit Studios at One Sky Building — a calm wellness center in the heart of Lalitpur.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sand bg-white/40 p-8"
              >
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
