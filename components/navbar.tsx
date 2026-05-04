"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { navigation } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_18px_55px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-red-400/25 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.3),transparent_60%),rgba(2,6,23,0.92)]">
            <span className="absolute inset-1 rounded-full border border-cyan-300/20" />
            <span className="font-display text-sm tracking-[0.3em] text-white">
              RS
            </span>
          </div>
          <div>
            <span className="block font-display text-lg tracking-tight text-white">
              RedSec Edu
            </span>
            <span className="block text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Authorized education security
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  active
                    ? "bg-white/8 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md" showArrow>
            Request a Security Checkup
          </Button>
        </div>

        <MobileMenu items={navigation} />
      </div>
    </header>
  );
}
