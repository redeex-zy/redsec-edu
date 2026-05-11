import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogCard from "@/components/blog-card";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  getAllBlogCategories,
  getBlogCategoryBySlug,
  getBlogPostsByCategory,
} from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import {
  createBlogCollectionSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";

type BlogCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogCategories().map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    return createMetadata({
      title: "Category",
      description: "RedSec Edu blog category",
      path: `/blog/category/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${category.title} Articles`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
    eyebrow: "Blog category",
    keywords: [
      category.title,
      "education cybersecurity blog",
      "school cybersecurity articles",
    ],
  });
}

export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: category.title,
              path: `/blog/category/${category.slug}`,
            },
          ]),
          createBlogCollectionSchema({
            name: `${category.title} articles`,
            description: category.description,
            path: `/blog/category/${category.slug}`,
            posts,
          }),
        ]}
      />

      <PageHero
        eyebrow="Blog category"
        title={`${category.title} insights for education teams.`}
        description={category.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category.title },
        ]}
      >
        <Button href="/blog" size="lg" showArrow>
          View all articles
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Talk to RedSec Edu
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper">
          <div className="mb-8 text-sm leading-7 text-slate-400">
            {category.count} article{category.count === 1 ? "" : "s"} in this
            category.
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
