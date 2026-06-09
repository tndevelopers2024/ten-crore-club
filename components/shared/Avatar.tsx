"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  photo?: string | null;
  name?: string;
  /** diameter in px */
  size?: number;
  className?: string;
}

/** Circular avatar: shows a photo if provided, else the gold initials chip. */
export function Avatar({
  initials,
  photo,
  name,
  size = 44,
  className,
}: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const showPhoto = !!photo && !errored;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-gold/10 font-mono font-semibold text-gold",
        className,
      )}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.34) }}
    >
      {/* initials sit underneath — act as the fallback automatically */}
      <span aria-hidden={showPhoto}>{initials}</span>

      {showPhoto && (
        <>
          {!loaded && <span className="absolute inset-0 img-skeleton" aria-hidden />}
          <Image
            src={photo as string}
            alt={name ? `${name}` : "Member photo"}
            fill
            sizes={`${size}px`}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={cn(
              "object-cover transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
            )}
          />
        </>
      )}
    </span>
  );
}
