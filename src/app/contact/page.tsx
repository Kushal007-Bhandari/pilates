import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { studio } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Visit Align Pilates & Wellness at One Sky Building, Pulchowk — WhatsApp, phone, and directions.",
};

const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  "A-Fit Studios One Sky Building Pulchowk Lalitpur Nepal"
)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Visit us at One Sky Building, message on WhatsApp, or send a note — we'll respond as soon as we can."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-sand bg-white/50 p-8">
                <h2 className="font-serif text-2xl text-charcoal">Visit us</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-3 text-sm text-charcoal/70">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-stone" />
                    <span>
                      {studio.address}
                      <br />
                      {studio.addressLine2}
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-charcoal/70">
                    <Clock size={18} className="shrink-0 text-stone" />
                    {studio.hours}
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Phone size={18} className="shrink-0 text-stone" />
                    <a
                      href={`tel:${studio.phoneTel}`}
                      className="hover:text-charcoal"
                    >
                      {studio.phone}
                    </a>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <Mail size={18} className="shrink-0 text-stone" />
                    <a
                      href={`mailto:${studio.email}`}
                      className="hover:text-charcoal"
                    >
                      {studio.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={studio.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-sand px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:bg-sand/30"
                  >
                    <Instagram size={14} />
                    Instagram
                  </a>
                  <a
                    href={studio.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-sand px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:bg-sand/30"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-sand">
                <iframe
                  title="Align Pilates on Google Maps"
                  src={mapsEmbedSrc}
                  className="h-64 w-full border-0 md:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={studio.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-t border-sand bg-sand/20 px-6 py-4 text-center text-xs uppercase tracking-wider text-stone transition-colors hover:bg-sand/40"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faq">
        <FAQSection />
      </div>
    </>
  );
}
