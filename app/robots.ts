import type { MetadataRoute } from "next";
import { canonicalHost } from "@/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${canonicalHost}/sitemap.xml`,
  };
}
