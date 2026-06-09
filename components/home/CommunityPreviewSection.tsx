import { Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";

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
    <section className="section-red-fade px-5 py-24 sm:px-8 md:py-28">
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
            <CTAButton href="#" size="lg">
              Join the ₹10 Crore Circle — Free to Start
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-ink-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light/60">
                Free Tier
              </p>
              <ul className="mt-4 space-y-3">
                {freeTier.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gold-light/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-light/50" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-gold/50 bg-ink-card p-6 shadow-[0_0_40px_-20px_rgba(213,160,74,0.6)]">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Inner Circle · Premium
              </p>
              <ul className="mt-4 space-y-3">
                {innerCircle.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cream">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
