import type { MetadataRoute } from "next";

import {
  getAllBlogCategories,
  getAllBlogPosts,
  getAllBlogTags,
  getBlogPostsByCategory,
  getBlogPostsByTag,
} from "@/content/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

function getNewestTimestamp(values: string[]) {
  if (!values.length) {
    return new Date(siteConfig.lastUpdated);
  }

  const latest = values.reduce((newest, value) => {
    return new Date(value).getTime() > new Date(newest).getTime()
      ? value
      : newest;
  }, values[0]);

  return new Date(latest);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date(siteConfig.lastUpdated);
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: absoluteUrl("/methodology"),
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.84,
    },
  ];

  const blogPostRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.76,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getAllBlogCategories().map(
    (category) => ({
      url: absoluteUrl(`/blog/category/${category.slug}`),
      lastModified: getNewestTimestamp(
        getBlogPostsByCategory(category.slug).map((post) => post.updatedAt),
      ),
      changeFrequency: "monthly",
      priority: 0.64,
    }),
  );

  const tagRoutes: MetadataRoute.Sitemap = getAllBlogTags().map((tag) => ({
    url: absoluteUrl(`/blog/tag/${tag.slug}`),
    lastModified: getNewestTimestamp(
      getBlogPostsByTag(tag.slug).map((post) => post.updatedAt),
    ),
    changeFrequency: "monthly",
    priority: 0.58,
  }));

  return [...staticRoutes, ...blogPostRoutes, ...categoryRoutes, ...tagRoutes];
}
