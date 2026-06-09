import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { MilestoneBars } from "@/components/calculators/CalculatorChart";
import { pillars, methodMilestones } from "@/data/pillars";

export function MethodSection() {
  return (
    <section className="bg-ink-elevated px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>The Ten Crore Method™</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            Not a product. <span className="gold-text">A proven system.</span>
          </h2>
          <p className="mt-5 text-lg text-gold-light/70">
            Most investors fail not because of bad funds — but because they have
            no system. Five disciplines, working together, compound into a number.
          </p>
        </Reveal>

        {/* pillars */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="article" key={p.number} delay={i * 100}>
                <div className="group h-full rounded-lg border border-line bg-ink-card p-6 transition-colors hover:border-gold/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-bold text-gold/25">
                      {p.number}
                    </span>
                    <Icon className="size-7 text-gold transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gold-light/70">
                    {p.short}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* milestone chart */}
        <Reveal delay={120} className="mt-16">
          <div className="rounded-xl border border-line bg-ink-card p-6 sm:p-8">
            <p className="mb-1 text-sm text-gold-light/70">
              A ₹15,000/month SIP at 12% annualised returns
            </p>
            <p className="mb-6 font-display text-xl text-cream">
              How a single discipline becomes ₹10 Crore.
            </p>
            <MilestoneBars data={methodMilestones} />
            <p className="mt-6 text-[11px] leading-relaxed text-gold-light/40">
              Illustrative only. Returns are not guaranteed; actual results vary.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-10 text-center">
          <CTAButton href="#" size="lg">
            Explore the Full Framework
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
