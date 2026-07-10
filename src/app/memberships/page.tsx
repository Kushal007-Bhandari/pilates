import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import {
  groupPackages,
  pricingExtras,
  privatePackages,
  studio,
} from "@/lib/data";

export const metadata = {
  title: "Memberships",
  description:
    "Align Pilates memberships — group packages from Rs 8,000, private sessions, trial & drop-in at One Sky Building, Lalitpur.",
};

function PricingCard({
  title,
  plans,
}: {
  title: string;
  plans: { id: string; name: string; price: string; period?: string; highlighted?: boolean }[];
}) {
  return (
    <article className="rounded-2xl border border-sand bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
      <h2 className="font-serif text-2xl text-charcoal md:text-3xl">{title}</h2>
      <ul className="mt-6 divide-y divide-sand">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
          >
            <div>
              <p className="font-medium text-charcoal">{plan.name}</p>
              {plan.period && (
                <p className="mt-0.5 text-xs text-charcoal/50">{plan.period}</p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <p className="font-serif text-xl tabular-nums text-charcoal md:text-2xl">
                {plan.price}
              </p>
              <Link
                href={`/book?plan=${plan.id}`}
                className="inline-flex min-h-10 items-center rounded-full border border-charcoal/15 px-4 text-xs font-medium uppercase tracking-wider text-charcoal transition-colors hover:bg-charcoal hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25"
              >
                Book
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Memberships"
        title="Memberships"
        description="Group packages, private sessions, trial & drop-in — book on WhatsApp to confirm your plan."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <PricingCard title="Normal package" plans={groupPackages} />
            <PricingCard title="Private sessions" plans={privatePackages} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pricingExtras.map((extra) => (
              <article
                key={extra.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sand bg-sand/25 px-6 py-5"
              >
                <div>
                  <p className="font-medium text-charcoal">{extra.name}</p>
                  <p className="mt-1 text-sm text-charcoal/55">{extra.note}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-serif text-2xl tabular-nums text-charcoal">
                    {extra.price}
                  </p>
                  <Link
                    href={`/book?plan=${extra.id}`}
                    className="inline-flex min-h-10 items-center rounded-full bg-charcoal px-4 text-xs font-medium uppercase tracking-wider text-cream transition-colors hover:bg-espresso"
                  >
                    Book
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-charcoal/55">
            Questions about packages? Message us on{" "}
            <a
              href={studio.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-charcoal underline hover:text-espresso"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a
              href={studio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-charcoal underline hover:text-espresso"
            >
              @{studio.instagramHandle}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
