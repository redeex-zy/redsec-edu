import type { BlogFaqItem, BlogPostWithComputed } from "@/content/blog";
import type { Service } from "@/content/site";
import { createSocialImageUrl } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.organization.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.organization.description,
    areaServed: siteConfig.organization.serviceArea,
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.organization.foundingRegion,
    },
    knowsAbout: siteConfig.keywords,
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function createWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: siteConfig.keywords,
    inLanguage: siteConfig.language,
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services#${service.slug}`),
    serviceType: service.title,
    name: service.title,
    description: service.summary,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: siteConfig.organization.serviceArea,
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} inclusions`,
      itemListElement: service.included.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: item,
      })),
    },
    termsOfService: absoluteUrl("/methodology"),
    url: absoluteUrl("/services"),
  };
}

export function createServiceCollectionSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RedSec Edu cybersecurity services",
    description:
      "Authorized cybersecurity services for schools, education platforms, staff awareness, and student-focused digital safety.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/services#${service.slug}`),
      item: createServiceSchema(service),
    })),
  };
}

export function createFaqSchema(items: BlogFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createArticleSchema(post: BlogPostWithComputed) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: [
      createSocialImageUrl({
        title: post.title,
        eyebrow: post.category.title,
        description: post.description,
      }),
    ],
    author: {
      "@id": absoluteUrl("/#organization"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: siteConfig.language,
    articleSection: post.category.title,
    keywords: post.tags.map((tag) => tag.title),
    wordCount: post.wordCount,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: [
      post.category.title,
      ...post.tags.map((tag) => tag.title),
      "education cybersecurity",
      "school cybersecurity",
    ],
  };
}

export function createBlogCollectionSchema({
  name,
  description,
  path,
  posts,
}: {
  name: string;
  description: string;
  path: string;
  posts: BlogPostWithComputed[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl(path),
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };
}
