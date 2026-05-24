import { PageHero } from "@/components/shared/PageHero";
import { studio } from "@/lib/data";

export const metadata = {
  title: "Privacy",
  description: `Privacy policy for ${studio.fullName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your information, handled with care"
        description="How we use details you share when you book or contact us."
      />
      <section className="py-16 md:py-24">
        <div className="prose-studio mx-auto max-w-2xl px-5 md:px-8">
          <div className="space-y-6 text-sm leading-relaxed text-charcoal/70">
            <p>
              When you book or contact {studio.name}, we receive the information
              you provide (name, phone, email, and message). This is used only to
              respond, confirm sessions, and improve your studio experience.
            </p>
            <p>
              Booking enquiries are completed via WhatsApp or our booking form
              when available. We do not sell your data to third parties.
            </p>
            <p>
              For questions or to request deletion of your contact details, email{" "}
              <a
                href={`mailto:${studio.email}`}
                className="text-charcoal underline-offset-4 hover:underline"
              >
                {studio.email}
              </a>{" "}
              or message us on WhatsApp.
            </p>
            <p className="text-charcoal/50">
              Last updated {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
