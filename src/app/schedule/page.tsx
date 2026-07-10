import { ScheduleWidget } from "@/components/schedule/ScheduleWidget";

export const metadata = {
  title: "Schedule",
  description:
    "Weekly schedule at Align Pilates & Wellness — Pilates, yoga, barre, sound healing & spa at One Sky Building, Lalitpur.",
};

export default function SchedulePage() {
  return (
    <section className="min-h-[calc(100svh-var(--site-header-height))] bg-[#f0ebe4] pt-[var(--site-header-height)]">
      <ScheduleWidget />
    </section>
  );
}
