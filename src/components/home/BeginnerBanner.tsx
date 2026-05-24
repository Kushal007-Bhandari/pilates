import Link from "next/link";
import { Heart } from "lucide-react";

export function BeginnerBanner() {
  return (
    <section className="border-y border-sand/80 bg-sand/25 py-10 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex gap-4">
          <Heart
            className="mt-1 shrink-0 text-sage"
            size={22}
            strokeWidth={1.5}
            aria-hidden
          />
          <div>
            <p className="font-serif text-xl text-charcoal md:text-2xl">
              New to Pilates? You belong here.
            </p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-charcoal/65">
              All levels welcome. Certified instructors meet you where you are —
              no judgment, calm guidance, equipment tailored to your body.
            </p>
          </div>
        </div>
        <Link
          href="/contact#faq"
          className="shrink-0 text-sm font-medium text-charcoal underline-offset-4 hover:underline"
        >
          First-visit FAQ →
        </Link>
      </div>
    </section>
  );
}
