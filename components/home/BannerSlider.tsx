"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { bannerSlides } from "@/data/banner-slides";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

/** Splits a title on {braces} so the wrapped span gets the gold shimmer effect. */
function renderTitle(title: string) {
  const match = title.match(/^([\s\S]*?)\{([\s\S]*?)\}([\s\S]*)$/);
  if (!match) return title;
  const [, before, highlight, after] = match;
  return (
    <>
      {before}
      <span className="gold-shimmer font-bold inline-block px-1 drop-shadow-[0_2px_10px_rgba(213,160,74,0.3)]">
        {highlight}
      </span>
      {after}
    </>
  );
}

export function BannerSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const count = bannerSlides.length;

  const go = useCallback(
    (next: number) => setActive((next + count) % count),
    [count]
  );

  // Autoplay handler
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

  // Touch Swipe Handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      go(active + 1);
    } else if (isRightSwipe) {
      go(active - 1);
    }
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="force-dark relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-24 pb-12 sm:px-8 bg-ink selection:bg-gold/30 selection:text-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      {/* Full-bleed background photos — cross-faded + subtle zoom when active */}
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
              "object-cover transition-all duration-1000 ease-out transform-gpu",
              i === active
                ? "opacity-100 scale-105 z-10 duration-10000 ease-linear"
                : "opacity-0 scale-100 z-0"
            )}
          />
        ))}
      </div>

      {/* Luxury Layered Scrims & Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/65 to-ink/95 z-10"
      />

      {/* Radial Gold / Crimson Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(213, 160, 74, 0.12) 0%, rgba(203, 5, 3, 0.18) 50%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay z-10"
      />

      {/* Top Header Logo */}
      <div className="relative z-20 mx-auto pt-2 flex flex-col items-center">
        <Image
          src="/logo/ten-crore-club-logo-2.png"
          alt="Ten Crore Club"
          width={220}
          height={220}
          priority
          className="h-20 sm:h-28 lg:h-32 w-auto object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </div>

      {/* Main Slide Content Area */}
      <div className="relative mx-auto w-full max-w-5xl z-20 my-auto py-6">
        <div className="grid">
          {bannerSlides.map((slide, i) => {
            const isActive = i === active;
            const Icon = slide.icon;

            return (
              <div
                key={slide.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!isActive}
                inert={!isActive ? true : undefined}
                className={cn(
                  "col-start-1 row-start-1 text-center transition-all duration-700 ease-in-out flex flex-col items-center justify-center",
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 z-10"
                    : "opacity-0 translate-y-6 scale-[0.97] pointer-events-none z-0"
                )}
              >
                {/* Eyebrow Tag */}
                {slide.eyebrow && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-ink-card/70 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] text-gold-light shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-6 animate-pulse-slow">
                    <Icon className="w-3.5 h-3.5 text-gold" />
                    <span>{slide.eyebrow}</span>
                  </div>
                )}

                {/* Headline */}
                <h1 className="mx-auto max-w-4xl text-display-2xl text-balance text-white leading-[1.08] tracking-tight">
                  {renderTitle(slide.title)}
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-cream/85 font-normal drop-shadow-sm">
                  {slide.subtitle}
                </p>

                {/* Stats Grid */}
                {slide.stats && slide.stats.length > 0 && (
                  <div
                    className={cn(
                      "mx-auto mt-10 w-full grid gap-3 sm:gap-4",
                      slide.stats.length === 2
                        ? "grid-cols-2 max-w-xl"
                        : "grid-cols-3 max-w-3xl"
                    )}
                  >
                    {slide.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="group relative flex flex-col p-4 sm:p-5 rounded-xl border border-gold/20 bg-ink-card/60 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-gold/45 hover:-translate-y-0.5"
                      >
                        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="font-sans text-xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-gold-light transition-colors">
                          {stat.value}
                        </span>
                        <span className="mt-1.5 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-cream/70 group-hover:text-cream leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <CTAButton
                    href={slide.primaryCta.href}
                    size="lg"
                    className="w-full sm:w-auto px-8 shadow-[0_10px_30px_rgba(203,5,3,0.35)]"
                  >
                    {slide.primaryCta.label}
                  </CTAButton>
                  {slide.secondaryCta && (
                    <CTAButton
                      href={slide.secondaryCta.href}
                      variant="secondary"
                      size="lg"
                      withArrow={false}
                      className="w-full sm:w-auto px-8 border-gold/30 hover:border-gold"
                    >
                      {slide.secondaryCta.label}
                    </CTAButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Carousel Bar & Controls */}
      <div className="relative z-20 mx-auto w-full max-w-5xl pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gold/15 pt-6">
          {/* Slide Tabs Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            {bannerSlides.map((slide, i) => {
              const isActive = i === active;
              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "group relative flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-gold/15 text-gold-light border border-gold/40 shadow-[0_4px_15px_rgba(213,160,74,0.15)]"
                      : "bg-ink-card/40 text-cream/50 border border-white/5 hover:text-cream hover:bg-ink-card/70 hover:border-white/15"
                  )}
                >
                  <span className="font-mono text-[11px] opacity-75">0{i + 1}</span>
                  <span className="hidden md:inline font-sans truncate max-w-[120px]">
                    {slide.eyebrow || `Slide ${i + 1}`}
                  </span>

                  {/* Autoplay Progress Line Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/30 overflow-hidden rounded-b-lg">
                      <span
                        className={cn(
                          "block h-full bg-gold transition-all",
                          paused ? "w-0" : "w-full animate-autoplay-progress"
                        )}
                        style={{
                          animationDuration: `${AUTOPLAY_MS}ms`,
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls: Prev/Next & Play/Pause */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
              className="inline-flex size-9 items-center justify-center rounded-full border border-gold/20 bg-ink-card/50 text-cream/70 transition-all hover:bg-gold/20 hover:border-gold hover:text-gold cursor-pointer"
            >
              {paused ? (
                <Play className="size-3.5 fill-current" />
              ) : (
                <Pause className="size-3.5" />
              )}
            </button>

            <div className="h-4 w-[1px] bg-gold/20" />

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous slide"
                className="inline-flex size-10 items-center justify-center rounded-full border border-gold/30 bg-ink-card/50 text-gold-light transition-all hover:bg-red-mid/20 hover:border-red-mid hover:text-white active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next slide"
                className="inline-flex size-10 items-center justify-center rounded-full border border-gold/30 bg-ink-card/50 text-gold-light transition-all hover:bg-red-mid/20 hover:border-red-mid hover:text-white active:scale-95 cursor-pointer shadow-md"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Reader Announcements */}
      <span className="sr-only" aria-live="polite">
        Slide {active + 1} of {count}
      </span>
    </section>
  );
}
