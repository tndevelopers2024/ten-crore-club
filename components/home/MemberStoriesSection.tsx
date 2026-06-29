"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { StatCounter } from "@/components/shared/StatCounter";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Avatar } from "@/components/shared/Avatar";
import { successStories } from "@/data/success-stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function StoryCard({
  story,
}: {
  story: (typeof successStories)[number];
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-gold/20 bg-ink-card/60 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_12px_40px_-20px_rgba(213,160,74,0.35)] glare-sweep relative overflow-hidden">
      <header className="flex items-center gap-3.5">
        <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Avatar initials={story.initials} photo={story.photo} name={story.name} size={46} />
          <div className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-gold border-2 border-ink flex items-center justify-center">
            <span className="size-1 rounded-full bg-ink" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-cream group-hover:text-gold transition-colors duration-200">{story.name}</p>
          <p className="text-xs text-gold-light/65">
            {story.profession} · {story.city} · Age {story.age}
          </p>
        </div>
      </header>

      {/* Before & Plan Split column */}
      <div className="mt-5 space-y-3.5 border-l-2 border-gold/30 pl-4 py-1">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
            Before Joining
          </span>
          <p className="mt-0.5 text-xs sm:text-sm text-gold-light/80 leading-relaxed">{story.whenJoined}</p>
        </div>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
            The Roadmap Plan
          </span>
          <p className="mt-0.5 text-xs sm:text-sm text-gold-light/80 leading-relaxed">{story.plan}</p>
        </div>
      </div>

      {/* Quote block */}
      <div className="relative mt-6 pt-1">
        <span className="absolute -top-3 -left-2 text-4xl font-serif text-gold/20 select-none pointer-events-none">“</span>
        <p className="font-display text-base italic leading-relaxed text-cream pl-4">
          {story.quote}
        </p>
      </div>

      {/* Status metrics card */}
      <div className="mt-auto pt-6">
        <div className="bg-ink-soft/80 border border-line/45 rounded-lg p-4">
          <StatCounter
            value={story.todayValue / 1e5}
            prefix="₹"
            suffix=" L"
            decimals={1}
            label="Portfolio today"
            duration={1600}
            threshold={0.05}
          />
          <div className="mt-3 flex items-center justify-between border-t border-line/30 pt-3 text-xs">
            <span className="text-gold-light/50">Plan Status:</span>
            <span className="flex items-center gap-1.5 font-medium text-gold font-sans">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              {story.onTrack}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MemberStoriesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-18">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Member Stories</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            Real people. Real portfolios.{" "}
            <span className="gold-text">Real crores being built.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="-mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 2.1 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet cursor-pointer",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              className="member-stories-swiper !pb-16"
            >
              {successStories.map((story) => (
                <SwiperSlide key={story.name} className="h-auto">
                  <StoryCard story={story} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-4 flex justify-center">
          <TrustStrip />
        </Reveal>

        <p className="mt-6 text-center text-[11px] text-gold-light/40">
          Results may vary. These are individual member experiences and are not a
          guarantee of future performance.
        </p>
      </div>
    </section>
  );
}
