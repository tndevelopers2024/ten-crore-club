"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  threshold?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}

/**
 * Scroll-reveal wrapper. Fades + lifts content into view once.
 * (Pure CSS transition driven by an IntersectionObserver — no animation lib.)
 */
export function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
}: RevealProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>(threshold);
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", isInView && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
