import type { MetadataRoute } from "next";
import { prodApex } from "@/site.config";

// /about, /schedule, /contact are left out — not yet linked from the navbar and still WIP.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${prodApex}`;

  return [
    { url: base },
    { url: `${base}/talent` },
    { url: `${base}/updates` },
  ];
}
