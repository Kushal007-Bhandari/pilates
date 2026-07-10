"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { BookingForm } from "@/components/booking/BookingForm";
import { classes, memberships, schedule } from "@/lib/data";

function BookContent() {
  const searchParams = useSearchParams();
  const slotId = searchParams.get("slot");
  const planId = searchParams.get("plan");
  const classId = searchParams.get("class");
  const qty = Math.max(1, Number(searchParams.get("qty")) || 1);

  const slot = useMemo(
    () => schedule.find((s) => s.id === slotId) ?? null,
    [slotId]
  );

  const planName = useMemo(
    () => memberships.find((m) => m.id === planId)?.name ?? null,
    [planId]
  );

  const classInterest = useMemo(
    () => classes.find((c) => c.id === classId)?.title ?? null,
    [classId]
  );

  const hasSelection = Boolean(slot || classInterest || planName);

  return (
    <>
      <PageHero
        eyebrow="Book"
        title="Reserve your spot"
        description={
          slot
            ? "Share your details — we'll open WhatsApp so you can confirm your spot with the studio."
            : hasSelection
              ? "Share your details — we'll open WhatsApp with your selection so the studio can confirm."
              : "Pick a time on the schedule, a class type, or send a general enquiry below."
        }
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          {!hasSelection && (
            <div className="mb-8 rounded-2xl border border-blush/30 bg-blush/10 p-5 text-sm text-charcoal/70">
              <p>
                No session selected.{" "}
                <Link href="/schedule" className="font-medium text-charcoal underline">
                  View the schedule
                </Link>{" "}
                and tap Book, or choose a class on the{" "}
                <Link href="/classes" className="font-medium text-charcoal underline">
                  classes
                </Link>{" "}
                page.
              </p>
            </div>
          )}
          <BookingForm
            slot={slot}
            planName={planName}
            classInterest={classInterest}
            qty={qty}
          />
        </div>
      </section>
    </>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center pt-32">
          <p className="text-sm text-charcoal/50">Loading...</p>
        </div>
      }
    >
      <BookContent />
    </Suspense>
  );
}
