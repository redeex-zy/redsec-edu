function normalizeSiteUrl(value?: string) {
  if (!value) {
    return "http://localhost:3000";
  }

  return value.startsWith("http") ? value : `https://${value}`;
}

const resolvedSiteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL,
);

export const siteConfig = {
  name: "RedSec Edu",
  title: "Cybersecurity for schools, students, and education platforms",
  description:
    "RedSec Edu helps educational institutions identify public security risks, protect student data, and build safer digital habits through authorized reviews and practical cybersecurity education.",
  url: resolvedSiteUrl,
  ogImage: "/og-card.svg",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
