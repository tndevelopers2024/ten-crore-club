"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Heart, MessageCircle } from "lucide-react";
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
  const [imgSrc, setImgSrc] = useState(reel.thumbnail || "/images/ig-posts/post-1.jpg");
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block aspect-[9/16] w-full select-none overflow-hidden rounded-2xl"
      style={{
        padding: "1.5px",
        background: hovered
          ? "linear-gradient(135deg, #f59e0b, #ec4899, #a855f7, #f59e0b)"
          : "linear-gradient(135deg, rgba(245,158,11,0.4), rgba(236,72,153,0.4), rgba(168,85,247,0.3))",
        transition: "background 0.3s ease",
      }}
    >
      {/* Inner card */}
      <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-[#0a0b0f]">
        {/* Thumbnail */}
        <Image
          src={imgSrc}
          alt={reel.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgSrc("/images/ig-posts/post-1.jpg")}
        />

        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />

        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-3.5">
          <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 backdrop-blur-md">
            <InstagramIcon className="size-3 text-pink-400" />
            <span className="text-[10px] font-semibold text-white/90 tracking-wide">
              {reel.authorHandle}
            </span>
          </div>

          <div className="rounded-full border border-gold/40 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-gold backdrop-blur-md">
            {reel.duration}
          </div>
        </div>

        {/* Centered play button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="flex size-14 items-center justify-center rounded-full shadow-[0_0_30px_rgba(213,160,74,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(213,160,74,0.8)]"
            style={{
              background: "linear-gradient(135deg, #d5a04a, #f59e0b)",
            }}
          >
            <Play className="ml-0.5 size-6 fill-black text-black" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-3.5 pb-4 pt-16">
          {/* Category badge */}
          <span className="mb-2 inline-block rounded-md border border-gold/40 bg-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-gold">
            {reel.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="font-display text-sm font-bold leading-snug text-white drop-shadow-md line-clamp-2 mb-3">
            {reel.title}
          </h3>

          {/* Stats row */}
          <div className="flex items-center gap-3 border-t border-white/10 pt-2.5">
            <div className="flex items-center gap-1 text-[10px] font-medium text-white/70">
              <Eye className="size-3 text-gold/80" />
              <span>{reel.views}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-white/70">
              <Heart className="size-3 text-pink-400/90" />
              <span>{reel.likes}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-white/70">
              <MessageCircle className="size-3 text-purple-400/90" />
              <span>{reel.comments}</span>
            </div>

          </div>
        </div>
      </div>
    </a>
  );
}
