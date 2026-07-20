import type { MetadataRoute } from "next";
import { prodApex, links } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${prodApex}`;
  return links.map(({ href }) => ({ url: `${base}${href}` }));
}
