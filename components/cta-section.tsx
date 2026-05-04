import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="wrapper">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(135deg,transparent,rgba(34,211,238,0.06),transparent)] lg:block" />
          <div className="relative max-w-4xl">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                Start with safe, scoped visibility
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                {description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href={primaryHref} size="lg" showArrow>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              RedSec Edu keeps engagements authorized, scoped, and suitable for
              school leadership review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
