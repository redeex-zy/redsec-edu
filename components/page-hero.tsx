import type { ReactNode } from "react";

import Breadcrumbs, { type BreadcrumbItem } from "@/components/breadcrumbs";
import Reveal from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-4 sm:pb-16">
      <div className="wrapper">
        <Reveal className="max-w-[58rem]">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-red-400 via-cyan-300 to-transparent" />
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
              {eyebrow}
            </p>
          </div>
          <h1 className="max-w-5xl text-balance font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
          {children ? (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
