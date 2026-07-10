"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Users,
} from "lucide-react";
import {
  schedule,
  scheduleActivities,
  scheduleInstructors,
  studio,
  type ScheduleSlot,
} from "@/lib/data";
import {
  addDays,
  formatShortDate,
  getOpenWeekDates,
  isToday,
  startOfWeekSunday,
  toInputDate,
} from "@/lib/schedule-utils";

type ActivityFilter = (typeof scheduleActivities)[number]["value"];
type InstructorFilter = (typeof scheduleInstructors)[number]["value"];
type ViewMode = "list" | "grid";

function matchesActivity(slot: ScheduleSlot, filter: ActivityFilter): boolean {
  if (filter === "all") return true;
  if (filter === "group") return slot.activityType === "group";
  if (filter === "private") return slot.activityType === "private";
  if (filter === "reformer") return slot.classId === "reformer" || slot.classId === "equipment";
  if (filter === "yoga") return slot.classId === "yoga";
  if (filter === "barre") return slot.classId === "barre";
  if (filter === "sound") return slot.classId === "sound";
  if (filter === "wellness") return slot.classId === "wellness";
  return true;
}

function matchesInstructor(slot: ScheduleSlot, filter: InstructorFilter): boolean {
  if (filter === "all") return true;
  return slot.instructors.some((name) => name.toLowerCase() === filter);
}

function maxQtyForSlot(slot: ScheduleSlot): number {
  return slot.activityType === "private" ? 1 : slot.spots;
}

