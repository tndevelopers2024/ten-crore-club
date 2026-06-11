"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bannerSlides } from "@/data/banner-slides";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

/** Splits a title on {braces} so the wrapped span gets the gold shimmer. */
function renderTitle(title: string) {
  const match = title.match(/^([\s\S]*?)\{([\s\S]*?)\}([\s\S]*)$/);
  if (!match) return title;
  const [, before, highlight, after] = match;
  return (
    <>
      {before}
      <span className="gold-shimmer">{highlight}</span>
      {after}
    </>
  );
}

export function BannerSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = bannerSlides.length;

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count],
  );

  // Autoplay — pauses on hover/focus and when the tab is hidden.
  const activeRef = useRef(active);
  activeRef.current = active;
  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!document.hidden) go(activeRef.current + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-24 pb-12 sm:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      {/* Full-bleed photo per slide — cross-faded with the active index. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {bannerSlides.map((slide, i) => (
          <Image
            key={slide.image.src}
            src={slide.image.src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={cn(
              "object-cover transition-opacity duration-700 ease-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      {/* Dark scrim so cream/gold text stays legible and edges blend to ink. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/65 to-ink/95"
      />

      {/* red radial glow + noise, matching the hero treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(161,6,1,0.16) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Slides — stacked + cross-faded so height is stable. */}
        <div className="grid">
          {bannerSlides.map((slide, i) => {
            const Icon = slide.icon;
            const isActive = i === active;
            return (
              <div
                key={slide.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className={cn(
                  "col-start-1 row-start-1 text-center transition-opacity duration-700 ease-out",
                  isActive ? "opacity-100" : "opacity-0",
                )}
              >
                <span className="mx-auto mb-6 inline-flex size-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Icon className="size-6 text-gold" aria-hidden />
                </span>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
                  {slide.eyebrow}
                </p>
                <h2 className="mx-auto max-w-4xl text-display-xl text-balance text-cream">
                  {renderTitle(slide.title)}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gold-light/75">
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CTAButton href={slide.primaryCta.href} size="lg">
                    {slide.primaryCta.label}
                  </CTAButton>
                  {slide.secondaryCta && (
                    <CTAButton
                      href={slide.secondaryCta.href}
                      variant="secondary"
                      size="lg"
                      withArrow={false}
                    >
                      {slide.secondaryCta.label}
                    </CTAButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="inline-flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
            {bannerSlides.map((slide, i) => {
              const isActive = i === active;
              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                    isActive
                      ? "w-8 bg-gold"
                      : "w-2 bg-gold/30 hover:bg-gold/60",
                  )}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="inline-flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Polite announcement for screen readers */}
      <span className="sr-only" aria-live="polite">
        Slide {active + 1} of {count}
      </span>
    </section>
  );
}
