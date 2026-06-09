import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about building wealth in India? We answer every one personally — usually within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Questions? We answer every one{" "}
            <span className="gold-text">personally.</span>
          </>
        }
        subtitle="We are not a robo-advisory. Every message is read by a human."
      />

      <SectionWrapper width="narrow">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-center text-sm text-gold-light/60">
            We&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
