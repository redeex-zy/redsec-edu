import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-red-400 via-cyan-300 to-transparent" />
        <span className="text-xs font-medium uppercase tracking-[0.32em] text-slate-300/80">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-balance font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
