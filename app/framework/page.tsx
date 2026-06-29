import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { LineAreaChart } from "@/components/calculators/CalculatorChart";
import { pillars } from "@/data/pillars";
import { growthTimeline } from "@/lib/calculators";
import { BrandImage } from "@/components/shared/BrandImage";

export const metadata: Metadata = {
  title: "The Ten Crore Method™",
  description:
    "A structured, five-pillar system for building serious wealth: income expansion, SIP discipline, smart allocation, compounding time, and behavioral coaching.",
};

const milestones = [
  { year: 0, value: 0 },
  { year: 5, value: 2500000 },
  { year: 10, value: 6900000 },
  { year: 15, value: 15000000 },
  { year: 20, value: 29000000 },
  { year: 25, value: 55200000 },
  { year: 30, value: 102000000 },
];

const timeline = Array.from({ length: 31 }, (_, y) => {
  const invested = 30000 * y * 12;
  const idx = milestones.findIndex((m) => m.year >= y);
  if (idx === 0) return { year: y, value: 0, invested };
  const mPrev = milestones[idx - 1];
  const mNext = milestones[idx];
  let value = 0;
  if (mPrev.value === 0) {
    const t = (y - mPrev.year) / (mNext.year - mPrev.year);
    value = mPrev.value + t * (mNext.value - mPrev.value);
  } else {
    const t = (y - mPrev.year) / (mNext.year - mPrev.year);
    value = mPrev.value * Math.pow(mNext.value / mPrev.value, t);
  }
  return { year: y, value: Math.round(value), invested };
});

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
                  <div className="relative grid gap-6 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_280px] items-start">
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
                    {p.image && (
                      <div className="w-full max-w-sm mt-4 lg:mt-0 relative z-10">
                        <BrandImage
                          src={p.image}
                          alt={p.title}
                          aspect="16/10"
                          bordered
                          className="shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </div>
                    )}
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
              ₹30,000/month SIP at 12.5% annualised — the system, visualised
            </p>
            <h2 className="mt-1 mb-6 font-display text-2xl text-cream">
              30 years of discipline → ₹10.2 Crore.
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
                  color: "#b0270e",
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
