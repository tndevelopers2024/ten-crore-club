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
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      {/* Full-bleed background photos — cross-faded + Ken Burns zoom when active */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {bannerSlides.map((slide, i) => (
          <Image
            key={slide.image.src}
            src={slide.image.src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-out",
              i === active ? "opacity-100 z-10 ken-burns-active" : "opacity-0 z-0",
            )}
          />
        ))}
      </div>

      {/* Dark scrim so cream/gold text stays legible and edges blend to ink. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/85 z-10"
      />

      {/* Red radial glow + noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 glow-pulse z-10"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(219, 51, 19,0.2) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen z-10"
      />

      <div className="relative mx-auto w-full max-w-5xl z-20">
        {/* Slides Stack */}
        <div className="grid">
          {bannerSlides.map((slide, i) => {
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
                  "col-start-1 row-start-1 text-center transition-all duration-700 ease-in-out flex flex-col items-center justify-center",
                  isActive ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-4 scale-[0.98] pointer-events-none z-0",
                )}
              >
                {/* Logo */}
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/logo/ten-crore-club-logo-2.png"
                    alt="Ten Crore Club"
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-lg"
                  />
                </div>

                {/* Heading */}
                <h2 className="mx-auto max-w-4xl text-display-xl text-balance text-cream leading-[1.15]">
                  {renderTitle(slide.title)}
                </h2>

                {/* Subtitle */}
                <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gold-light/85">
                  {slide.subtitle}
                </p>



                {/* Stats Grid */}
                {slide.stats && (
                  <div
                    className={cn(
                      "mx-auto mt-8 w-full border-t border-gold/15 pt-8 grid gap-4",
                      slide.stats.length === 2
                        ? "grid-cols-2 max-w-2xl"
                        : "grid-cols-3 max-w-3xl"
                    )}
                  >
                    {slide.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="stats-card-transition flex flex-col p-4 sm:p-5 rounded-lg border border-gold/15 bg-ink-card/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      >
                        <span className="font-display text-xl sm:text-3xl font-bold text-cream gold-text">
                          {stat.value}
                        </span>
                        <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-gold-light/65 leading-none">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                  <CTAButton href={slide.primaryCta.href} size="lg" className="w-full sm:w-auto">
                    {slide.primaryCta.label}
                  </CTAButton>
                  {slide.secondaryCta && (
                    <CTAButton
                      href={slide.secondaryCta.href}
                      variant="secondary"
                      size="lg"
                      withArrow={false}
                      className="w-full sm:w-auto"
                    >
                      {slide.secondaryCta.label}
                    </CTAButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Premium Controls */}
        <div className="mt-14 flex items-center justify-center gap-4 border-t border-gold/15 pt-8">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="inline-flex size-11 items-center justify-center rounded-full border border-red-mid/30 text-red-mid transition-all hover:bg-red-vivid/10 hover:border-red-mid hover:text-red-vivid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-mid cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="inline-flex size-11 items-center justify-center rounded-full border border-red-mid/30 text-red-mid transition-all hover:bg-red-vivid/10 hover:border-red-mid hover:text-red-vivid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-mid cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

      </div>

      {/* Screen Reader Announcements */}
      <span className="sr-only" aria-live="polite">
        Slide {active + 1} of {count}
      </span>
    </section>
  );
}
