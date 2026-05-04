import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
};

type LinkProps = SharedProps &
  {
    href: string;
    target?: string;
    rel?: string;
    prefetch?: boolean;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

function buttonClasses(variant: NonNullable<SharedProps["variant"]>, size: NonNullable<SharedProps["size"]>) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full border font-medium whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-75 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    size === "lg" ? "min-h-14 px-7 text-base" : "min-h-12 px-5 text-sm",
    variant === "primary" &&
      "border-red-400/60 bg-[linear-gradient(135deg,rgba(239,68,68,0.92),rgba(185,28,28,0.88))] text-white shadow-[0_18px_40px_rgba(127,29,29,0.35)] hover:-translate-y-0.5 hover:border-red-300/70 hover:shadow-[0_24px_56px_rgba(127,29,29,0.42)]",
    variant === "secondary" &&
      "border-white/16 bg-white/5 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/6",
    variant === "ghost" &&
      "border-transparent bg-transparent px-0 text-slate-200 hover:text-white",
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  ...props
}: LinkProps | NativeButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link className={cn(buttonClasses(variant, size), className)} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(buttonClasses(variant, size), className)} {...props}>
      {content}
    </button>
  );
}
