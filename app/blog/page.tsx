import type { Metadata } from "next";
import Link from "next/link";

import BlogCard from "@/components/blog-card";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  getAllBlogCategories,
  getAllBlogPosts,
  getAllBlogTags,
  getFeaturedBlogPosts,
} from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import {
  createBlogCollectionSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Read RedSec Edu guidance on school cybersecurity, website security, phishing awareness, student data protection, and practical cyber awareness for education teams.",
  path: "/blog",
  eyebrow: "Insights",
  keywords: [
    "education cybersecurity blog",
    "school cybersecurity advice",
    "student data protection guide",
    "phishing awareness for schools",
    "school website security guide",
  ],
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = getFeaturedBlogPosts(1)[0];
  const remainingPosts = posts.filter((post) => post.slug !== featuredPost.slug);
  const categories = getAllBlogCategories();
  const tags = getAllBlogTags();

  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          createBlogCollectionSchema({
            name: "RedSec Edu blog",
            description:
              "Practical cybersecurity guidance for schools, education platforms, and student-facing digital systems.",
            path: "/blog",
            posts,
          }),
        ]}
      />

      <PageHero
        eyebrow="Blog"
        title="Practical cybersecurity guidance for schools, education platforms, and EdTech teams."
        description="The RedSec Edu blog is designed for long-term search visibility and real reader value, with clear articles on school cybersecurity, public website risk, awareness training, and student protection."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      >
        <Button href={`/blog/${featuredPost.slug}`} size="lg" showArrow>
          Read the featured guide
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Discuss a School Review
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <Reveal>
            <BlogCard post={featuredPost} featured />
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.06}>
              <aside className="panel rounded-[30px] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  Editorial focus
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-tight text-white">
                  Built for decision-makers and operators, not only security teams.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Articles are written for school leaders, education businesses,
                  internal IT, agencies, and platform owners who need clear
                  guidance without exaggerated language.
                </p>
              </aside>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="panel rounded-[30px] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  Categories
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:text-white"
                    >
                      {category.title} ({category.count})
                    </Link>
                  ))}
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.14}>
              <aside className="panel rounded-[30px] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  Topics
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/blog/tag/${tag.slug}`}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:text-white"
                    >
                      {tag.title}
                    </Link>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Recent articles"
              title="A growing knowledge base designed to rank because it is useful."
              description="Each article is structured for long-term search value, clear internal linking, and practical use by schools and education businesses."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {remainingPosts.map((post, index) => (
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
