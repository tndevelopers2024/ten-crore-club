"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target with easeOutQuart when `isActive` flips true.
 * Respects prefers-reduced-motion (jumps straight to target).
 */
export function useCountUp(target: number, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const id = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(id);
    }

    const start = performance.now();
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setCount(eased * target);
      if (progress < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, duration, isActive]);

  return count;
}
