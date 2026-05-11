import type { Metadata } from "next";

import CTASection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { aboutPillars } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about RedSec Edu, a cybersecurity initiative focused on helping schools improve digital safety through practical reviews, awareness, and student-focused learning.",
  path: "/about",
  eyebrow: "About",
  keywords: [
    "about redsec edu",
    "education cybersecurity initiative",
    "ethical cybersecurity for schools",
    "morocco cybersecurity education",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About"
        title="A cybersecurity initiative focused on safer digital environments for education."
        description="RedSec Edu helps educational institutions improve their digital safety through practical security reviews, awareness, and student-focused cybersecurity education."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      >
        <Button href="/contact" size="lg" showArrow>
          Start a Conversation
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          Explore Services
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="panel rounded-[34px] p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                Why RedSec Edu exists
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
                Practical protection matters more than dramatic language.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Education teams are responsible for websites, registration
                  systems, staff accounts, student information, and public trust
                  at the same time. RedSec Edu exists to help make that digital
                  responsibility safer and easier to understand.
                </p>
                <p>
                  The initiative is rooted in Morocco and North Africa, with an
                  approach shaped by regional education realities and broader
                  security best practices. The goal is not to overclaim
                  offensive capability. The goal is to deliver careful,
                  authorized, and useful cybersecurity work.
                </p>
                <p>
                  RedSec Edu focuses on public-risk visibility, safer handling
                  of student-related data, cyber awareness for teachers and
                  administrators, and ethical beginner-friendly learning for
                  students.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Education protection
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Ethical cybersecurity
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Student-focused learning
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel relative overflow-hidden rounded-[34px] p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(239,68,68,0.12),transparent_34%,rgba(34,211,238,0.1))]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  How the initiative works
                </p>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Reviews stay authorized and within written scope.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Reports are written to help decision-makers act, not to
                    impress with jargon.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Student-focused learning stays ethical, practical, and
                    beginner-friendly.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    The brand is protective and educational, not aggressive.
                  </li>
                </ul>

                <div className="mt-6 rounded-[24px] border border-cyan-300/12 bg-cyan-300/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                    Regional perspective
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    The initiative is rooted in Morocco and North Africa while
                    staying aligned with broadly applicable security hygiene and
                    safe review practices.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Operating pillars"
              title="Honest, protective, and readable by design."
              description="RedSec Edu is intentionally positioned around trust and practical outcomes for schools, parents, and education businesses."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {aboutPillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="panel panel-hover h-full rounded-[30px] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-display tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a cybersecurity partner that understands school trust?"
        description="RedSec Edu is built for institutions that want safe methodology, clear communication, and security work that respects students, staff, and daily operations."
        primaryLabel="Request a Security Checkup"
        primaryHref="/contact"
        secondaryLabel="Review the Methodology"
        secondaryHref="/methodology"
      />
    </>
  );
}
