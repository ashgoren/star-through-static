This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Site configuration

`site.config.ts` (project root) is the one file to edit when customizing site identity: `siteName`, `siteDescription`, `links` (navbar items), and `prodApex` (the production domain, used to scope the theme cookie — see below). `app/layout.tsx` reads from it rather than hardcoding these values.

## Shared UI (static-site-kit)

`Navbar` and `ThemeToggle`/`ThemeScript` used in `app/layout.tsx` aren't local to this repo — they come from [`static-site-kit`](https://github.com/ashgoren/static-site-kit), a private shared package used across several similar static event sites, installed as a pinned git-tag dependency (`"static-site-kit": "github:ashgoren/static-site-kit#vX.Y.Z"` in `package.json`).

Two things specific to consuming it here:
- `transpilePackages: ["static-site-kit"]` in `next.config.ts` — the package ships raw, unbuilt TS/TSX source, so Next.js compiles it the same way it compiles local code.
- `@source "../node_modules/static-site-kit/src";` in `globals.css` — Tailwind v4 excludes `node_modules` from its default content scan, so without this, classes used only inside the package's components wouldn't generate any CSS.

For how to make changes to the shared package itself, test them locally against a sibling checkout, and cut a new release, see `static-site-kit`'s own README.

`layout.tsx` passes `centerLinksOnPage` to `Navbar`, so the 3 nav links center on the full header width — matching the page content centered below — instead of `Navbar`'s default of centering in the space between the title and controls. That default suits sites with a longer title or more/longer links, where true page-centering risks overlapping one side or the other; this site's short link list has no such risk.

This site previously had no accent color at all (only `--background`/`--foreground`), since the shared `Navbar` styles its header border/background and active-link state via `accent`-based Tailwind classes, a violet `--accent` token (`#7c3aed` light / `#a78bfa` dark) was added to `globals.css` to support it.

Typography/layout primitives (`PageTitle`, `SectionHeader`, `Paragraph`, `SectionDivider`, `InlineLink`) live locally instead, in `app/components/ui.tsx`, since they're bespoke to this site and change independently of the shared nav/theme pieces.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
