# CA Girls State Guide

Unofficial guide to ALA California Girls State — built for delegates (and parents) who want practical prep from selection through the week and beyond.

**Not affiliated with the American Legion Auxiliary.** Always verify dates, campus, deadlines, and rules with your ALA unit and [cagirlsstate.org](https://www.cagirlsstate.org).

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` and fill in before launch:

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical site URL (used for sharing / OG) |
| `VITE_CONTACT_EMAIL` | Mailto fallback for the footer story form |
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL (`https://formspree.io/f/...`) |
| `VITE_GOOGLE_FORM_URL` | Google Form link for alumna story submissions |

Footer submit order: Formspree → mailto → Google Form.

Author / session strings live in `src/siteConfig.js` (`verifiedYear`, byline, campus label).

## Photos

Drop files into `public/images/` (see `public/images/README.md`):

- `campus.jpg` — after How It Works
- `community.jpg` — before The Experience
- `ceremony.jpg` — before What’s Next
- `og-share.png` — social preview (aim ~1200×630, keep file size reasonable)

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages):

1. Set the env vars in the host dashboard
2. Build command: `npm run build`
3. Output directory: `dist`
4. Update `VITE_SITE_URL` (and `index.html` OG tags if needed) to the live domain

## Deep links

Sections and tabs use hash routes, e.g.:

- `#prepare/packing` — packing list
- `#parents` — parent guide
- `#experience/traditions` — traditions tab

## Print

The packing checklist supports print via the **Print List** button (CSS print stylesheet hides the rest of the page).
