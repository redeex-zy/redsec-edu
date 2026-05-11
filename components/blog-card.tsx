import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import type { BlogPostWithComputed } from "@/content/blog";

type BlogCardProps = {
  post: BlogPostWithComputed;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className="panel panel-hover group relative h-full overflow-hidden rounded-[30px] p-6 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.26em] text-slate-400">
          <Link
            href={`/blog/category/${post.category.slug}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-200 transition hover:text-white"
          >
            {post.category.title}
          </Link>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {post.publishedLabel}
          </span>
          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {post.readingTimeText}
          </span>
        </div>

        <h3
          className={`mt-6 font-display tracking-tight text-white ${
            featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-4 text-base leading-8 text-slate-300">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300 transition hover:text-white"
            >
              {tag.title}
            </Link>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Read the article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
