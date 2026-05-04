import {
  aboutPillars,
  homeMethodPreview,
  methodologyGuardrails,
  problemAreas,
  securityPrinciples,
  services,
  trustBadges,
  whyRedSec,
} from "@/content/site";
import CTASection from "@/components/cta-section";
import MethodStep from "@/components/method-step";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TrustBadge from "@/components/trust-badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const heroHighlights = [
    {
      ...aboutPillars[0],
      description:
        "Reviews framed for school websites, portals, staff accounts, and visible exposure.",
    },
    {
      ...aboutPillars[1],
      description:
        "Authorized, clearly scoped work designed to avoid disruption or unnecessary risk.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-2 sm:pb-24 lg:pb-32">
        <div className="wrapper grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100/85">
              Education-first cybersecurity initiative
            </span>

            <h1 className="mt-8 max-w-4xl text-balance font-display text-4xl tracking-tight text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.95]">
              Cybersecurity built for schools, students, and education
              platforms.
            </h1>

            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              RedSec Edu helps educational institutions identify public
              security risks, protect student data, and build safer digital
              habits through authorized reviews and practical cybersecurity
              education.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg" showArrow>
                Request a Security Checkup
              </Button>
              <Button href="/methodology" variant="secondary" size="lg">
                View Our Methodology
              </Button>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Scoped external reviews, professional reporting, and a calm
              methodology appropriate for school leadership review.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustBadges.map((item, index) => (
                <Reveal key={item.title} delay={0.08 + index * 0.06}>
                  <TrustBadge {...item} />
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="panel relative overflow-hidden rounded-[34px] p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_38%)]" />
              <div className="pointer-events-none absolute -right-14 top-10 h-44 w-44 rounded-full border border-cyan-300/18" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 bg-[linear-gradient(135deg,rgba(239,68,68,0.14),transparent)]" />

              <div className="relative">
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/85">
                    Built for careful security work
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-tight text-white">
                    Safe by scope. Clear by design.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    RedSec Edu is designed for schools that need practical risk
                    visibility without disruptive testing or aggressive
                    posturing.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[26px] border border-white/10 bg-white/5 p-5"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/18 bg-red-400/8 text-red-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[28px] border border-cyan-300/12 bg-cyan-300/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/85">
                    Engagement guardrails
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-100">
                    {methodologyGuardrails.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              eyebrow="Why schools need cybersecurity"
              title="Education systems have a broad public surface and a low margin for avoidable risk."
              description="Modern schools rely on websites, forms, portals, email accounts, and digital services every day. That convenience also creates exposure points that can affect operations, privacy, and trust."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {problemAreas.map((item, index) => {
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

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Practical services for school leadership, staff, students, and public-facing platforms."
              description="RedSec Edu combines safe external reviews, student-data awareness, staff education, and implementation guidance. The goal is to reduce visible risk and improve day-to-day cyber hygiene."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Methodology preview"
              title="A cybersecurity process designed to stay professional, authorized, and low-risk."
              description="The methodology begins with written authorization, stays inside defined scope, and focuses on safe external checks with clear remediation guidance."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {homeMethodPreview.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.08}>
                <MethodStep item={step} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button href="/methodology" variant="secondary" size="lg">
              Explore the full methodology
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Why RedSec Edu"
              title="A protective security brand for education environments, not a generic attack-themed consultancy."
              description="RedSec Edu is positioned around trust, safe methodology, and education outcomes. The brand stays serious, clear, and practical for directors, parents, and education businesses."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {whyRedSec.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="panel panel-hover h-full rounded-[30px] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/18 bg-red-400/8 text-red-200">
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

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Security principles"
              title="The initiative is guided by authorization, clarity, and respect for school operations."
              description="These principles shape every review, training session, and workshop so institutions get practical value without unnecessary risk or overstatement."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {securityPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <article className="panel panel-hover h-full rounded-[28px] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
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
        title="Start with a safe review of what your school already exposes publicly."
        description="Whether you need a focused school security checkup, a student-data review, or cybersecurity education for staff and students, RedSec Edu is built to support the work carefully and professionally."
        primaryLabel="Request a Security Checkup"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
