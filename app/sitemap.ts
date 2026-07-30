import type { MetadataRoute } from "next";
import { canonicalHost, links } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${canonicalHost}`;
  return links.map(({ href }) => ({ url: `${base}${href}` }));
}
