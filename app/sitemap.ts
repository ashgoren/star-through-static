import type { MetadataRoute } from "next";
import { canonicalHost } from "@/site.config";
import { routableHrefs } from "@/lib/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${canonicalHost}`;
  return [...routableHrefs].map((href) => ({ url: `${base}${href}` }));
}
