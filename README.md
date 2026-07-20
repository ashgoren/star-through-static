This is a (mostly) static site for a dance weekend. It's built with the Next.js App Router, Tailwind v4, TypeScript, and my [static-site-kit](https://github.com/ashgoren/static-site-kit) shared package.

## Dev server (runs on localhost:3000)

```bash
npm install
npm run dev
```

## Site configuration

**`site.config.ts`**:
- `siteName` - title used in the navbar and page `<title>`
- `siteDescription` - `<meta name="description">` content
- `shareImage` - default OG/social-share image
- `event` - description/dates/venue — feeds the homepage's JSON-LD
- `links` - navbar items (also drives the sitemap)
- `prodApex` - production domain, used to scope the theme cookie and build the sitemap/OG URLs
- `previewHost` - the Vercel-assigned preview deployment domain, used by `next.config.ts` to `noindex` the preview

Note that `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, and `next.config.ts` all read from it rather than hardcoding these values.

**`app/globals.css`**:
- The palette lives in `:root` as named `-light`/`-dark` variables (`--background-light`, `--foreground-light`, `--accent-light`, and their `-dark` counterparts) — change a color once there and every contextual block (media-query fallback, `[data-theme="light"]`, `[data-theme="dark"]`) picks it up, since they all just reference the named variable rather than repeating hex codes. A new event will most likely want its own `--accent-*` at minimum.
- This can't be centralized into `site.config.ts` — plain CSS has no mechanism to import a `.ts` file (`@import` only resolves other CSS). Piping it through anyway would mean generating CSS from JS at build time or runtime, which is more moving parts than six hex codes are worth, and would fight `CLAUDE.md`'s documented decision that theming lives in `globals.css` via Tailwind's `@theme inline`, not JS.

**`package.json`**:
— `name` field

**Favicons to replace** — this follows the minimal 3-file convention documented in [this gist](https://gist.github.com/ashgoren/21fe427be5049019de38657cac613f26):
- `icon.svg` — modern favicon (named `icon.svg` for Next.js recognition)
- `favicon.ico` — fallback favicon
- `apple-icon.png` (180×180) — iOS home screen icon (named `apple-icon.png` for Next.js recognition)

**Other assets to replace:**
- The share image referenced by `shareImage` in `site.config.ts`
- All other photos in `public/`

**Secrets/infra (outside the repo):**
- `.env.local` — `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SPREADSHEET_ID` (used by `app/actions/submitInterest.ts` for the "stay informed" signup form). Easy to forget, and the failure mode is bad: forgetting to update `GOOGLE_SPREADSHEET_ID` means the new site's signups silently land in the old event's spreadsheet.
- A new Vercel project, custom domain + DNS, and the same env vars re-entered in the Vercel dashboard.
- Once live: verify the domain in Google Search Console and submit `https://<domain>/sitemap.xml` to immediately trigger indexing.

## Shared UI (static-site-kit)

`Navbar` and `ThemeToggle`/`ThemeScript` used in `app/layout.tsx` aren't local to this repo — they come from [`static-site-kit`](https://github.com/ashgoren/static-site-kit), a private shared package used across several similar static event sites, installed as a pinned git-tag dependency (`"static-site-kit": "github:ashgoren/static-site-kit#vX.Y.Z"` in `package.json`).

Two things specific to consuming it here:
- `transpilePackages: ["static-site-kit"]` in `next.config.ts` — the package ships raw, unbuilt TS/TSX source, so Next.js compiles it the same way it compiles local code.
- `@source "../node_modules/static-site-kit/src";` in `globals.css` — Tailwind v4 excludes `node_modules` from its default content scan, so without this, classes used only inside the package's components wouldn't generate any CSS.

For how to make changes to the shared package itself, test them locally against a sibling checkout, and cut a new release, see `static-site-kit`'s own README.

`layout.tsx` passes `centerLinksOnPage` to `Navbar`, so the 3 nav links center on the full header width — matching the page content centered below — instead of `Navbar`'s default of centering in the space between the title and controls. That default suits sites with a longer title or more/longer links, where true page-centering risks overlapping one side or the other; this site's short link list has no such risk.

This site previously had no accent color at all (only `--background`/`--foreground`), since the shared `Navbar` styles its header border/background and active-link state via `accent`-based Tailwind classes, a violet `--accent` token (`#7c3aed` light / `#a78bfa` dark) was added to `globals.css` to support it.

Typography/layout primitives (`PageTitle`, `SectionHeader`, `Paragraph`, `SectionDivider`, `InlineLink`) live locally instead, in `app/components/ui.tsx`, since they're bespoke to this site and change independently of the shared nav/theme pieces.
