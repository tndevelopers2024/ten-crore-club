import Script from "next/script";
import { Reveal } from "@/components/shared/Reveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/Badge";

const faqs = [
  {
    question: "What is Ten Crore Club?",
    answer:
      "Ten Crore Club is a private wealth community for serious long-term investors. It combines a personalised wealth roadmap, SIP discipline, behavioral coaching, portfolio discussions, and peer accountability to help members work toward their ₹10 crore goal.",
  },
  {
    question: "Do I need to be wealthy already to join?",
    answer:
      "No. The club is built for people who earn well and want a clear, disciplined system for turning income into long-term wealth. Your starting portfolio matters less than your investable surplus, time horizon, and willingness to stay consistent.",
  },
  {
    question: "Is ₹10 crore guaranteed?",
    answer:
      "No. Market-linked investments cannot guarantee a particular return or corpus. Your outcome depends on factors such as how much you invest, how long you stay invested, market performance, and your ability to follow the plan through different market cycles.",
  },
  {
    question: "Will you recommend specific mutual funds?",
    answer:
      "Your strategy call can include a fund shortlist suited to your goals and circumstances. The broader process also covers allocation, SIP amounts, timelines, portfolio reviews, and the behavior needed to keep the plan on track.",
  },
  {
    question: "What happens during the free 30-minute strategy call?",
    answer:
      "We review your income, savings rate, current investments, and goals; estimate what your ₹10 crore journey may require; identify immediate next steps; and decide whether Ten Crore Club is a useful fit. There is no fee or commitment for the call.",
  },
  {
    question: "Can I start with the free community?",
    answer:
      "Yes. The free tier includes the weekly newsletter, monthly live webinars, SIP education resources, and market psychology content. You can learn the method before deciding whether the Inner Circle's deeper guidance is right for you.",
  },
];

const accordionItems: AccordionItem[] = faqs.map(({ question, answer }, index) => ({
  id: `faq-${index + 1}`,
  trigger: question,
  content: answer,
}));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export function FAQSection() {
  return (
    <SectionWrapper id="faq" width="narrow" className="section-red-fade">
      <Script
        id="ld-home-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Reveal className="text-center">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="text-display-lg text-balance text-cream">
          A clearer path starts with <span className="gold-text">clear answers.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gold-light/80">
          The essentials about the community, the method, and what happens when
          you take the first step.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <Accordion items={accordionItems} defaultOpen={0} className="bg-ink-card/80" />
      </Reveal>
    </SectionWrapper>
  );
}
