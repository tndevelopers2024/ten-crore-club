"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ className = "size-5" }: { className?: string }) {
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
import type { InstagramReel } from "@/types";
import { CTAButton } from "@/components/shared/CTAButton";

interface ReelModalProps {
  reel: InstagramReel | null;
  reels: InstagramReel[];
  onClose: () => void;
  onSelectReel: (reel: InstagramReel) => void;
}

export function ReelModal({ reel, reels, onClose, onSelectReel }: ReelModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentIndex = reel ? reels.findIndex((r) => r.id === reel.id) : -1;
  const prevReel = currentIndex > 0 ? reels[currentIndex - 1] : null;
  const nextReel = currentIndex >= 0 && currentIndex < reels.length - 1 ? reels[currentIndex + 1] : null;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && prevReel) onSelectReel(prevReel);
      if (e.key === "ArrowRight" && nextReel) onSelectReel(nextReel);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, prevReel, nextReel, onSelectReel]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (reel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [reel]);

  // Reset play state on reel change
  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [reel]);

  if (!reel) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={reel.title}
    >
      {/* Modal Card Content (stops backdrop propagation) */}
      <div
        className="relative flex h-[85vh] max-h-[780px] w-full max-w-[420px] sm:max-w-[460px] flex-col overflow-hidden rounded-2xl border border-gold/30 bg-ink-card shadow-[0_0_50px_rgba(213,160,74,0.25)] glare-sweep"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-gold via-amber-400 to-red-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Video Player Header Overlay */}
        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2.5 rounded-full bg-ink/70 backdrop-blur-md px-3 py-1.5 border border-gold/20 shadow-md">
            <div className="relative size-7 rounded-full overflow-hidden border border-gold/40">
              <Image
                src={reel.authorAvatar || "/logo/ten-crore-club-logo-2.png"}
                alt={reel.authorName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-cream leading-tight flex items-center gap-1">
                {reel.authorName}
                <span className="inline-block size-3 bg-gradient-to-tr from-pink-500 to-amber-500 text-[8px] font-bold text-white rounded-full text-center leading-none">
                  ✓
                </span>
              </p>
              <p className="text-[10px] text-gold-light/70">{reel.authorHandle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="flex size-9 items-center justify-center rounded-full bg-ink/70 backdrop-blur-md border border-gold/20 text-cream hover:text-gold transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>

            <button
              onClick={onClose}
              className="flex size-9 items-center justify-center rounded-full bg-ink/70 backdrop-blur-md border border-gold/20 text-cream hover:text-red-400 transition-colors"
              aria-label="Close video"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Video & Poster area */}
        <div
          className="relative flex-1 bg-black flex items-center justify-center cursor-pointer group"
          onClick={togglePlay}
        >
          {reel.videoUrl ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              poster={reel.thumbnail}
              loop
              playsInline
              autoPlay
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Pause / Play central overlay icon indicator on hover/toggle */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity">
              <div className="flex size-16 items-center justify-center rounded-full bg-gold/90 text-ink shadow-lg transition-transform scale-110">
                <Play className="size-8 fill-ink ml-1" />
              </div>
            </div>
          )}

          {/* Right Action Sidebar Overlay (Like, Comment, Share, Instagram) */}
          <div
            className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-5 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Like Button */}
            <button
              onClick={() => setLiked(!liked)}
              className="flex flex-col items-center gap-1 group/btn"
              aria-label="Like"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-ink/60 backdrop-blur-md border border-white/10 group-hover/btn:scale-110 transition-transform">
                <Heart
                  className={`size-5 transition-colors ${
                    liked ? "fill-red-500 text-red-500" : "text-white group-hover/btn:text-red-400"
                  }`}
                />
              </div>
              <span className="text-[10px] font-medium text-white/80">{reel.likes}</span>
            </button>

            {/* Comments Counter */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-ink/60 backdrop-blur-md border border-white/10">
                <MessageCircle className="size-5 text-white/90" />
              </div>
              <span className="text-[10px] font-medium text-white/80">{reel.comments}</span>
            </div>

            {/* Views counter */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-ink/60 backdrop-blur-md border border-white/10">
                <Sparkles className="size-5 text-gold" />
              </div>
              <span className="text-[10px] font-medium text-gold">{reel.views}</span>
            </div>

            {/* Instagram Link Button */}
            <a
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-transform"
              title="Watch on Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>

          {/* Bottom Info Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-ink via-ink/80 to-transparent p-4 pt-12 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Category tag */}
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-gold/20 border border-gold/30 px-2 py-0.5 text-[10px] font-semibold text-gold">
                {reel.categoryLabel}
              </span>
              <span className="text-[10px] text-white/50">{reel.duration}</span>
            </div>

            {/* Title */}
            <h3 className="font-display text-base font-bold text-cream line-clamp-2 leading-snug">
              {reel.title}
            </h3>

            {/* Caption */}
            <p className="mt-1.5 text-xs text-cream/80 line-clamp-2 leading-relaxed">
              {reel.caption}
            </p>

            {/* Tags */}
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {reel.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-medium text-gold-light/70">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Watch on Instagram CTA */}
            <div className="mt-4 pt-3 border-t border-gold/15">
              <a
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-semibold text-xs shadow-md hover:opacity-95 transition-opacity"
              >
                <InstagramIcon className="size-4" />
                <span>Watch full Reel on Instagram</span>
                <ExternalLink className="size-3.5 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Prev Reel Button (Modal Navigation) */}
      {prevReel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectReel(prevReel);
          }}
          className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-gold/30 bg-ink/70 text-gold backdrop-blur-md hover:bg-gold/20 transition-all cursor-pointer z-50"
          aria-label="Previous reel"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}

      {/* Next Reel Button (Modal Navigation) */}
      {nextReel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectReel(nextReel);
          }}
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-gold/30 bg-ink/70 text-gold backdrop-blur-md hover:bg-gold/20 transition-all cursor-pointer z-50"
          aria-label="Next reel"
        >
          <ChevronRight className="size-6" />
        </button>
      )}
    </div>
  );
}
