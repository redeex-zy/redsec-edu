import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { Service } from "@/content/site";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export default function ServiceCard({
  service,
  compact = false,
}: ServiceCardProps) {
  const Icon = service.icon;
  const href = `/services#${service.slug}`;
  const includedItems = compact ? service.included.slice(0, 3) : service.included;

  return (
    <article
      id={compact ? undefined : service.slug}
      className={cn(
        "panel panel-hover group relative overflow-hidden rounded-[30px] p-6 sm:p-8",
        compact ? "h-full" : "scroll-mt-28",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-400/18 bg-red-400/8 text-red-200">
            <Icon className="h-6 w-6" />
          </div>
          {!compact ? (
            <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300/75">
              Professional deliverable
            </span>
          ) : null}
        </div>

        <h3 className="text-2xl font-display tracking-tight text-white">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-300">
          {compact ? service.summary : service.whatItIs}
        </p>

        <div className="mt-7 rounded-[24px] border border-white/8 bg-black/20 p-4 sm:p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Who it is for
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-200">{service.audience}</p>
        </div>

        <div className="mt-7">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            {compact ? "Included in scope" : "What is included"}
          </p>
          <ul
            className={cn(
              "mt-4 text-sm leading-6 text-slate-200",
              compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2",
            )}
          >
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <div className="rounded-[24px] border border-cyan-300/12 bg-cyan-300/5 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/85">
              Deliverable
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-100">
              {service.deliverable}
            </p>
          </div>

          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span>
              {compact ? "View full service details" : "Direct link to this service"}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
