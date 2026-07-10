import { PageHero } from "@/components/shared/PageHero";
import { InstructorPlaceholder } from "@/components/trainers/InstructorPlaceholder";
import { trainers } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Trainers",
  description:
    "Meet Anjali, Maya, and Sara — Pilates, yoga, and wellness instructors at Align, Lalitpur.",
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Instructors"
        title="Meet the Align team"
        description="Shalu, Samuyal, and Rohan lead every session with certified instruction, calm energy, and programs tailored to how you move."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {trainers.map((trainer) => (
              <article
                key={trainer.id}
                className="group overflow-hidden rounded-2xl border border-sand bg-white/40 shadow-sm shadow-charcoal/5"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <InstructorPlaceholder
                    name={trainer.name}
                    specialties={trainer.specialties}
                    className="h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-stone">
                    {trainer.role}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-charcoal">
                    {trainer.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {trainer.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {trainer.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-sand/60 px-3 py-1 text-xs text-charcoal/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/book">Book with an instructor</Button>
          </div>
        </div>
      </section>
    </>
  );
}
