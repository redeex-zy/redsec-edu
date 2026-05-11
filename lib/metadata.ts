import type { Metadata } from "next";

import { absoluteUrl, canonicalUrl, siteConfig } from "@/lib/site";

type SocialImageOptions = {
  title?: string;
  eyebrow?: string;
  description?: string;
};

type PageMetadata = {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  eyebrow?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
};

function dedupeKeywords(keywords: string[]) {
  return [...new Set(keywords.map((keyword) => keyword.trim()).filter(Boolean))];
}

export function formatSeoTitle(title?: string) {
  if (!title) {
    return `${siteConfig.name} | ${siteConfig.title}`;
  }

  return title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
}

export function createSocialImageUrl({
  title,
  eyebrow,
  description,
}: SocialImageOptions) {
  const searchParams = new URLSearchParams();

  if (title) {
    searchParams.set("title", title);
  }

  if (eyebrow) {
    searchParams.set("eyebrow", eyebrow);
  }

  if (description) {
    searchParams.set("description", description);
  }

  const queryString = searchParams.toString();

  return absoluteUrl(
    queryString
      ? `${siteConfig.ogImagePath}?${queryString}`
      : siteConfig.ogImagePath,
  );
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: siteConfig.category,
  classification: "Education cybersecurity services",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: createSocialImageUrl({
          title: siteConfig.name,
          eyebrow: "Education cybersecurity",
          description: "Authorized checks, clear reports, awareness training.",
        }),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      createSocialImageUrl({
        title: siteConfig.name,
        eyebrow: "Education cybersecurity",
        description: "Authorized checks, clear reports, awareness training.",
      }),
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  eyebrow,
  noIndex = false,
  publishedTime,
  modifiedTime,
  section,
}: PageMetadata): Metadata {
  const mergedKeywords = dedupeKeywords([...siteConfig.keywords, ...keywords]);
  const socialTitle = formatSeoTitle(title);
  const socialImageUrl = createSocialImageUrl({
    title: title ?? siteConfig.name,
    eyebrow,
    description,
  });

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl(path),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
    openGraph: {
      type,
      title: socialTitle,
      description,
      url: canonicalUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime,
      modifiedTime,
      section,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImageUrl],
    },
  };
}
