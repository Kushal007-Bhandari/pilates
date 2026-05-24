import Link from "next/link";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import { navLinks, studio } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl">{studio.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/60">
              Pilates & Wellness in Bhaisepati, Lalitpur — reformer, equipment
              circuits, and personal sessions led by certified instructors.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={studio.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:bg-cream/10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/40">
              Explore
            </p>
            <ul className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cream/40">
              Visit
            </p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cream/40" />
                <span>
                  {studio.address}
                  <br />
                  {studio.addressLine2}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 text-cream/40" />
                <a href={`tel:${studio.phoneTel}`} className="hover:text-cream">
                  {studio.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="shrink-0 text-cream/40" />
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-cream"
                >
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {studio.fullName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-cream/70">
              Privacy
            </Link>
            <p>{studio.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
