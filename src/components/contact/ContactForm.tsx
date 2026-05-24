"use client";

import { useRef, useState } from "react";
import { buildContactMailtoUrl, buildContactWhatsAppUrl } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

function readForm(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  };
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");

  const validate = (form: HTMLFormElement) => {
    const details = readForm(form);
    if (!details.name || !details.email || !details.message) {
      setError("Please fill in all fields.");
      return null;
    }
    setError("");
    return details;
  };

  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const details = validate(e.currentTarget);
    if (!details) return;
    window.open(buildContactWhatsAppUrl(details), "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const form = formRef.current;
    if (!form) return;
    const details = validate(form);
    if (!details) return;
    window.location.href = buildContactMailtoUrl(details);
  };

  return (
    <form ref={formRef} className="space-y-5" onSubmit={handleWhatsApp}>
      <p className="rounded-xl border border-sand bg-white/60 p-4 text-sm text-charcoal/65">
        Fastest reply on WhatsApp. Or use email if you prefer — we respond within
        24 hours.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
            Name
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full rounded-xl border border-sand bg-white/80 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-xl border border-sand bg-white/80 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-stone">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-sand bg-white/80 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20"
          placeholder="Tell us how we can help..."
        />
      </label>

      {error && (
        <p className="text-sm text-red-700/80" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="submit" className="w-full sm:w-auto">
          Send on WhatsApp
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={handleEmail}
        >
          Send by email
        </Button>
      </div>
    </form>
  );
}
