import { Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { StatCounter } from "@/components/shared/StatCounter";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8">
      {/* red radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(161,6,1,0.16) 0%, transparent 60%)",
        }}
      />
      {/* noise */}
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <div className="text-center lg:text-left">
          <AnimateIn>
            <Badge variant="gold" className="mx-auto lg:mx-0">
              <Sparkles className="size-3.5" />
              Private Wealth Community · AMFI Registered · Est. 2024
            </Badge>
          </AnimateIn>

          <AnimateIn delay={120}>
            <h1 className="mt-6 text-display-xl text-balance text-cream">
              While you&apos;re thinking about it,{" "}
              <span className="gold-shimmer">your peers are already building it.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gold-light/75 lg:mx-0">
              Ten Crore Club exists for one reason — to make sure you are not the
              only person in your circle who didn&apos;t build serious wealth.
            </p>
          </AnimateIn>

          <AnimateIn delay={360}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <CTAButton href="#" size="lg">
                Calculate My ₹10 Crore Plan
              </CTAButton>
              <CTAButton href="#" variant="secondary" size="lg" withArrow={false}>
                Book a Free Strategy Call
              </CTAButton>
            </div>
          </AnimateIn>

          <AnimateIn delay={480}>
            <TrustStrip className="mt-9 justify-center lg:justify-start" />
          </AnimateIn>
        </div>

        {/* Right — stats panel */}
        <AnimateIn delay={300}>
          <div className="rounded-2xl border border-gold/20 bg-ink-card/80 p-7 backdrop-blur-sm">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold/70">
              The Club, by the numbers
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <StatCounter value={340} suffix="+" label="Active Members" />
              <StatCounter
                value={4.2}
                prefix="₹"
                suffix="Cr"
                decimals={1}
                label="Added This Month"
              />
              <div className="flex flex-col">
                <span className="font-mono text-4xl font-semibold tracking-tight text-gold tnum sm:text-5xl">
                  14–16<span className="ml-0.5 text-2xl text-gold-light sm:text-3xl">%</span>
                </span>
                <span className="mt-2 text-sm text-gold-light/70">
                  Historical 15-yr SIP CAGR
                </span>
              </div>
              <StatCounter
                value={4.2}
                suffix=" yrs"
                decimals={1}
                label="Avg. Portfolio Age"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
