# Studio N°8 — Pre-Deploy Master Checklist

Use this before going live. Check items off as you complete them.

---

## Phase 0 — Research & strategy

- [x] Positioning: luxury boutique Pilates & wellness
- [x] Studio name, tagline, location (Bhaisepati, Lalitpur)
- [x] Services: reformer, equipment, private sessions
- [ ] Set real pricing (NPR) on site or keep “Contact us” via WhatsApp
- [x] Primary conversion: book via WhatsApp
- [ ] Optional: Google Form URL in `studio.bookingFormUrl`

---

## Phase 1 — Brand & content

- [x] Real studio name in `src/lib/data.ts`
- [x] Real address, phone, email, hours, Google Maps link
- [x] WhatsApp `wa.me/9779700061310`
- [x] Instagram @studion8pilates
- [x] About copy (`studioStory`)
- [x] Class names & descriptions
- [x] Instructors: Shalu, Samuyal, Rohan (photos pending — placeholders in place)
- [x] Membership tiers (pricing: contact studio)
- [x] Weekly schedule in `data.ts`
- [ ] Real client testimonials (currently community placeholders)
- [x] FAQ on Contact page
- [x] Privacy page (`/privacy`)
- [ ] Cancellation policy detail (partial — in FAQ; expand if needed)

---

## Phase 2 — Visual assets

- [x] Real studio photos in `/public/images/`
- [ ] Compress images to WebP / &lt;200KB each (recommended before launch)
- [x] Favicon (`src/app/icon.svg`)
- [x] Open Graph image (`/public/images/og.png`)
- [x] Hero shows studio more clearly (lighter overlay)
- [ ] Instructor headshots when available

---

## Phase 3 — Technical (codebase)

### Images & performance

- [x] No broken Unsplash URLs
- [x] `priority` on homepage hero only; gallery lazy-loads
- [x] Font weights reduced (400, 500, 600)
- [x] `prefers-reduced-motion` support
- [x] `npm run build` — zero errors
- [ ] Lighthouse mobile pass (run after deploy on production URL)

### Booking & forms

- [x] Booking → WhatsApp with prefilled message
- [x] Removed `localStorage` demo booking
- [x] Contact → WhatsApp + mailto (real flow)
- [x] `.env.example` for `NEXT_PUBLIC_SITE_URL`
- [x] Form validation on book/contact

### SEO

- [x] `app/sitemap.ts`
- [x] `app/robots.ts`
- [x] LocalBusiness JSON-LD (`JsonLd.tsx`)
- [x] Unique title + description per page
- [x] `openGraph` + Twitter card + og image
- [x] `metadataBase` via `NEXT_PUBLIC_SITE_URL` / Vercel URL
- [x] Location keywords in copy
- [x] Alt text on gallery images

### Accessibility

- [x] Hamburger: `aria-expanded`, `aria-controls`
- [x] Escape closes mobile menu
- [x] Skip to main content link
- [x] Focus rings on buttons/links
- [x] Tap targets ≥ 44px (`min-h-11`)
- [x] Gallery lightbox: Escape, `role="dialog"`
- [ ] Full focus trap in mobile menu (optional polish)

### App reliability

- [x] `app/not-found.tsx`
- [x] `app/error.tsx`
- [x] Sticky “Book” hidden on `/book` routes
- [x] `npm run build` clean

### Security & config

- [x] No API keys in client code
- [x] `.gitignore` includes `.env*.local`
- [x] Removed unused Unsplash image config

---

## Phase 4 — UX & conversion

- [x] Hero + primary CTA
- [x] Beginner reassurance banner on Home
- [x] Testimonials section on Home
- [x] Memberships → WhatsApp for pricing
- [x] Schedule → Book flow
- [x] Sticky mobile CTA
- [x] `tel:` + WhatsApp + email on Contact/Footer
- [x] Google Maps embed on Contact
- [x] Footer hours, address, social, privacy link

---

## Phase 5 — Legal & trust

- [x] Privacy policy page
- [ ] Studio cancellation / no-show policy page (optional)
- [ ] Testimonial permission from real clients when added

---

## Phase 6 — Local & marketing (off-site)

- [ ] Google Business Profile claimed & linked
- [ ] NAP consistent (site, GBP, IG, WhatsApp)
- [ ] Instagram bio → live site URL
- [ ] QR at studio → homepage or `/book`

---

## Phase 7 — Analytics (after launch)

- [ ] Google Analytics 4 or Plausible
- [ ] Google Search Console
- [ ] Track Book / WhatsApp clicks

---

## Phase 8 — Deploy

- [ ] Host on Vercel (recommended)
- [ ] Connect Git repo
- [ ] Custom domain + DNS
- [ ] Set `NEXT_PUBLIC_SITE_URL` in host dashboard
- [ ] `npm run build` on CI
- [ ] Test production URL on phone

---

## Phase 9 — Pre-launch QA

- [ ] Every nav link works
- [ ] Book → WhatsApp opens with correct text
- [ ] Contact opens WhatsApp + email
- [ ] No console errors
- [ ] No broken images
- [ ] Share link preview (WhatsApp) shows title + og image
- [ ] Spell-check key pages

---

## Phase 10 — Launch day

- [ ] Deploy production
- [ ] Submit sitemap in Search Console
- [ ] Update GBP + Instagram
- [ ] Staff know booking URL

---

## Minimum viable launch

**Ready now:** Phases 1–4 (content), 3 (tech), 4 (UX)  
**Before domain:** Phase 8–9  
**After launch:** Phases 6–7, real testimonials, image compression, instructor photos

---

*Last updated: May 2026 — Studio N°8*
