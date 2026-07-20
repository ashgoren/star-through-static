This is a (mostly) static info site for a dance event, with a small number of routes accessible from the navbar. It's built with the Next.js App Router, Tailwind v4, TypeScript, and my [static-site-kit](https://github.com/ashgoren/static-site-kit) shared package.

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Commands

```bash
npm run dev      # development server (port 3000)
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint
npm run tsc      # TypeScript type-check
```

## Architecture

- All routes live under `app/`, using the Next.js App Router. The `@/*` path alias maps to the project root.
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax and `@tailwindcss/postcss`. Theme is configured via `@theme inline` in `globals.css`, not `tailwind.config.js`.
- **React Compiler** — enabled in `next.config.ts` via `reactCompiler: true`, so manual `useMemo`/`useCallback` are unnecessary.
- **ESLint v9 flat config** — see `eslint.config.mjs`.
- **Dark mode** — controlled via a `data-theme` attribute on `<html>`, toggled by `ThemeToggle` (from `static-site-kit`), which persists the choice to a `theme` cookie rather than localStorage — a cookie can be scoped to a domain, so the choice can stay in sync with a registration app or other subdomain on the same parent domain. `ThemeScript` (also from `static-site-kit`) sets `data-theme` before first paint to prevent a flash of the wrong theme.
- **UI primitives** — `app/components/ui.tsx`.
- **Icons** — [lucide-react](https://lucide.dev).

Pages are server components by default; only components that need interactivity (e.g. the navbar's mobile drawer, the theme toggle, the "stay informed" signup form) are client components.

## Site configuration

**`site.config.ts`**:
- `siteName` - title used in the navbar and page `<title>`
- `siteDescription` - `<meta name="description">` content
- `shareImage` - default OG/social-share image
- `event` - description/dates/venue — feeds the homepage's JSON-LD
- `links` - navbar items (also drives the sitemap)
- `prodApex` - production domain, used to scope the theme cookie and build the sitemap/OG URLs
- `previewHost` - the Vercel-assigned preview deployment domain, used by `next.config.ts` to `noindex` the preview

Note that `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `next.config.ts` all read from it rather than hardcoding these values.

**`app/globals.css`**:
- The palette lives in `:root` as named `-light`/`-dark` variables (`--background-light`, `--foreground-light`, `--accent-light`, and their `-dark` counterparts) — change a color once there and every contextual block (media-query fallback, `[data-theme="light"]`, `[data-theme="dark"]`) picks it up, since they all just reference the named variable rather than repeating hex codes. A new event will most likely want its own `--accent-*` at minimum.

**`package.json`**:
— `name` field

**Favicons to replace** — this follows the minimal 3-file convention documented in [this gist](https://gist.github.com/ashgoren/21fe427be5049019de38657cac613f26):
- `icon.svg` — modern favicon (named `icon.svg` for Next.js recognition)
- `favicon.ico` — fallback favicon
- `apple-icon.png` (180×180) — iOS home screen icon (named `apple-icon.png` for Next.js recognition)

**Other assets to replace:**
- The share image referenced by `shareImage` in `site.config.ts`
- All other photos in `public/`

**Secrets:**
- `.env.local` — `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SPREADSHEET_ID` (used by the "stay informed" signup form)

## Shared Navbar/Theme (static-site-kit)

`Navbar` and `ThemeToggle`/`ThemeScript` used in `app/layout.tsx` aren't local to this repo — they come from [`static-site-kit`](https://github.com/ashgoren/static-site-kit), a private shared package used across several similar static event sites, installed as a pinned git-tag dependency (`"static-site-kit": "github:ashgoren/static-site-kit#vX.Y.Z"` in `package.json`).

Two things specific to consuming it here:
- `transpilePackages: ["static-site-kit"]` in `next.config.ts` — the package ships raw, unbuilt TS/TSX source, so Next.js compiles it the same way it compiles local code.
- `@source "../node_modules/static-site-kit/src";` in `globals.css` — Tailwind v4 excludes `node_modules` from its default content scan, so without this, classes used only inside the package's components wouldn't generate any CSS.

For how to make changes to the shared package itself, test them locally against a sibling checkout, and cut a new release, see `static-site-kit`'s own README.

`layout.tsx` passes `centerLinksOnPage` to `Navbar`, so the 3 nav links center on the full header width — matching the page content centered below — instead of `Navbar`'s default of centering in the space between the title and controls. That default suits sites with a longer title or more/longer links, where true page-centering risks overlapping one side or the other; this site's short link list has no such risk.

This site previously had no accent color at all (only `--background`/`--foreground`), since the shared `Navbar` styles its header border/background and active-link state via `accent`-based Tailwind classes, a violet `--accent` token (`#7c3aed` light / `#a78bfa` dark) was added to `globals.css` to support it.

Typography/layout primitives (`PageTitle`, `SectionHeader`, `Paragraph`, `SectionDivider`, `InlineLink`) live locally instead, in `app/components/ui.tsx`, since they're bespoke to this site and change independently of the shared nav/theme pieces.

## Deployment

Deployed on [Vercel](https://vercel.com) with a custom domain.

When copying this site for a new event: create a new Vercel project, connect the repo, and set up the custom domain + DNS. Re-enter the secrets above in the Vercel dashboard's environment variables. Once the project exists, grab its auto-assigned `*.vercel.app` preview URL and set it as `previewHost` in `site.config.ts`.

After the custom domain is set up, verify the domain in Google Search Console and submit `https://<domain>/sitemap.xml` to immediately trigger indexing.
