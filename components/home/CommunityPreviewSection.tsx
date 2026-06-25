import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";

const freeTier = [
  "Weekly newsletter",
  "Monthly live webinar",
  "SIP education resources",
  "Market psychology content",
];

const innerCircle = [
  "Quarterly 1-on-1 calls",
  "Behavioral coaching",
  "Exclusive portfolio discussions",
  "Goal tracking dashboard",
  "Private 340+ HNI network",
  "Priority tool access",
];

export function CommunityPreviewSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-18 relative overflow-hidden">
      {/* Subtle background glow for the whole section */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <Eyebrow>The ₹10 Crore Circle</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream mt-3">
            This is not a WhatsApp tip group. This is a{" "}
            <span className="gold-text">private wealth ecosystem.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gold-light/75">
            The people in this community are your peers. Same age. Same income
            bracket. Same city. They are already compounding. The gap between you
            and them grows every month you&apos;re not in here.
          </p>
          <div className="mt-10 group relative">
            {/* Image hover glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gold/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <BrandImage
              src="/images/sections/community-lounge-v2.png"
              alt="Exclusive ₹10 Crore Circle member networking lounge"
              aspect="16/10"
              className="relative z-10 transition-transform duration-500 group-hover:scale-[1.01]"
              bordered
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            {/* Ambient glow behind cards */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[80px]" />
            
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center">
              {/* Free tier */}
              <div className="relative rounded-3xl border border-line bg-ink-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light/70">
                    Free Tier
                  </p>
                  <span className="rounded-full border border-line bg-ink-elevated px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-light/80">
                    Start here
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gold-light/70">
                  Get a feel for the circle — no payments, no obligation. Learn the
                  method, understand the discipline.
                </p>
                <div className="mt-6 mb-2 h-px w-full bg-line" />
                <ul className="mt-4 space-y-4">
                  {freeTier.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gold-light/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold-light/55" />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inner Circle */}
              <div className="relative rounded-3xl border border-gold/40 bg-ink-card p-6 sm:p-9 shadow-[0_0_60px_-20px_rgba(213,160,74,0.3)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_-20px_rgba(213,160,74,0.4)] hover:border-gold/60 sm:scale-[1.05] z-10">
                {/* Premium sweeping gradient background effect */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-3xl bg-gradient-to-b from-gold/15 via-gold/5 to-transparent opacity-80" />
                
                <div className="relative flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold">
                      Inner Circle
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                      · Premium
                    </p>
                  </div>
                  <span className="rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-gold-light whitespace-nowrap shadow-[0_0_15px_rgba(213,160,74,0.3)]">
                    Most impact
                  </span>
                </div>
                <p className="relative mt-5 text-sm leading-relaxed text-gold-light/90 font-medium">
                  Everything in the Free Tier, plus deep, ongoing guidance designed to
                  actually get you to ₹10 crore.
                </p>
                <div className="relative mt-6 mb-2 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
                <ul className="relative mt-4 space-y-4">
                  {innerCircle.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cream">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={3} />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center sm:justify-start">
              <CTAButton href="/community" size="lg" className="group shadow-[0_0_40px_-10px_rgba(219, 51, 19,0.6)] hover:shadow-[0_0_60px_-10px_rgba(219, 51, 19,0.8)] transition-all duration-300">
                Join the ₹10 Crore Circle — Free to Start
                <ArrowRight className="ml-2 inline size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
