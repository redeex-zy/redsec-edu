import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogCard from "@/components/blog-card";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  getAllBlogTags,
  getBlogPostsByTag,
  getBlogTagBySlug,
} from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import {
  createBlogCollectionSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";

type BlogTagPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogTagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getBlogTagBySlug(slug);

  if (!tag) {
    return createMetadata({
      title: "Topic",
      description: "RedSec Edu blog topic",
      path: `/blog/tag/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${tag.title} Resources`,
    description: tag.description,
    path: `/blog/tag/${tag.slug}`,
    eyebrow: "Blog topic",
    keywords: [
      tag.title,
      "education cybersecurity resources",
      "school cybersecurity guidance",
    ],
  });
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { slug } = await params;
  const tag = getBlogTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const posts = getBlogPostsByTag(tag.slug);

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: tag.title, path: `/blog/tag/${tag.slug}` },
          ]),
          createBlogCollectionSchema({
            name: `${tag.title} resources`,
            description: tag.description,
            path: `/blog/tag/${tag.slug}`,
            posts,
          }),
        ]}
      />

      <PageHero
        eyebrow="Blog topic"
        title={`${tag.title} guidance for schools and education platforms.`}
        description={tag.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: tag.title },
        ]}
      >
        <Button href="/blog" size="lg" showArrow>
          Browse all topics
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          Explore services
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper">
          <div className="mb-8 text-sm leading-7 text-slate-400">
            {tag.count} article{tag.count === 1 ? "" : "s"} linked to this
            topic.
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
