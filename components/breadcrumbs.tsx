import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({
  items,
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("mb-5", className)}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-slate-200" : undefined}>
                  {item.label}
                </span>
              )}

              {!isLast ? (
                <ChevronRight className="h-4 w-4 text-slate-600" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
