"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { instagramReels } from "@/data/reels";
import { ReelCard } from "@/components/home/ReelCard";
import { ReelModal } from "@/components/home/ReelModal";
import type { InstagramReel, ReelCategory } from "@/types";
import { CTAButton } from "@/components/shared/CTAButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CATEGORIES: { key: ReelCategory; label: string }[] = [
  { key: "all", label: "All Reels" },
  { key: "sip-wealth", label: "SIP & Wealth" },
  { key: "mindset", label: "Mindset & Psychology" },
  { key: "market-insights", label: "Market Insights" },
  { key: "stories", label: "Member Stories" },
];

export function InstagramReelsSection() {
  const [activeCategory, setActiveCategory] = useState<ReelCategory>("all");
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);

  const filteredReels =
    activeCategory === "all"
      ? instagramReels
      : instagramReels.filter((r) => r.category === activeCategory);

  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-28 overflow-hidden bg-ink/50 border-y border-gold/15">
      {/* Background Ambient Glowing Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[600px] rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(213,160,74,0.4) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 px-4 py-1.5 mb-4 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
              <InstagramIcon className="size-4 text-pink-400 animate-pulse" />
              <span className="text-xs font-bold text-cream tracking-wider uppercase">
                Official Instagram Reels
              </span>
              <span className="flex size-2 rounded-full bg-pink-500 animate-ping" />
            </div>

            <Eyebrow>Bite-Sized Wealth Wisdom</Eyebrow>

            <h2 className="text-display-lg text-balance text-cream max-w-3xl">
              Master the market in 60 seconds.{" "}
              <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                Watch our latest Reels.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gold-light/75 max-w-2xl text-balance">
              Short, high-yield insights on SIP strategies, compounding mechanics, and behavioral psychology from our official channel.
            </p>
          </Reveal>

          {/* Category Filter Tabs */}
          <Reveal delay={100} className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white shadow-[0_0_20px_rgba(213,160,74,0.35)] scale-105"
                      : "bg-ink-card/70 border border-gold/20 text-gold-light/70 hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Reels Swiper Slider */}
        <Reveal delay={150} className="mt-12 relative">
          <div className="-mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                480: { slidesPerView: 1.8 },
                640: { slidesPerView: 2.4 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 4 },
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet cursor-pointer",
              }}
              autoplay={{ delay: 6000, disableOnInteraction: true }}
              className="reels-swiper !pb-14"
            >
              {filteredReels.map((reel) => (
                <SwiperSlide key={reel.id}>
                  <ReelCard reel={reel} onSelect={(r) => setSelectedReel(r)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        {/* Footer CTA Banner */}
        <Reveal delay={200} className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-gold/25 bg-gradient-to-r from-ink-card via-ink-soft to-ink-card p-6 sm:p-8 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg">
              <InstagramIcon className="size-7" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-cream">
                Join our Instagram Community
              </h3>
              <p className="text-xs sm:text-sm text-gold-light/70 mt-0.5">
                Follow @tencroreclub for daily market breakdowns & wealth creation reels.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/tencroreclub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:scale-105 transition-transform shrink-0 w-full sm:w-auto"
          >
            <InstagramIcon className="size-4" />
            <span>Follow @tencroreclub</span>
            <ExternalLink className="size-3.5" />
          </a>
        </Reveal>
      </div>

      {/* Reel Playback Modal */}
      <ReelModal
        reel={selectedReel}
        reels={filteredReels}
        onClose={() => setSelectedReel(null)}
        onSelectReel={(reel) => setSelectedReel(reel)}
      />
    </section>
  );
}
