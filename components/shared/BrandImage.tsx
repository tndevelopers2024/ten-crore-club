"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Rounded = "none" | "md" | "lg" | "full";

interface BrandImageProps {
  /** Local path ("/images/...") or remote URL. If absent/empty → branded placeholder. */
  src?: string | null;
  alt: string;
  /** CSS aspect-ratio for fill mode, e.g. "16/9", "1/1", "3/4". Ignored when width+height set. */
  aspect?: string;
  /** Fixed-size mode (overrides aspect). */
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  rounded?: Rounded;
  /** Gold hairline border. */
  bordered?: boolean;
  /** Wrapper classes. */
  className?: string;
  /** Classes on the <img> itself (e.g. object-position). */
  imgClassName?: string;
  /** Small caption shown on the placeholder. */
  placeholderLabel?: string;
}

const roundedMap: Record<Rounded, string> = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export function BrandImage({
  src,
  alt,
  aspect = "16/9",
  width,
  height,
  sizes = "100vw",
  priority = false,
  rounded = "lg",
  bordered = false,
  className,
  imgClassName,
  placeholderLabel,
}: BrandImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const fixed = typeof width === "number" && typeof height === "number";
  const showImage = !!src && !errored;
  const showPlaceholder = !src || errored;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink-elevated",
        roundedMap[rounded],
        bordered && "border border-gold/30",
        !fixed && "w-full",
        className,
      )}
      style={fixed ? { width, height } : { aspectRatio: aspect }}
    >
      {/* Loading skeleton (only while a real image is fetching) */}
      {showImage && !loaded && (
        <div className="absolute inset-0 img-skeleton" aria-hidden />
      )}

      {/* Branded placeholder — no src, or load failed */}
      {showPlaceholder && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-elevated to-ink-card"
          aria-hidden
        >
          <ImageIcon className="size-7 text-gold/40" />
          {placeholderLabel && (
            <span className="px-3 text-center text-xs text-gold-light/40">
              {placeholderLabel}
            </span>
          )}
        </div>
      )}

      {showImage &&
        (fixed ? (
          <Image
            src={src as string}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={cn(
              "h-full w-full object-cover transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
              imgClassName,
            )}
          />
        ) : (
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={cn(
              "object-cover transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
              imgClassName,
            )}
          />
        ))}
    </div>
  );
}
