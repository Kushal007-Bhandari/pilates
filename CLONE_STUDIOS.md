# Cloning demo sites (leave Studio N°8 alone)

Studio N°8 lives in **`~/Downloads/pilates`** — do not use that repo for prospects.

Three empty shells were created next to it:

| Folder | Use for |
|--------|---------|
| `~/Downloads/pilates-prospect-a` | First prospect demo |
| `~/Downloads/pilates-prospect-b` | Second prospect demo |
| `~/Downloads/pilates-prospect-c` | Third prospect demo |

## Per prospect (before sending a link)

1. Edit **`src/lib/data.ts`** — name, phone, WhatsApp, email, Instagram, address, hours, trainers, gallery paths.
2. Replace **`public/images/`** and **`public/videos/hero.mp4`** with their media (or keep placeholders and say so in the email).
3. `npm install` → `npm run dev` → check locally.
4. New **GitHub repo** → push (do not push to `Kushal007-Bhandari/pilates`).
5. New **Cloudflare Pages** project → `NEXT_PUBLIC_SITE_URL` = that site’s `*.pages.dev`.
6. Send **production** URL only (`https://name.pages.dev`), not hash preview links behind Access.

## Email snippet

> Preview site for [Studio Name] — not on your domain yet.  
> [URL]  
> Booking opens WhatsApp; we’ll plug in your real number, photos, and pricing if you’d like to launch.

## Re-copy from latest template

If N°8 gets big fixes you want in all demos:

```bash
rsync -a --exclude .git --exclude .next --exclude node_modules \
  ~/Downloads/pilates/ ~/Downloads/pilates-prospect-a/
# Then re-apply that prospect’s data.ts and assets.
```
