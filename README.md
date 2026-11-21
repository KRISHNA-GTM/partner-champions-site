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
| `CONTACT_EMAIL` | Address used in all `mailto:` links and the copy button. |
| `SOCIAL_LINKS` | Footer social links. Entries with an empty `href` are hidden. |

`src/data/content.ts`: navigation, audience, challenges, the "where we fit" flow, services and deliverables, process stages and outcomes.

`src/components/Showcase/Showcase.tsx`: the illustrative asset mockups in "Our Work" (landing page, email, webinar, LinkedIn post, campaign kit, ABM brief, playbook). Copy for the mockups lives in that file.

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
    contact/     booking CTA, contact dialog, copy-email
    ui/          section heading, modal, buttons, icons
public/          favicon, apple-touch-icon, og-image
```

## Content notes

- No client names, metrics, testimonials or company history appear on the page. Outcomes are qualitative and carry no numbers.
- The "Our Work" mockups are labelled on the page as illustrative examples, not client work. They use generic "Your Brand" and "Partner" marks only.
- There is no Resources or Insights section. Add one when real articles exist.

## Page structure

Hero, The challenge (problems + where we fit), Services, Our work, How we work, Outcomes, Final CTA + footer.

Spacing tokens live in `src/styles/tokens.css` (`--s-1` to `--s-9`, `--section-y`, `--section-y-tight`, `--section-y-loose`, `--head-gap`). Every section heading uses `SectionHeading` (`src/components/ui/SectionHeading.tsx`).
