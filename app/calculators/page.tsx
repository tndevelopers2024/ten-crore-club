import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CalculatorsTabs } from "@/components/calculators/CalculatorsTabs";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "SIP, SWP & Goal Calculators",
  description:
    "Free SIP growth, retirement SWP, goal-planning and delay-cost calculators. Find out exactly what it takes to build ₹10 Crore — and what waiting costs you.",
};

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Numbers Room"
        title={
          <>
            Numbers don&apos;t lie. Find out exactly{" "}
            <span className="gold-text">where you stand.</span>
          </>
        }
        subtitle="Spend 5 minutes here. It will change how you think about money."
      />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <CalculatorsTabs />

          <div className="mt-16 rounded-2xl border border-gold/30 bg-ink-card p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl text-cream sm:text-3xl">
              Your situation is more complex than a slider.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gold-light/70">
              Let&apos;s build your plan properly — mapped to your income, goals,
              and timeline.
            </p>
            <div className="mt-7 flex justify-center">
              <CTAButton href="/book" size="lg">
                Book a Free Strategy Call
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
