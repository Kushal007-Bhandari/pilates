# Studio N°8 — Pilates & Wellness

Premium boutique Pilates studio website for **Studio N°8** in Bhaisepati, Lalitpur, Nepal.

## Features

- **11 routes**: Home, About, Classes, Trainers, Memberships, Schedule, Gallery, Stories, Contact, Book, Privacy
- **WhatsApp booking**: Schedule → book form → prefilled WhatsApp message
- **Contact**: WhatsApp + email (no fake “sent” state)
- **SEO**: sitemap, robots, LocalBusiness JSON-LD, Open Graph
- **Accessibility**: skip link, mobile menu ARIA, keyboard gallery, reduced motion
- **Mobile-first**: sticky book CTA, scrollable menu, tap-friendly controls

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_SITE_URL
npm run dev
```

Dev uses **Turbopack** (`next dev --turbo`) for faster local reloads. If the first page load feels slow, run `npx next dev` once without `--turbo`.

Open [http://localhost:3000](http://localhost:3000).

**Tip:** If you see 500 errors after running `build` while `dev` is on:

```bash
rm -rf .next && npm run dev
```

## Production build

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in Vercel/host env for correct SEO and social previews.

## Customize

Edit studio data, classes, schedule, FAQ, and gallery in `src/lib/data.ts`.

Paste Google Form URL into `studio.bookingFormUrl` when ready.

## Documentation

- **[RESEARCH_BEST_PRACTICES.md](./RESEARCH_BEST_PRACTICES.md)** — UX & wellness web research
- **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)** — Pre-launch checklist

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3
- Framer Motion
- Lucide icons
