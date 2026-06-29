"use client";

import { Reveal } from "@/components/shared/Reveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { services } from "@/data/services";

function TickerCards({ items }: { items: typeof services }) {
  return (
    <div className="flex gap-5 px-2.5">
      {items.map((s) => {
        const Icon = s.icon;
        return (
          <Card
            key={s.slug}
            interactive
            className="flex w-[300px] shrink-0 flex-col border border-line bg-ink-card p-6"
          >
            <div className="flex size-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
              <Icon className="size-6 text-gold" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-cream">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gold-light/70">
              {s.description}
            </p>
            <div className="mt-auto pt-5">
              <CTAButton href={`/services#${s.slug}`} variant="ghost" size="sm">
                {s.cta}
              </CTAButton>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export function HomeServicesSection() {
  // Get the 9 new services only
  const homeServices = services.slice(0, 9);

  return (
    <SectionWrapper id="home-services" className="section-red-fade overflow-hidden">
      <style>{`
        @keyframes cardTickerAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .card-ticker-track {
          display: flex;
          width: max-content;
          animation: cardTickerAnimation 40s linear infinite;
          will-change: transform;
        }
        .card-ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Reveal className="text-center">
        <Eyebrow>Our Services</Eyebrow>
        <h2 className="text-display-lg text-balance text-cream">
          Structured solutions to build <span className="gold-text">serious wealth.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gold-light/80">
          From mutual funds to alternative assets, taxation, and protection — every service is engineered for compounding.
        </p>
      </Reveal>

      {/* Infinite scrolling cards ticker */}
      <div className="luxury-ticker-mask mt-12 overflow-hidden py-4">
        <div className="card-ticker-track">
          <TickerCards items={homeServices} />
          <TickerCards items={homeServices} />
        </div>
      </div>

      <Reveal className="mt-12 text-center">
        <CTAButton href="/services" size="lg">
          View All Services
        </CTAButton>
      </Reveal>
    </SectionWrapper>
  );
}
