export const siteName = "Star Through Seattle";
export const siteDescription = "Star Through Seattle Contra Dance Camp";

// Production TLD (scopes theme cookie to sync theme between TLD & registration subdomain)
export const prodApex = "starthroughseattle.dance";

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

export const links = [
  { label: "Home", href: "/" },
  { label: "Talent", href: "/talent" },
  { label: "Stay Informed", href: "/updates" },
  // { label: "About", href: "/about" },
  // { label: "Schedule", href: "/schedule" },
  // { label: "Contact", href: "/contact" },
];
