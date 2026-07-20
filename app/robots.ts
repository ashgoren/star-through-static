import type { MetadataRoute } from "next";
import { prodApex } from "@/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${prodApex}/sitemap.xml`,
  };
}
