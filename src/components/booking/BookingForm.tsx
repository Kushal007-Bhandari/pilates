"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { studio } from "@/lib/data";
import type { ScheduleSlot } from "@/lib/data";
import { buildBookingWhatsAppUrl, openExternalBooking } from "@/lib/booking";
import { Button } from "@/components/ui/Button";

type Props = {
  slot?: ScheduleSlot | null;
  planName?: string | null;
  classInterest?: string | null;
};

export function BookingForm({ slot, planName, classInterest }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));

    if (studio.bookingFormUrl) {
      openExternalBooking(slot ?? null);
    }

    window.location.href = buildBookingWhatsAppUrl(slot ?? null, {
      name: form.name.trim(),
      phone: form.phone.trim(),
      planName: planName ?? undefined,
      classInterest: classInterest ?? undefined,
      notes: `Email: ${form.email.trim()}${form.notes.trim() ? ` — ${form.notes.trim()}` : ""}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="rounded-xl border border-sand bg-white/60 p-4 text-sm text-charcoal/65">
        Complete your details below, then continue on WhatsApp
        {studio.bookingFormUrl ? " and our booking form" : ""} to confirm your spot.
      </p>

      {slot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl border border-sand bg-white/60 p-5"
        >
          <p className="text-xs uppercase tracking-wider text-stone">Selected session</p>
          <p className="mt-1 font-serif text-xl text-charcoal">{slot.className}</p>
          <p className="mt-1 text-sm text-charcoal/60">
            {slot.day} · {slot.time}
          </p>
        </motion.div>
      )}

      {!slot && (planName || classInterest) && (
        <div className="rounded-xl border border-sand bg-white/60 p-5">
          <p className="text-xs uppercase tracking-wider text-stone">Your selection</p>
          <p className="mt-1 font-serif text-xl text-charcoal">
            {planName ?? classInterest}
          </p>
        </div>
      )}

      {!slot && !planName && !classInterest && (
        <p className="text-sm text-charcoal/60">
          No time selected — you can still enquire. Pick a time on the{" "}
          <a href="/schedule" className="underline">
            schedule
          </a>{" "}
          or choose a membership first.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
            Full name *
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-sand bg-white/80 px-4 py-3 text-charcoal outline-none focus:border-charcoal/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
            Phone *
          </span>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-sand bg-white/80 px-4 py-3 text-charcoal outline-none focus:border-charcoal/30"
            placeholder="+977 ..."
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
          Email *
        </span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-sand bg-white/80 px-4 py-3 text-charcoal outline-none focus:border-charcoal/30"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
          Notes (optional)
        </span>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full resize-none rounded-xl border border-sand bg-white/80 px-4 py-3 text-charcoal outline-none focus:border-charcoal/30"
          placeholder="First time? Membership interest?"
        />
      </label>

      {error && (
        <p className="text-sm text-red-600/80" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Opening..." : "Continue to book"}
      </Button>
    </form>
  );
}
