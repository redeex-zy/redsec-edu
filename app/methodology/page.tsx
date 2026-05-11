import type { Metadata } from "next";

import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import JsonLd from "@/components/json-ld";
import MethodStep from "@/components/method-step";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  methodologyGuardrails,
  methodologyFaqs,
  methodologySteps,
  reportHighlights,
} from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Methodology",
  description:
    "Review the RedSec Edu methodology for authorized, scoped, non-destructive school cybersecurity work with reporting and remediation guidance.",
  path: "/methodology",
  eyebrow: "Methodology",
  keywords: [
    "authorized cybersecurity testing",
    "school cybersecurity methodology",
    "non destructive security review",
    "education security reporting",
  ],
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Methodology", path: "/methodology" },
          ]),
          createFaqSchema(methodologyFaqs),
        ]}
      />

      <PageHero
        eyebrow="Methodology"
        title="A safe cybersecurity methodology for schools and education platforms."
        description="RedSec Edu uses a clearly scoped process that begins with written authorization, stays non-destructive, and focuses on practical findings that schools can act on."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Methodology" },
        ]}
      >
        <Button href="/contact" size="lg" showArrow>
          Request a Scoped Review
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          Match a Service to This Process
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper grid gap-6 xl:grid-cols-2">
          {methodologySteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <MethodStep item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Operating guardrails"
              title="What RedSec Edu will and will not do during an engagement."
              description="The methodology is designed to be explicit about safety boundaries. That clarity protects the institution and keeps expectations aligned."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel rounded-[34px] p-7 sm:p-8">
              <ul className="space-y-4 text-sm leading-7 text-slate-200">
                {methodologyGuardrails.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="panel rounded-[34px] p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                Report structure
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
                Schools receive evidence and guidance, not vague observations.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Reports are written so leadership, IT contacts, and external
                vendors can understand the issue, see the evidence, and decide
                what to fix next.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reportHighlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <article className="panel panel-hover h-full rounded-[30px] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                    Detail {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-200">
                    {item}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Methodology questions"
        title="Common questions about authorization, safety, and retesting."
        description="These answers clarify how RedSec Edu keeps engagements scoped, professional, and suitable for school leadership review."
        items={methodologyFaqs}
      />

      <CTASection
        title="Need a methodology that school leadership can approve with confidence?"
        description="RedSec Edu is structured for authorized work, controlled external checks, and communication that respects school operations and student protection."
        primaryLabel="Request a Security Checkup"
        primaryHref="/contact"
        secondaryLabel="Read About RedSec Edu"
        secondaryHref="/about"
      />
    </>
  );
}
