import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social card`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
