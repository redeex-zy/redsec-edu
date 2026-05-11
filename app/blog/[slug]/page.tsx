import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, FolderOpen } from "lucide-react";

import BlogCard from "@/components/blog-card";
import Breadcrumbs from "@/components/breadcrumbs";
import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import JsonLd from "@/components/json-ld";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/content/blog";
import { services } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFaqSchema,
} from "@/lib/structured-data";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Article",
      description: "RedSec Edu article",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    eyebrow: post.category.title,
    section: post.category.title,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: [
      post.category.title,
      ...post.tags.map((tag) => tag.title),
      "education cybersecurity",
      "school cybersecurity",
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post, 2);
  const relatedServices = services.filter((service) =>
    post.relatedServiceSlugs.includes(service.slug),
  );

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: post.category.title,
              path: `/blog/category/${post.category.slug}`,
            },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          createArticleSchema(post),
          createFaqSchema(post.faq),
        ]}
      />

      <section className="relative overflow-hidden pb-12 pt-4 sm:pb-16">
        <div className="wrapper">
          <Reveal className="max-w-[62rem]">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label: post.category.title,
                  href: `/blog/category/${post.category.slug}`,
                },
                { label: post.title },
              ]}
            />

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <Link
                href={`/blog/category/${post.category.slug}`}
                className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100/85"
              >
                {post.category.title}
              </Link>
            </div>

            <h1 className="max-w-5xl text-balance font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-[4.5rem] lg:leading-[0.98]">
              {post.title}
            </h1>

            <p className="mt-6 max-w-4xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              {post.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Published {post.publishedLabel}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {post.readingTimeText}
              </span>
              <span className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4" />
                {post.tags.length} topic links
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/blog/tag/${tag.slug}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300 transition hover:text-white"
                >
                  {tag.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="wrapper grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <Reveal>
              <div className="panel rounded-[32px] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  Key takeaways
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
                  {post.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="space-y-5 text-base leading-8 text-slate-300">
                {post.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {post.sections.map((section, index) => (
              <Reveal key={section.id} delay={0.05 + index * 0.03}>
                <section id={section.id} className="scroll-mt-32">
                  <h2 className="text-balance font-display text-3xl tracking-tight text-white sm:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets?.length ? (
                    <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.callout ? (
                    <div className="panel mt-7 rounded-[28px] p-5 sm:p-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                        {section.callout.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-200">
                        {section.callout.body}
                      </p>
                    </div>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </article>

          <aside className="space-y-6 xl:sticky xl:top-32 xl:self-start">
            <Reveal delay={0.08}>
              <div className="panel rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  On this page
                </p>
                <nav className="mt-4">
                  <ul className="space-y-3 text-sm leading-6 text-slate-200">
                    {post.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="transition hover:text-white"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="panel rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Related services
                </p>
                <div className="mt-4 space-y-3">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services#${service.slug}`}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-5">
                  <Button href="/contact" variant="secondary" size="md">
                    Request a scoped conversation
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <FAQSection
        eyebrow="Article FAQ"
        title="Questions readers often ask after this topic."
        description="These answers expand the article with direct, search-friendly guidance for schools and education businesses."
        items={post.faq}
      />

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  Continue reading
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">
                  Related guidance for school cybersecurity planning.
                </h2>
              </div>
              <Button href="/blog" variant="secondary" size="md">
                View all articles
              </Button>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delay={index * 0.06}>
                <BlogCard post={relatedPost} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a safer digital baseline for your school or platform?"
        description="RedSec Edu combines authorized external review, clear reporting, and practical awareness work so institutions can improve security without unnecessary disruption."
        primaryLabel="Request a Security Checkup"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
