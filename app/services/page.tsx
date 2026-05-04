import type { Metadata } from "next";

import CTASection from "@/components/cta-section";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import ServiceCard from "@/components/service-card";
import SectionHeading from "@/components/section-heading";
import TrustBadge from "@/components/trust-badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { services, trustBadges } from "@/content/site";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore RedSec Edu services for school security checkups, student data protection reviews, staff cyber awareness, student workshops, portal guidance, and incident preparation.",
  path: "/services",
  keywords: [
    "school security checkup",
    "student data protection review",
    "cyber awareness training for schools",
    "student cybersecurity workshops",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical cybersecurity support designed for real education environments."
        description="RedSec Edu services are built for schools, private institutions, education centers, and smaller education platforms that need safer public-facing systems, clearer cyber hygiene, and more informed users."
      >
        <Button href="/contact" size="lg" showArrow>
          Request a Service Scope
        </Button>
        <Button href="/methodology" variant="secondary" size="lg">
          See How Work Is Scoped
        </Button>
      </PageHero>

      <section className="section-space pt-0">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Service overview"
              title="Choose the right starting point for your school, staff, or student-facing systems."
              description="Each service is designed to answer a specific need clearly, from public-risk visibility and student-data protection to staff awareness and secure platform guidance."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="wrapper">
          <Reveal>
            <SectionHeading
              eyebrow="Shared engagement qualities"
              title="Every service is designed to stay clear, scoped, and useful to the people who need to act."
              description="Whether the work involves a technical review, staff training, or a student workshop, the delivery style stays practical and suitable for education stakeholders."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustBadges.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <TrustBadge {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help choosing the right starting point?"
        description="If you are not sure whether you need a public security checkup, a student-data review, or awareness training, use the contact page and describe your school’s current setup. RedSec Edu can help define a safe first scope."
        primaryLabel="Contact RedSec Edu"
        primaryHref="/contact"
        secondaryLabel="Read About the Initiative"
        secondaryHref="/about"
      />
    </>
  );
}