function SlotRow({
  slot,
  qty,
  onQtyChange,
}: {
  slot: ScheduleSlot;
  qty: number;
  onQtyChange: (qty: number) => void;
}) {
  const isPrivate = slot.activityType === "private";
  const maxQty = maxQtyForSlot(slot);

  return (
    <div className="grid grid-cols-1 gap-4 border-b border-charcoal/10 bg-white px-4 py-4 last:border-b-0 lg:grid-cols-[minmax(8rem,10rem)_minmax(0,1fr)_auto] lg:items-center lg:gap-6 lg:px-8 xl:px-10">
      <p className="text-sm font-medium tabular-nums text-charcoal">{slot.time}</p>

      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-charcoal">
          {slot.className}
        </p>
        <p className="mt-1 text-sm text-charcoal/55">
          {slot.instructor}
          <span className="mx-1.5 text-charcoal/25">·</span>
          {slot.location}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap lg:justify-end">
        <div className="flex items-center gap-1.5 text-sm text-sage">
          <Users size={16} strokeWidth={1.75} aria-hidden />
          <span className="tabular-nums">
            {isPrivate ? "1 spot" : `Up to ${slot.spots}`}
          </span>
        </div>

        <label className="sr-only" htmlFor={`qty-${slot.id}`}>
          Number of spots for {slot.className}
        </label>
        <select
          id={`qty-${slot.id}`}
          value={qty}
          onChange={(e) => onQtyChange(Number(e.target.value))}
          className="h-10 min-w-[3.25rem] rounded-md border border-charcoal/15 bg-white px-2 text-sm text-charcoal outline-none focus:border-charcoal/35"
        >
          {Array.from({ length: maxQty }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <Link
          href={`/book?slot=${slot.id}&qty=${qty}`}
          className="inline-flex h-10 min-w-[6.5rem] items-center justify-center rounded-md bg-charcoal px-4 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30 focus-visible:ring-offset-2"
        >
          {isPrivate ? "Book a spot" : "Book"}
        </Link>
      </div>
    </div>
  );
}

export function ScheduleWidget() {
  const [weekStart, setWeekStart] = useState(() => startOfWeekSunday(new Date()));
  const [activity, setActivity] = useState<ActivityFilter>("all");
  const [instructor, setInstructor] = useState<InstructorFilter>("all");
  const [view, setView] = useState<ViewMode>("list");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredByWeek = useMemo(() => {
    const dates = getOpenWeekDates(weekStart);
    return dates
      .map(({ dayName, date }) => {
        const slots = schedule
          .filter((slot) => slot.day === dayName)
          .filter((slot) => matchesActivity(slot, activity))
          .filter((slot) => matchesInstructor(slot, instructor));

        return { dayName, date, slots };
      })
      .filter((group) => group.slots.length > 0);
  }, [weekStart, activity, instructor]);

  const weekEnd = addDays(weekStart, 5);

  const setQty = (slotId: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [slotId]: qty }));
  };

  const getQty = (slotId: string) => quantities[slotId] ?? 1;

  const selectClass =
    "h-10 min-w-0 flex-1 appearance-none rounded-md border border-charcoal/15 bg-white bg-[length:12px] bg-[right_0.65rem_center] bg-no-repeat px-3 pr-8 text-sm text-charcoal outline-none focus:border-charcoal/35 sm:max-w-[11rem] sm:flex-none";
  const selectBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232C2825' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

  return (
    <div className="w-full bg-[#f0ebe4]">
      {/* Filters */}
      <div className="flex flex-col gap-3 border-b border-charcoal/10 bg-[#ebe4db] px-4 py-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:px-8 xl:px-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value as ActivityFilter)}
            className={selectClass}
            style={{ backgroundImage: selectBg }}
            aria-label="Filter by activity"
          >
            {scheduleActivities.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <select
            defaultValue="all"
            className={selectClass}
            style={{ backgroundImage: selectBg }}
            aria-label="Location"
            disabled
          >
            <option value="all">{studio.parentBrand} · Pulchowk</option>
          </select>

          <select
            value={instructor}
            onChange={(e) => setInstructor(e.target.value as InstructorFilter)}
            className={selectClass}
            style={{ backgroundImage: selectBg }}
            aria-label="Filter by instructor"
          >
            {scheduleInstructors.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 lg:ml-auto">
          <input
            type="date"
            value={toInputDate(weekStart)}
            onChange={(e) => {
              if (!e.target.value) return;
              setWeekStart(startOfWeekSunday(new Date(e.target.value)));
            }}
            className="h-10 rounded-md border border-charcoal/15 bg-white px-3 text-sm text-charcoal outline-none focus:border-charcoal/35"
            aria-label="Jump to week"
          />

          <div className="flex overflow-hidden rounded-md border border-charcoal/15 bg-white">
            <button
              type="button"
              onClick={() => setView("list")}
              aria-pressed={view === "list"}
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                view === "list"
                  ? "bg-charcoal text-cream"
                  : "text-charcoal/60 hover:bg-sand/40"
              }`}
              aria-label="List view"
            >
              <List size={18} />
            </button>
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
              className={`flex h-10 w-10 items-center justify-center border-l border-charcoal/10 transition-colors ${
                view === "grid"
                  ? "bg-charcoal text-cream"
                  : "text-charcoal/60 hover:bg-sand/40"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Week navigation */}
      <div className="flex items-center justify-center gap-3 border-b border-charcoal/10 bg-[#ebe4db] px-4 py-3 text-sm text-charcoal">
        <button
          type="button"
          onClick={() => setWeekStart((d) => addDays(d, -7))}
          className="flex h-9 w-9 items-center justify-center rounded-md text-charcoal/70 transition-colors hover:bg-white/60 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20"
          aria-label="Previous week"
        >
          <ChevronLeft size={18} />
        </button>
        <p className="min-w-[9rem] text-center font-medium tabular-nums">
          {formatShortDate(weekStart)} – {formatShortDate(weekEnd)}
        </p>
        <button
          type="button"
          onClick={() => setWeekStart((d) => addDays(d, 7))}
          className="flex h-9 w-9 items-center justify-center rounded-md text-charcoal/70 transition-colors hover:bg-white/60 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20"
          aria-label="Next week"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Schedule body */}
      {filteredByWeek.length === 0 ? (
        <p className="px-5 py-16 text-center text-sm text-charcoal/50">
          No sessions match your filters this week.
        </p>
      ) : view === "list" ? (
        <div>
          {filteredByWeek.map(({ dayName, date, slots }) => (
            <section key={`${dayName}-${date.toISOString()}`}>
              <div className="border-b border-charcoal/10 bg-white/70 px-4 py-2.5 lg:px-8 xl:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/55">
                  {isToday(date) && (
                    <span className="mr-3 text-charcoal">Today</span>
                  )}
                  {dayName} · {formatShortDate(date)}
                </p>
              </div>
              {slots.map((slot) => (
                <SlotRow
                  key={slot.id}
                  slot={slot}
                  qty={getQty(slot.id)}
                  onQtyChange={(qty) => setQty(slot.id, qty)}
                />
              ))}
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-px bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredByWeek.map(({ dayName, date, slots }) => (
            <div key={`${dayName}-grid`} className="bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                {isToday(date) ? "Today · " : ""}
                {dayName.slice(0, 3)} {formatShortDate(date)}
              </p>
              <ul className="mt-3 space-y-3">
                {slots.map((slot) => (
                  <li
                    key={slot.id}
                    className="rounded-lg border border-charcoal/10 p-3"
                  >
                    <p className="text-xs text-charcoal/50">{slot.time}</p>
                    <p className="mt-1 text-sm font-semibold text-charcoal">
                      {slot.className}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <select
                        value={getQty(slot.id)}
                        onChange={(e) => setQty(slot.id, Number(e.target.value))}
                        className="h-9 rounded-md border border-charcoal/15 px-2 text-sm"
                        aria-label={`Quantity for ${slot.className}`}
                      >
                        {Array.from(
                          { length: maxQtyForSlot(slot) },
                          (_, i) => i + 1
                        ).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <Link
                        href={`/book?slot=${slot.id}&qty=${getQty(slot.id)}`}
                        className="inline-flex h-9 items-center rounded-md bg-charcoal px-3 text-[10px] font-medium uppercase tracking-wider text-cream hover:bg-espresso"
                      >
                        Book
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <p className="border-t border-charcoal/10 bg-[#ebe4db] px-4 py-3 text-xs leading-relaxed text-charcoal/50 lg:px-8 xl:px-10">
        Saturday: check Instagram for updates · Group blocks are morning and evening — share your
        preferred start time when you book · Confirm on WhatsApp after booking
      </p>
    </div>
  );
}
