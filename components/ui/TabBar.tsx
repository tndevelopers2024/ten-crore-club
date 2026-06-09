"use client";

import { cn } from "@/lib/utils";

export interface TabItem {
  value: string;
  label: string;
}

interface TabBarProps {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  fill?: boolean;
}

/** Controlled segmented tab bar with an animated gold underline. */
export function TabBar({ tabs, value, onChange, className, fill }: TabBarProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex flex-wrap gap-1 rounded-lg border border-line bg-ink-card p-1",
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={cn(
              "relative rounded-md px-4 py-2 text-sm font-medium transition-colors",
              fill && "flex-1",
              active
                ? "bg-red-deep/90 text-on-accent"
                : "text-gold-light/70 hover:text-gold hover:bg-gold/5",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
