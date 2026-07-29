"use client";

import { cn } from "@/lib/utils";
import type { ElementType } from "react";

export interface TabItem {
  value: string;
  label: string;
  icon?: ElementType<{ className?: string }>;
}

interface TabBarProps {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  fill?: boolean;
}

/** Controlled segmented tab bar with luxury gold & obsidian styling. */
export function TabBar({ tabs, value, onChange, className }: TabBarProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 rounded-2xl border border-line bg-ink-card/90 p-2 shadow-md backdrop-blur-xl",
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        const Icon = tab.icon;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={cn(
              "group relative flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs sm:text-sm font-bold transition-all duration-300",
              active
                ? "border border-gold bg-gradient-to-r from-gold/25 via-gold/15 to-gold/25 text-cream shadow-[0_4px_20px_rgba(213,160,74,0.25)]"
                : "border border-transparent text-gold-light/70 hover:border-gold/30 hover:bg-gold/10 hover:text-gold hover:-translate-y-0.5",
            )}
          >
            {Icon && (
              <Icon
                className={cn(
                  "size-4 shrink-0 transition-transform duration-300",
                  active ? "text-gold scale-110" : "text-gold-light/60 group-hover:text-gold group-hover:scale-105",
                )}
              />
            )}
            <span className="truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
