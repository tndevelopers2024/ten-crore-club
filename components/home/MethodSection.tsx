"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { MilestoneBars } from "@/components/calculators/CalculatorChart";
import { pillars, methodMilestones } from "@/data/pillars";

export function MethodSection() {
  return (
    <section className="px-5 py-10 sm:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="text-center mx-auto max-w-3xl">
          <Eyebrow>The Ten Crore Method™</Eyebrow>
          <h2 className="mt-3 text-display-lg text-balance text-cream">
            Not a product. <span className="gold-text">A proven system.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gold-light/80">
            Most investors fail not because of bad funds — but because they have
            no system. Five core disciplines work together to compound your wealth.
          </p>
        </Reveal>

        {/* 5 Pillars Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.number} delay={i * 80} className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-ink-card p-6 transition-all duration-300 hover:border-gold/40 hover:bg-ink-card/90">
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-gold/30 transition-colors group-hover:text-gold/60">
                        {p.number}
                      </span>
                      <div className="flex size-10 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 transition-colors group-hover:border-gold/40 group-hover:bg-gold/20">
                        <Icon className="size-5 text-gold transition-transform group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-display text-lg font-semibold text-cream group-hover:text-gold-warm transition-colors">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gold-light/70">
                      {p.short}
                    </p>
                  </div>

                  {/* Subtle hover accent line */}
                  <div className="mt-6 h-0.5 w-full bg-line transition-colors group-hover:bg-gold/40" />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Milestone Chart Section */}
        <Reveal delay={120} className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-line bg-ink-card p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
              <div>
                <p className="text-xs font-mono tracking-wider uppercase text-gold">
                  Compounding In Action
                </p>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-semibold text-cream">
                  How a single discipline becomes ₹10 Crore
                </h3>
              </div>
              <p className="text-xs text-gold-light/60 font-mono">
                Based on ₹30,000/mo SIP @ 12.5% CAGR
              </p>
            </div>

            <div className="mt-6">
              <MilestoneBars data={methodMilestones} />
            </div>

            <p className="mt-6 text-[11px] text-center sm:text-left leading-relaxed text-gold-light/40">
              *Illustrative calculation only based on constant returns. Market returns fluctuate and are not guaranteed.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={150} className="mt-8 text-center">
          <CTAButton href="/framework" size="lg">
            Explore the Full Framework
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

