import { PageHero } from "@/components/shared/PageHero";
import { ScheduleList } from "@/components/schedule/ScheduleList";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Schedule",
  description:
    "Weekly Pilates schedule at Studio N°8 — group mornings & evenings, private sessions 11am–4pm, Sun–Fri.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title="Find your rhythm"
        description="Sun–Fri group blocks morning & evening, plus private sessions 11am–4pm. Tap Book and confirm on WhatsApp."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <ScheduleList />
          <div className="mt-12 rounded-2xl bg-sand/30 p-8 text-center">
            <p className="font-serif text-xl text-charcoal">
              Prefer a private session?
            </p>
            <p className="mt-2 text-sm text-charcoal/60">
              Flexible times outside the group schedule.
            </p>
            <Button href="/contact" variant="outline" className="mt-4">
              Enquire privately
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
