import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { memberships } from "@/lib/data";
import { Check } from "lucide-react";

export const metadata = {
  title: "Memberships",
  description:
    "12-session monthly, unlimited monthly, and personal Pilates at Studio N°8 — Bhaisepati, Lalitpur.",
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Memberships that fit your rhythm"
        description="12-session monthly, unlimited, or personal sessions — message us on WhatsApp for pricing and the plan that suits you."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border p-8 transition-shadow ${
                  plan.highlighted
                    ? "border-charcoal bg-charcoal text-cream shadow-xl"
                    : "border-sand bg-white/50 text-charcoal"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blush px-4 py-1 text-xs font-medium text-espresso">
                    Most popular
                  </span>
                )}
                <h2 className="font-serif text-2xl">{plan.name}</h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-cream/60" : "text-charcoal/60"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 font-serif text-4xl">{plan.price}</p>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-cream/50" : "text-charcoal/50"
                  }`}
                >
                  {plan.period}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-blush" : "text-sage"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-cream/80" : "text-charcoal/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/book?plan=${plan.id}`}
                  className={`mt-8 flex min-h-11 items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 focus-visible:ring-offset-2 ${
                    plan.highlighted
                      ? "bg-cream text-charcoal hover:bg-sand"
                      : "bg-charcoal text-cream hover:bg-espresso"
                  }`}
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-charcoal/50">
            Pricing available on request — WhatsApp, email, or Instagram.
            <br />
            Questions?{" "}
            <a href="/contact" className="underline hover:text-charcoal">
              Contact us
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
