import { Check } from "lucide-react";
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
    <section className=" px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>The ₹10 Crore Circle</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            This is not a WhatsApp tip group. This is a{" "}
            <span className="gold-text">private wealth ecosystem.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gold-light/75">
            The people in this community are your peers. Same age. Same income
            bracket. Same city. They are already compounding. The gap between you
            and them grows every month you&apos;re not in here.
          </p>
          <div className="mt-8">
            <BrandImage
              src="/images/sections/community-lounge.png"
              alt="Exclusive ₹10 Crore Circle member networking lounge"
              aspect="16/10"
              bordered
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            {/* Free tier */}
            <div className="relative rounded-2xl border border-line bg-ink-card/90 p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-light/70">
                  Free Tier
                </p>
                <span className="rounded-full border border-line bg-ink-elevated px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold-light/65">
                  Start here
                </span>
              </div>
              <p className="mt-3 text-sm text-gold-light/70">
                Get a feel for the circle — no payments, no obligation. Learn the
                method, understand the discipline.
              </p>
              <ul className="mt-5 space-y-3.5">
                {freeTier.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gold-light/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-light/55" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inner Circle */}
            <div className="relative rounded-2xl border border-gold/60 bg-ink-card/95 p-6 sm:p-8 shadow-[0_0_80px_-32px_rgba(213,160,74,0.9)]">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-20 rounded-b-full bg-gradient-to-b from-gold/20 via-gold/5 to-transparent" />
              <div className="relative flex items-baseline justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Inner Circle · Premium
                </p>
                <span className="rounded-full border border-gold/70 bg-gold/10 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Most impact
                </span>
              </div>
              <p className="relative mt-3 text-sm text-gold-light/80">
                Everything in the Free Tier, plus deep, ongoing guidance designed to
                actually get you to ₹10 crore.
              </p>
              <ul className="relative mt-5 space-y-3.5">
                {innerCircle.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cream">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center sm:justify-start">
            <CTAButton href="/community" size="lg">
              Join the ₹10 Crore Circle — Free to Start
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
