# Partner Champions website

Single-page marketing site for Partner Champions LLC. React 19 + TypeScript + Vite, custom CSS, no UI framework.

## Run it

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/
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

`src/data/content.ts`: navigation, services, ecosystem diagram nodes, process stages, outcomes and the draft resource articles. Add an object to `RESOURCES` to add an article card; the preview dialog renders from the same data.

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
    Header/ Hero/ ValueProp/ Services/ Ecosystem/ Approach/
    Impact/ Resources/ FinalCta/ Footer/
    contact/     booking CTA, contact dialog, copy-email
    ui/          modal, buttons, icons
public/          favicon, apple-touch-icon, og-image
```

## Content notes

- No client names, metrics, testimonials or company history appear on the page. The impact section is illustrative and carries no numbers.
- The three resource articles are labelled "Draft concept" and open an outline preview with a request-by-email action. Replace with real articles when published.
