import type { NavLink } from "static-site-kit";

export const siteName = "Star Through Seattle";
export const siteDescription = "Star Through Seattle Contra Dance Camp";

// Production TLD (scopes theme cookie to sync theme between TLD & registration subdomain)
export const prodApex = "starthroughseattle.dance";

// Canonical host actually serving the site (Vercel redirects the apex here) —
// used for canonical/OG URLs, JSON-LD, sitemap, and robots.txt's sitemap link
export const canonicalHost = `www.${prodApex}`;

// Vercel-assigned preview deployment domain (differs per Vercel project) — used to
// noindex the preview in next.config.ts so it doesn't compete with prodApex in search
export const previewHost = "star-through-static.vercel.app";

// Default social-share / OG image, also reused as the homepage's JSON-LD event image
export const shareImage = "/dancers1.jpg";

export const event = {
  // Can be longer than siteDescription; feeds JSON-LD for Google rich results
  description: "Star Through Seattle is a new Fall contra dance weekend held in Seattle, featuring calling by Will Mentor and Koren Wake with live music from Kingfisher and Natterjack.",
  startDate: "2027-09-24", // ISO for JSON-LD
  endDate: "2027-09-26", // ISO for JSON-LD
  datesDisplay: "September 24-26, 2027", // human-readable for page text
  venue: {
    name: "Washington Hall",
    website: "https://washingtonhall.org/",
    street: "153 14th Ave",
    city: "Seattle",
    state: "WA",
    zip: "98122",
  },
};

// Single source of truth for routing, sitemap, and navbar links.
// Root route is always routable regardless of whether it's linked in the navbar.
export const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Talent", href: "/talent" },
  { label: "Stay Informed", href: "/updates" },
  // { label: "About", href: "/about" },
  // { label: "Schedule", href: "/schedule" },
  // { label: "Contact", href: "/contact" },
];
