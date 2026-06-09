import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { LineAreaChart } from "@/components/calculators/CalculatorChart";
import { pillars } from "@/data/pillars";
import { growthTimeline } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "The Ten Crore Method™",
  description:
    "A structured, five-pillar system for building serious wealth: income expansion, SIP discipline, smart allocation, compounding time, and behavioral coaching.",
};

const timeline = growthTimeline(15000, 30, 12);

export default function FrameworkPage() {
  return (
    <>
      <PageHero
        eyebrow="The Framework"
        title={
          <>
            The Ten Crore Method™ — a structured system for building{" "}
            <span className="gold-text">serious wealth.</span>
          </>
        }
        subtitle="Five disciplines. One number. We don't sell products — we install a system that compounds whether you're watching it or not."
      />

      <SectionWrapper>
        <div className="space-y-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.number} delay={i * 60}>
                <article className="relative overflow-hidden rounded-xl border border-line bg-ink-card p-7 sm:p-10">
                  <span className="pointer-events-none absolute -right-2 -top-6 font-mono text-[7rem] font-bold leading-none text-gold/[0.06] sm:text-[10rem]">
                    {p.number}
                  </span>
                  <div className="relative grid gap-6 md:grid-cols-[auto_1fr]">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                      <Icon className="size-7 text-gold" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-gold/70">Pillar {p.number}</p>
                      <h2 className="mt-1 font-display text-3xl font-semibold text-cream">
                        {p.title}
                      </h2>
                      <div className="mt-4 space-y-3 text-gold-light/75">
                        {p.detail.map((para, j) => (
                          <p key={j} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                      <div className="mt-5 border-l-2 border-gold/60 bg-gold/[0.04] py-3 pl-4">
                        <p className="font-display text-lg italic text-gold">
                          {p.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal>
          <div className="rounded-xl border border-line bg-ink-card p-6 sm:p-8">
            <p className="text-sm text-gold-light/70">
              ₹15,000/month SIP at 12% annualised — the system, visualised
            </p>
            <h2 className="mt-1 mb-6 font-display text-2xl text-cream">
              30 years of discipline → ₹10.7 Crore.
            </h2>
            <LineAreaChart
              maxX={30}
              height={320}
              animate
              series={[
                {
                  label: "Portfolio Value",
                  color: "#d5a04a",
                  fill: true,
                  points: timeline.map((t) => ({ x: t.year, y: t.value })),
                },
                {
                  label: "Amount Invested",
                  color: "#a10601",
                  dashed: true,
                  points: timeline.map((t) => ({ x: t.year, y: t.invested })),
                },
              ]}
            />
            <p className="mt-6 text-[11px] leading-relaxed text-gold-light/40">
              Illustrative only. Past performance is not indicative of future
              returns; actual results vary.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10 text-center">
          <CTAButton href="/book" size="lg">
            Start My ₹10 Crore Journey
          </CTAButton>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
