"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, studio } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const MENU_ID = "mobile-nav-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || pathname !== "/"
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-cream/85 backdrop-blur-md lg:bg-cream/70"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl tracking-wide text-charcoal transition-colors group-hover:text-espresso">
              {studio.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone">
              {studio.tagline}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 xl:gap-7 lg:flex"
            aria-label="Main"
          >
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/20 focus-visible:ring-offset-2 ${
                  pathname === link.href
                    ? "font-medium text-charcoal"
                    : "text-charcoal/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/book" variant="primary" className="!py-2.5 !px-5 text-xs">
              Book a Class
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen(!open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full p-2 text-charcoal transition-colors hover:bg-sand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/25 lg:hidden"
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
            className="fixed inset-x-0 bottom-0 top-[var(--site-header-height)] z-40 bg-cream lg:hidden"
          >
            <nav
              id={MENU_ID}
              ref={menuRef}
              aria-label="Mobile"
              className="flex h-full flex-col gap-5 overflow-y-auto overscroll-y-contain px-8 pb-10 pt-6 [-webkit-overflow-scrolling:touch]"
            >
              {navLinks.map((link) => (
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
              <Button href="/book" className="mt-2 w-full max-w-xs shrink-0">
                Book a Class
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
