"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { schedule, days } from "@/lib/data";

export function ScheduleList() {
  const [activeDay, setActiveDay] = useState<string>("Sunday");

  const filtered = useMemo(
    () => schedule.filter((s) => s.day === activeDay),
    [activeDay]
  );

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide"
        role="tablist"
        aria-label="Days of the week"
      >
        {days.map((day) => (
          <button
            key={day}
            type="button"
            role="tab"
            aria-selected={activeDay === day}
            onClick={() => setActiveDay(day)}
            className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 ${
              activeDay === day
                ? "bg-charcoal text-cream"
                : "bg-white/60 text-charcoal/60 hover:bg-sand/50"
            }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs leading-relaxed text-charcoal/50">
        Saturday: studio closed · Group hours are morning and evening blocks — message
        us for your preferred start time · Confirm on WhatsApp after booking
      </p>

      <div className="mt-6 space-y-3" role="tabpanel">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-charcoal/50">No classes this day.</p>
        ) : (
          filtered.map((slot, i) => {
            const isPrivate = slot.classId === "private";

            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-4 rounded-2xl border border-sand bg-white/50 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs text-charcoal/50">{slot.time}</p>
                  <p className="font-serif text-xl text-charcoal">{slot.className}</p>
                  <p className="mt-1 text-sm text-charcoal/60">
                    {slot.instructor}
                    <span className="mx-2 text-sand">·</span>
                    <span>
                      {isPrivate
                        ? "1-on-1 · flexible time within this window"
                        : "Small groups · share your preferred time when you book"}
                    </span>
                  </p>
                </div>
                <Link
                  href={`/book?slot=${slot.id}`}
                  className="inline-flex min-h-11 min-w-[7rem] items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30"
                >
                  Book
                </Link>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
