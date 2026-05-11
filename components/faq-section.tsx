import SectionHeading from "@/components/section-heading";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
};

export default function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <section className="section-space">
      <div className="wrapper">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-12 grid gap-4">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="panel rounded-[28px] p-5 sm:p-6"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none pr-8 font-display text-xl tracking-tight text-white marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
