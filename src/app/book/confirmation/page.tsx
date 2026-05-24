import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { studio } from "@/lib/data";

export const metadata = {
  title: "Booking enquiry",
  robots: { index: false, follow: false },
};

export default function BookingConfirmationPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 pt-28 pb-20">
      <div className="max-w-md text-center">
        <CheckCircle className="mx-auto text-sage" size={56} strokeWidth={1.5} />
        <h1 className="mt-6 font-serif text-4xl text-charcoal">Almost there</h1>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          Complete your booking on WhatsApp so the studio can confirm your time.
          If WhatsApp didn&apos;t open, tap the button below.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={studio.whatsapp}>Open WhatsApp</Button>
          <Button href="/schedule" variant="outline">
            View schedule
          </Button>
        </div>

        <p className="mt-8 text-xs text-charcoal/45">
          Questions?{" "}
          <Link href="/contact" className="underline-offset-4 hover:underline">
            Contact us
          </Link>{" "}
          or call{" "}
          <a href={`tel:${studio.phoneTel}`} className="hover:text-charcoal">
            {studio.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
