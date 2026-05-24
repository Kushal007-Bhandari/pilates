"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-stone">Something went wrong</p>
      <h1 className="mt-4 font-serif text-4xl text-charcoal">Please try again</h1>
      <p className="mt-4 max-w-md text-sm text-charcoal/60">
        A brief error occurred. You can retry, or message us on WhatsApp if it
        keeps happening.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button href="/" variant="outline">
          Go home
        </Button>
      </div>
    </section>
  );
}
