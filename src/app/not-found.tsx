import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-stone">404</p>
      <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
        This page has left the studio
      </h1>
      <p className="mt-4 max-w-md text-sm text-charcoal/60">
        The link may be outdated. Head home or book a session — we&apos;re here
        Sun–Fri in Bhaisepati.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/book" variant="outline">
          Book a class
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-6 text-sm text-charcoal/50 underline-offset-4 hover:text-charcoal hover:underline"
      >
        Contact us
      </Link>
    </section>
  );
}
