"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import type { NavItem } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/84 backdrop-blur-md md:hidden"
          >
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: [0.21, 1, 0.24, 1] }}
              className="mx-4 mt-[5.5rem] rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,24,0.985),rgba(5,9,18,0.97))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="border-b border-white/8 pb-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-200/80">
                  Navigation
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                  Explore services, methodology, and contact details for a
                  scoped school security review.
                </p>
              </div>

              <div className="space-y-2">
                {items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition",
                        active
                          ? "bg-white/8 text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/8 pt-6">
                <Button href="/contact" size="lg" className="w-full" showArrow>
                  Request a Security Checkup
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
