Noted — that banner is a strong visual reference for the hero: dark charcoal ground, lime pill badges, bracketed display type, a cut-out fashion subject with a lime glow arc behind them, and a lime pill CTA with an arrow. I'll generate all assets in that register (reference only — not embedded directly).

## Kovva — Waitlist Landing Page

A single dark, fashion-editorial page at `/` collecting early-access sign-ups, with entries appended to a Google Sheet.

### Design system (src/styles.css)

Kovva palette as oklch tokens, replacing the default light theme:

- background `#1b1b1b`, raised surface `#242424`, control `#3f3f3f`, border `#4c4c4c`
- accent lime `#a7ff27` (on-accent text `#385915`), soft green `#e7ffc7`, input bg `#f5ffea` / input text `#42651a`
- text: strong `#f3f3f3`, body `#d9d9d9`, muted `#a3a3a3`
- radii sm 8 / md 12 / lg 16 / pill 999; Inter 400/500/700 via `<link>` in `__root.tsx`
- Type scale: display 32 (larger at `lg:`), title 20, body 16, caption 13. Dark only.
- Borrowed from the banner reference: lime pill "eyebrow" badges, bracketed `[ ]` display headline treatment, a soft lime radial glow behind the hero subject, and a small lime dot-grid motif as a corner accent.

### Logo

`Kovva.svg` becomes an inline React component using `currentColor`, rendered lime in the nav and footer, plus a matching favicon.

### Page sections (src/routes/index.tsx + components)

1. **Minimal nav** — Kovva mark + wordmark left, "Join waitlist" link right.
2. **Hero** — lime pill eyebrow ("Early access"), bracketed editorial headline, one paragraph on Kovva (discover, share and shop personal style; AI styling; earn commission when your outfit sells), then the waitlist form. Phone mockup visual beside it on desktop, below on mobile, over a lime glow arc.
3. **Mood board** — asymmetric grid of 6 outfit images with a short caption line.
4. **Three feature callouts** — Fashion-only feed / AI styling / Earn on every sale, each with a hand-written 2px-stroke lime outline SVG icon, laid out as the compact icon+two-line row from the banner reference.
5. **Closing CTA band** + **footer** — copyright, Privacy, Terms, Contact, Instagram.

### Waitlist form

Name (required), Email (required), Phone Number (required), Occupation (optional). Inputs `#f5ffea` bg, `#42651a` text/placeholder, 16px radius, 54px height, stacked full-width on mobile. Lime CTA with arrow, plus loading / success / error states. Zod validation client- and server-side.

### Sign-up storage — Google Sheets

A `createServerFn` in `src/lib/waitlist.functions.ts` validates input and appends a row (timestamp, name, email, phone, occupation) through the Google Sheets connector gateway. I'll ask you to link your Google account and give the spreadsheet ID when we reach that step; until then it returns a clear "not configured" result and the UI shows a friendly message, so the page is fully usable and turning it on is a one-step change.

### Assets — I generate all of these (into `src/assets/`)

- **Hero**: 9:16 stylised dark phone mockup of the Kovva feed matching your screenshot's structure — dark cards, "Make a post" pill, lime follow / "Buy look" chips, bottom tab bar — with a vibrant outfit photo filling the post, set against the banner's lime-glow-on-charcoal treatment.
- **Mood board**: 6 editorial outfit images — streetwear, casual, Afrocentric, minimal, bold colour, tailored — shot in the same high-contrast dark studio style as your banner. No stock "people on phones".
- Icons are inline SVG, not generated images.

### Technical notes

- Kovva-specific `head()` on the index route (title, description, og, twitter).
- Mobile-first: grid + `min-w-0` / `shrink-0` on mixed rows, section padding scaling at `md:`/`lg:`.
- Restrained motion: subtle fade/rise on section entry only.
