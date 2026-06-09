"use client";

import { useEffect, useState } from "react";

/** Thin gold reading-progress bar fixed under the navbar. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold-antique via-gold to-cream transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
