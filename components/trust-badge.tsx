import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function TrustBadge({
  title,
  description,
  icon: Icon,
}: TrustBadgeProps) {
  return (
    <article className="panel panel-hover h-full rounded-[28px] p-5 sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
