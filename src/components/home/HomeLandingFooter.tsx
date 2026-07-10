import Link from "next/link";
import { StudioLogo } from "@/components/layout/StudioLogo";
import { studio } from "@/lib/data";

export function HomeLandingFooter() {
  return (
    <footer id="home-footer" className="border-t border-charcoal/10 bg-cream text-charcoal">
      {/* Peek band — first thing visible below the hero fold */}
      <div className="border-b border-charcoal/10 px-5 py-5 md:px-8 md:py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-charcoal">
            Book your first class
          </p>
          <Link
            href="/book"
            className="inline-flex min-h-11 w-fit items-center border border-charcoal px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 focus-visible:ring-offset-2"
          >
            Book
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
          <div className="order-2 md:order-1 md:max-w-xs">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-charcoal/70">
              Beginners welcome
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
              New to Pilates?{" "}
              <Link
                href="/classes"
                className="font-medium text-charcoal underline decoration-charcoal/25 underline-offset-2 transition-colors hover:text-espresso"
              >
                Explore classes
              </Link>{" "}
              or{" "}
              <Link
                href="/memberships"
                className="font-medium text-charcoal underline decoration-charcoal/25 underline-offset-2 transition-colors hover:text-espresso"
              >
                view memberships
              </Link>
              .
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <StudioLogo variant="footer" />
          </div>

          <div className="order-3 flex flex-col gap-6 sm:flex-row sm:justify-end md:gap-14">
            <ul className="space-y-2.5 text-[11px] font-medium uppercase tracking-[0.2em]">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  About
                </Link>
              </li>
            </ul>
            <ul className="space-y-2.5 text-[11px] font-medium uppercase tracking-[0.2em]">
              <li>
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Instagram
                </a>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/memberships"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Memberships
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
                >
                  Book
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-charcoal/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="inline-flex min-h-9 items-center hover:text-charcoal/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2"
            >
              Privacy
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
