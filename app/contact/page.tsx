import type { Metadata } from "next";

import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { serviceOptions } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact RedSec Edu to discuss an authorized school security checkup, student data review, awareness training, or student cybersecurity workshop.",
  path: "/contact",
  eyebrow: "Contact",
  keywords: [
    "contact school cybersecurity consultant",
    "request school security review",
    "education cyber awareness inquiry",
  ],
});

const scopingNotes = [
  "Public website, portal, or registration URLs in scope",
  "What type of institution or education business you operate",
  "Any staff, student, or parent-facing risk concerns",
  "Whether you need review, awareness training, or student workshops",
];

const requestExamples = [
  "Authorized review of a school website or public portal",
  "Student-data exposure concerns across forms or files",
  "Teacher and administrator phishing awareness training",
  "Student cybersecurity workshops for clubs or programs",
];

type ContactPageProps = {
  searchParams?: Promise<{
    service?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const requestedService = resolvedSearchParams?.service;
  const serviceValue = Array.isArray(requestedService)
    ? requestedService[0]
    : requestedService;
  const initialService = serviceOptions.includes(serviceValue ?? "")
    ? serviceValue
    : undefined;

  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Discuss a safe, scoped cybersecurity engagement for your school or education platform."
        description="Use the form below to describe your organization, the service you are interested in, and the public systems or training needs you want reviewed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      >
        <p className="max-w-2xl text-sm leading-7 text-slate-400">
          Initial inquiries should stay high-level. Share public URLs and scope
          context, not private records or credentials.
        </p>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm initialService={initialService} />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="panel rounded-[32px] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                Guidance for a strong first inquiry
              </p>
              <h2 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
                A good request is clear, limited, and easy to scope.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The most useful inquiries explain what kind of institution you
                operate, which public systems are relevant, and what concern or
                training need you want reviewed.
              </p>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Best fit inquiries
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  {requestExamples.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  What helps with scoping
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  {scopingNotes.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 rounded-[24px] border border-cyan-300/12 bg-cyan-300/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Trust note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  RedSec Edu treats student-related systems and school trust as
                  high-priority concerns. Initial scoping stays professional,
                  careful, and non-destructive.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
