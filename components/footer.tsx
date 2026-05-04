import Link from "next/link";

import { navigation } from "@/content/site";

const footerHighlights = [
  "Authorized reviews",
  "Student-data aware",
  "Rooted in Morocco and North Africa",
];

const operatingNotes = [
  "Written authorization before any assessment work.",
  "No destructive testing or unsanctioned access attempts.",
  "Reports written for directors, staff, IT, and vendors.",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-12 sm:pt-16">
      <div className="wrapper">
        <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-red-400/25 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.3),transparent_60%),rgba(2,6,23,0.92)]">
                  <span className="absolute inset-1 rounded-full border border-cyan-300/20" />
                  <span className="font-display text-sm tracking-[0.3em] text-white">
                    RS
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg text-white">RedSec Edu</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Cybersecurity for education environments
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                RedSec Edu helps educational institutions improve digital
                safety through practical security reviews, awareness, and
                student-focused cybersecurity education.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {footerHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Navigate
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Operating notes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {operatingNotes.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper mt-8 border-t border-white/8 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} RedSec Edu. Built for safe, practical
        education security engagements.
      </div>
    </footer>
  );
}
