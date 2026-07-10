import Link from "next/link";
import { StudioLogo } from "@/components/layout/StudioLogo";
import { navLinks, studio } from "@/lib/data";

const footerLinkClass =
  "inline-flex min-h-9 items-center text-charcoal/80 transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2";

const exploreLinks = navLinks.slice(1, 5);
const moreLinks = navLinks.slice(5);

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream text-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
          <div className="order-2 md:order-1 md:max-w-xs">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-charcoal/70">
              Visit
            </p>
            <address className="mt-3 space-y-2.5 text-sm not-italic leading-relaxed text-charcoal/65">
              <p>
                {studio.address}
                <br />
                {studio.addressLine2}
              </p>
              <p>
                <a
                  href={`tel:${studio.phoneTel}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {studio.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${studio.email}`}
                  className="transition-colors hover:text-charcoal"
                >
                  {studio.email}
                </a>
              </p>
            </address>
            <a
              href={studio.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-9 items-center text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/70 transition-colors hover:text-charcoal"
            >
              Get directions
            </a>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <StudioLogo variant="footer" />
          </div>

          <div className="order-3 flex flex-col gap-6 sm:flex-row sm:justify-end md:gap-14">
            <ul className="space-y-2.5 text-[11px] font-medium uppercase tracking-[0.2em]">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5 text-[11px] font-medium uppercase tracking-[0.2em]">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={studio.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-charcoal/45 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className={`${footerLinkClass} text-charcoal/45 hover:text-charcoal/70`}>
              Privacy
            </Link>
          </div>
          <div className="text-left sm:text-right">
            <p>
              © {new Date().getFullYear()} {studio.fullName}. All rights reserved.
            </p>
            <p className="mt-2 max-w-md text-[10px] normal-case leading-relaxed tracking-normal text-charcoal/40">
              {studio.hours}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
