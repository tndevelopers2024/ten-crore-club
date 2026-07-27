"use client";

import Image from "next/image";
import { Play, Eye } from "lucide-react";
import type { InstagramReel } from "@/types";

function InstagramIcon({ className = "size-3.5" }: { className?: string }) {
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

interface ReelCardProps {
  reel: InstagramReel;
  onSelect?: (reel: InstagramReel) => void;
}

export function ReelCard({ reel }: ReelCardProps) {
  return (
    <a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[9/16] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-gold/30 bg-ink-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-gold/70 hover:shadow-[0_20px_45px_-15px_rgba(213,160,74,0.4)] glare-sweep select-none block"
    >
      {/* Background Poster Image */}
      <Image
        src={reel.thumbnail}
        alt={reel.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Scrim Gradient for Readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/60 z-10 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Top Bar: Instagram Badge & Duration */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
          <InstagramIcon className="size-3.5 text-pink-400" />
          <span className="text-[11px] font-semibold text-white/90">{reel.authorHandle}</span>
        </div>

        <div className="rounded-full bg-ink/80 backdrop-blur-md px-2.5 py-1 border border-gold/30 text-[11px] font-bold text-gold">
          {reel.duration}
        </div>
      </div>

      {/* Center Play Button Overlay */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="flex size-14 items-center justify-center rounded-full bg-gold/90 text-ink shadow-[0_0_25px_rgba(213,160,74,0.6)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:bg-gold">
            <Play className="size-6 fill-ink ml-1 transition-transform group-hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="relative z-20 space-y-2 text-left">
        {/* Category Tag */}
        <span className="inline-block rounded-md bg-gold/20 border border-gold/30 px-2.5 py-0.5 text-[10px] font-bold text-gold tracking-wide">
          {reel.categoryLabel}
        </span>

        {/* Title */}
        <h3 className="font-display text-sm sm:text-base font-bold leading-tight text-cream group-hover:text-gold transition-colors line-clamp-2">
          {reel.title}
        </h3>

        {/* Views Counter */}
        <div className="flex items-center gap-1.5 border-t border-white/10 pt-2 text-[11px] text-white/80">
          <Eye className="size-3.5 text-gold" />
          <span>{reel.views} views</span>
        </div>
      </div>
    </a>
  );
}
