const currentProductionUrl = "https://redsec-edu.vercel.app";
const futurePrimaryUrl = "https://redsecedu.com";
const localDevelopmentUrl = "http://localhost:3000";

function normalizeSiteUrl(value?: string | null) {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim().replace(/\/+$/, "");

  if (!trimmed) {
    return undefined;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  if (trimmed.startsWith("localhost") || trimmed.startsWith("127.0.0.1")) {
    return `http://${trimmed}`;
  }

  return `https://${trimmed}`;
}

function resolveSiteUrl() {
  const explicitUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

  if (explicitUrl) {
    return explicitUrl;
  }

  if (process.env.VERCEL_ENV === "production") {
    return currentProductionUrl;
  }

  const previewUrl = normalizeSiteUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL,
  );

  return previewUrl ?? localDevelopmentUrl;
}

export const siteConfig = {
  name: "RedSec Edu",
  shortName: "RedSec Edu",
  title: "Cybersecurity for schools, students, and education platforms",
  description:
    "RedSec Edu helps educational institutions identify public security risks, protect student data, and build safer digital habits through authorized reviews and practical cybersecurity education.",
  locale: "en_US",
  language: "en",
  category: "Cybersecurity",
  url: resolveSiteUrl(),
  currentProductionUrl,
  futurePrimaryUrl,
  ogImagePath: "/api/og",
  legacyOgImagePath: "/og-card.svg",
  lastUpdated: "2026-05-11T00:00:00.000Z",
  keywords: [
    "cybersecurity for schools",
    "school cybersecurity",
    "education cybersecurity",
    "school website security",
    "student data protection",
    "cybersecurity awareness for students",
    "cybersecurity awareness for teachers",
    "phishing awareness in schools",
    "educational platform security",
    "cybersecurity training for schools",
    "secure education systems",
    "student safety online",
  ],
  organization: {
    name: "RedSec Edu",
    description:
      "A cybersecurity initiative focused on authorized security checkups, awareness training, and student-focused protection for schools and education platforms.",
    serviceArea: "Worldwide",
    foundingRegion: "Morocco and North Africa",
  },
} as const;

export const sitePaths = {
  home: "/",
  services: "/services",
  about: "/about",
  methodology: "/methodology",
  contact: "/contact",
  blog: "/blog",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, siteConfig.url).toString();
}

export function canonicalUrl(path = "/") {
  return absoluteUrl(path);
}
