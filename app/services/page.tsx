import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SIP advisory, wealth roadmaps, retirement SWP strategy, child education planning, portfolio reviews, and behavioral coaching — every service moves you closer to ₹10 Crore.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Every service we offer exists to move you closer to your{" "}
            <span className="gold-text">₹10 Crore number.</span>
          </>
        }
        subtitle="No product pushing. No jargon. Just the disciplines that build wealth, delivered with accountability."
      />

      <SectionWrapper>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 3) * 110}>
                <Card interactive className="flex h-full flex-col">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-cream">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gold-light/70">
                    {s.description}
                  </p>
                  {s.detail && (
                    <p className="mt-3 rounded-md border border-line bg-ink p-3 text-xs text-gold-light/75">
                      {s.detail}
                    </p>
                  )}
                  {s.forWhom && (
                    <ul className="mt-3 space-y-1.5">
                      {s.forWhom.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gold-light/65">
                          <span className="size-1 rounded-full bg-gold/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-5">
                    <CTAButton href="/book" variant="ghost" size="sm">
                      {s.cta}
                    </CTAButton>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper width="narrow">
        <Reveal>
          <div className="rounded-2xl border border-gold/30 bg-ink-card p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl text-cream sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-gold-light/70">
              Book a free 30-minute call. We&apos;ll figure out exactly where you
              are and what the next move is.
            </p>
            <div className="mt-7 flex justify-center">
              <CTAButton href="/book" size="lg">
                Book a Free 30-Minute Call
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
