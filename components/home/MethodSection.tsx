"use client";

import { useState, useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { MilestoneBars } from "@/components/calculators/CalculatorChart";
import { pillars, methodMilestones } from "@/data/pillars";
import { BrandImage } from "@/components/shared/BrandImage";
import { cn } from "@/lib/utils";

export function MethodSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || container.children.length === 0) return;
    
    const scrollLeft = container.scrollLeft;
    const childWidth = container.children[0].clientWidth;
    const gap = 20; // gap-5 is 20px
    const index = Math.round(scrollLeft / (childWidth + gap));
    const clampedIndex = Math.max(0, Math.min(index, pillars.length - 1));
    setActiveIndex(clampedIndex);
  };

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container || !container.children[index]) return;
    
    const child = container.children[index] as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const scrollLeft = container.scrollLeft + (childRect.left - containerRect.left) - (containerRect.width - childRect.width) / 2;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  return (
    <section className="px-5 py-24 sm:px-8 md:py-18">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>The Ten Crore Method™</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            Not a product. <span className="gold-text">A proven system.</span>
          </h2>
          <p className="mt-5 text-lg text-gold-light/80">
            Most investors fail not because of bad funds — but because they have
            no system. Five disciplines, working together, compound into a number.
          </p>
        </Reveal>

        {/* pillars */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="mt-14 flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 md:grid md:overflow-x-visible md:pb-0 md:grid-cols-4 lg:grid-cols-6"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                as="article"
                key={p.number}
                delay={i * 100}
                className={cn(
                  "w-[85vw] sm:w-[50vw] md:w-auto shrink-0 snap-align-center snap-always",
                  i === 3
                    ? "md:col-span-2 lg:col-span-2 lg:col-start-2"
                    : i === 4
                    ? "md:col-span-2 md:col-start-2 lg:col-span-2 lg:col-start-auto"
                    : "md:col-span-2 lg:col-span-2"
                )}
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-card transition-colors hover:border-gold/40">
                  {p.image && (
                    <BrandImage
                      src={p.image}
                      alt={p.title}
                      aspect="1/1"
                      className="border-b border-line"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-gold/25">
                        {p.number}
                      </span>
                      <Icon className="size-7 text-gold transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile slide indicators */}
        <div className="mt-6 flex justify-center gap-2.5 md:hidden">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                activeIndex === i ? "w-6 bg-gold" : "w-1.5 bg-gold/25 hover:bg-gold/40"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* milestone chart */}
        <Reveal delay={120} className="mt-16">
          <div className="rounded-xl border border-line bg-ink-card p-6 sm:p-8">
            <p className="mb-1 text-sm text-gold-light/70">
              A ₹30,000/month SIP at 12.5% annualised returns
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
          <CTAButton href="/framework" size="lg">
            Explore the Full Framework
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
