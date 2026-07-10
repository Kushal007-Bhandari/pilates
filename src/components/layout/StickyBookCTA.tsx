"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const BOOK_ROUTES = ["/book"];

export function StickyBookCTA() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const lastScrollY = useRef(0);

  const isBookRoute = BOOK_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  const visible =
    pathname !== "/" &&
    pathname !== "/schedule" &&
    pastHero &&
    !hiddenByScroll &&
    !isBookRoute;

  // Show CTA only after the page hero scrolls out of view
  useEffect(() => {
    const hero = document.querySelector("[data-page-hero]");
    if (!hero) {
      setPastHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-8% 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Hide while scrolling down; show when scrolling up (less intrusive on long pages)
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (!pastHero) return;

      if (delta > 14) setHiddenByScroll(true);
      else if (delta < -10) setHiddenByScroll(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pastHero]);

  useEffect(() => {
    setHiddenByScroll(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-book-cta"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="sticky-book-cta pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
        >
          <Link
            href="/book"
            className="pointer-events-auto flex min-h-12 min-w-[10.5rem] items-center justify-center rounded-full border border-charcoal/10 bg-charcoal/90 px-5 py-2.5 text-sm font-medium tracking-wide text-cream shadow-md backdrop-blur-md transition-colors active:bg-espresso"
          >
            Book a class
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
