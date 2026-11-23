# Partner Champions website

Single-page marketing site for Partner Champions LLC. React 19 + TypeScript + Vite, custom CSS, no UI framework.

## Run it

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/ (copy dist/ into docs/ for GitHub Pages)
npm run preview    # serve the production build at http://localhost:4173
```

## Deploy (GoDaddy or any static host)

Upload the **contents** of `dist/` to the web root (e.g. `public_html/`). The build uses relative paths, so it also works from a subfolder. No server code is needed.

## Configuration

Everything you are likely to change lives in two files.

`src/config/site.ts`

| Setting | What it does |
|---|---|
| `SCHEDULING_URL` | Booking link used by every "book a call" button (header, hero, final CTA, footer, contact dialog). Currently a temporary Calendly link. Set it to `''` and those buttons open the contact dialog with the email address instead. |
| `CONTACT_EMAIL` | Address used in all `mailto:` links. |
| `SOCIAL_LINKS` | Footer social links. Entries with an empty `href` are hidden. |

`src/data/content.ts`: navigation, audience, challenges, the "where we fit" diagram, services (with icon keys) and deliverables, process stages and outcomes.

`src/components/Showcase/Showcase.tsx`: "Campaigns", one sample campaign (Cloud Cost Review) with a selectable deliverable viewer (partner emails, landing page, webinar, social, partner sales kit). Copy for the mockups lives in that file.

`index.html`: page title, meta description and Open Graph tags. Update `og:url` / `og:image` if the domain is not `partnerchampions.com`.

## Structure

```
src/
  assets/        logos (original files) and the logo mark crop
  config/        site-wide settings (booking URL, email, socials)
  data/          all page copy and diagram data
  hooks/         media queries, in-view, scroll reveal, scroll spy
  utils/         mailto builder, CSS variable helper
  styles/        design tokens and base styles
  components/
    Header/ Hero/ Challenge/ Services/ Showcase/ Approach/
    Outcomes/ FinalCta/ Footer/
    contact/     booking CTA, contact dialog
    ui/          section heading, modal, buttons, icons
public/          favicon, apple-touch-icon, og-image
```

## Content notes

- No client names, metrics, testimonials or company history appear on the page. Outcomes are qualitative and carry no numbers.
- The "Campaigns" mockups are a sample campaign (Cloud Cost Review). Never present them as client work or attach results to them. They use generic "Your Brand" and "Partner" marks only.
- There is no Resources or Insights section. Add one when real articles exist.

## Page structure

Hero (one-line positioning), Why partner programs stall (four problems, then a who-does-what flow), Services (need first, service name second), Campaigns, Why Partner Champions (differentiators & specialized execution engine), Our approach, What changes (before and after), Final CTA + footer. Dominant CTA reads "Book a Partner Marketing Consultation" everywhere (header, hero, final CTA, footer, contact modal); secondary is "Explore our services"; email is a text link only. The email address appears as a plain mailto link; there are no copy buttons.

Spacing tokens live in `src/styles/tokens.css` (`--s-1` to `--s-9`, `--section-y`, `--section-y-tight`, `--section-y-loose`, `--head-gap`). Every section heading uses `SectionHeading` (`src/components/ui/SectionHeading.tsx`).
