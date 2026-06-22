import { Reveal } from "@/components/shared/Reveal";
import { StatCounter } from "@/components/shared/StatCounter";
import { Eyebrow } from "@/components/ui/Badge";
import { BrandImage } from "@/components/shared/BrandImage";

const timeline = [
  { year: "1990", label: "Sensex 1,000" },
  { year: "2003", label: "Bull run begins" },
  { year: "2008", label: "Crash + recovery" },
  { year: "2020", label: "COVID crash" },
  { year: "2021", label: "All-time high" },
  { year: "2024", label: "80,000+" },
  { year: "2040", label: "3,00,000+?" },
];

export function IndiaOpportunitySection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-18">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(213,160,74,0.5) 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>The Macro Context</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            You are living in the greatest wealth-creation window in{" "}
            <span className="gold-text">Indian history.</span>
          </h2>
        </Reveal>

        {/* Split grid for stats and graphic */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* stats grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
            <Reveal>
              <StatCounter value={80000} suffix="+" label="Sensex in 2024 (from 1,000 in 1990)" />
            </Reveal>
            <Reveal delay={100}>
              <StatCounter value={300000} suffix="+" label="Projected Sensex by 2040" />
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col">
                <span className="font-mono text-4xl font-semibold tracking-tight text-gold tnum sm:text-5xl">
                  14–16<span className="ml-0.5 text-2xl text-gold-light sm:text-3xl">%</span>
                </span>
                <span className="mt-2 text-sm text-gold-light/70">
                  Historical 15-year SIP CAGR
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <StatCounter value={2} suffix="x" label="India's middle class by 2035" />
            </Reveal>
          </div>

          {/* graphic */}
          <Reveal delay={200}>
            <BrandImage
              src="/images/sections/india-growth.png"
              alt="India compounding growth and Sensex timeline graphic"
              aspect="1/1"
              bordered
            />
          </Reveal>
        </div>

        {/* timeline */}
        <Reveal delay={120} className="mt-16">
          <div className="relative">
            <div className="absolute left-0 right-0 top-2 hidden h-px bg-gradient-to-r from-gold/10 via-gold/50 to-red-vivid/60 md:block" />
            <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7 md:gap-2">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 90} className="relative md:text-center">
                  <span className="mb-3 hidden size-4 rounded-full border-2 border-gold bg-ink md:mx-auto md:block" />
                  <p className="font-mono text-sm font-semibold text-gold">{t.year}</p>
                  <p className="mt-1 text-xs text-gold-light/60">{t.label}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* callout */}
        <Reveal delay={150} className="mt-16">
          <div className="gold-glow mx-auto max-w-3xl rounded-xl border border-gold/40 bg-ink-card/80 p-8 text-center sm:p-10">
            <p className="font-display text-2xl leading-relaxed text-gold-light/85 sm:text-3xl">
              Your grandfather missed the 1990s tech boom. Your father missed the
              2003–2008 bull run.{" "}
              <span className="gold-text">
                You are standing at the start of India&apos;s biggest compounding
                decade.
              </span>{" "}
              Don&apos;t miss this one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
