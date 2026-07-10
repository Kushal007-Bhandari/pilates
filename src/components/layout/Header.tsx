"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { homeNavLinks, studio } from "@/lib/data";

const MENU_ID = "mobile-nav-menu";

function StudioLogo({ light }: { light: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-baseline gap-1.5 leading-none">
      <span
        className={`font-serif text-base transition-colors sm:text-lg ${
          light
            ? "text-cream/90 group-hover:text-cream"
            : "text-charcoal/80 group-hover:text-charcoal"
        }`}
      >
        {studio.logoLead}
      </span>
      <span
        className={`font-serif text-[2rem] font-medium tracking-tight transition-colors sm:text-[2.35rem] ${
          light
            ? "text-cream group-hover:text-cream/95"
            : "text-charcoal group-hover:text-espresso"
        }`}
      >
        {studio.logoMark}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [pastHomeHero, setPastHomeHero] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  const lightHeader = isHome && !pastHomeHero && !open;

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isHome) {
      setPastHomeHero(false);
      return;
    }

    const hero = document.querySelector("[data-page-hero]");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHomeHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      document.body.setAttribute("data-mobile-menu-open", "");
      menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    } else {
      document.body.removeAttribute("data-mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-mobile-menu-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          lightHeader ? "bg-transparent" : "bg-cream/90 shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[100%] items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <StudioLogo light={lightHeader} />

          <nav
            className="hidden items-center gap-5 md:flex lg:gap-8"
            aria-label="Main"
          >
            {homeNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[10px] font-normal uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:text-[11px] sm:tracking-[0.22em] ${
                  lightHeader
                    ? pathname === link.href
                      ? "text-cream focus-visible:ring-cream/40 focus-visible:ring-offset-transparent"
                      : "text-cream/85 hover:text-cream focus-visible:ring-cream/40 focus-visible:ring-offset-transparent"
                    : pathname === link.href
                      ? "text-charcoal focus-visible:ring-charcoal/20"
                      : "text-charcoal/65 hover:text-charcoal focus-visible:ring-charcoal/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen(!open)}
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 md:hidden ${
              lightHeader
                ? "text-cream hover:bg-cream/10 focus-visible:ring-cream/40"
                : "text-charcoal hover:bg-sand/50 focus-visible:ring-charcoal/25"
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-[var(--site-header-height)] z-40 bg-cream md:hidden"
          >
            <nav
              id={MENU_ID}
              ref={menuRef}
              aria-label="Mobile"
              className="flex h-full flex-col gap-5 overflow-y-auto overscroll-y-contain px-8 pb-10 pt-6 [-webkit-overflow-scrolling:touch]"
            >
              {homeNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block min-h-11 py-1 font-serif text-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 ${
                    pathname === link.href ? "text-charcoal" : "text-charcoal/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
