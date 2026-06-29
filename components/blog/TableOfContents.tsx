"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeadingItem {
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    // Track active heading using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -70% 0px", // focus area at upper section of viewport
      threshold: 0,
    };

    const observedElements: HTMLElement[] = [];

    const observer = new IntersectionObserver((entries) => {
      // Find entries that are currently intersecting
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Pick the top-most intersecting heading
        const sorted = intersectingEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        setActiveId(sorted[0].target.id);
      }
    }, observerOptions);

    // Start observing each heading DOM node
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    // Fallback: handle extreme scroll bounds
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Top of page: clear active state
      if (scrolled < 100) {
        setActiveId("");
        return;
      }
      
      // Bottom of page: highlight last heading
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveId(headings[headings.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-28 pl-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/70 mb-4">
          On this page
        </p>
        <ul className="space-y-3 border-l border-line">
          {headings.map((h) => {
            const active = h.id === activeId;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={cn(
                    "-ml-px block border-l-2 pl-4 text-sm transition-all duration-200",
                    active
                      ? "border-gold text-gold font-medium scale-[1.02] origin-left"
                      : "border-transparent text-gold-light/50 hover:border-gold-light/35 hover:text-gold-light/95"
                  )}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
