import { links } from "@/site.config";

// Create list of routable URLs from site.config.ts's links array.
// Root route is always routable regardless of whether it's linked in navbar.
// proxy.ts and sitemap.ts both read this.
export const routableHrefs = new Set([
  "/",
  ...links.map(({ href }) => href).filter((href) => href.startsWith("/")),
]);
