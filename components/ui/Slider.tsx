"use client";

import { cn } from "@/lib/utils";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** formats the displayed current value */
  display?: (value: number) => string;
  className?: string;
}

/** Labeled range slider with a live value readout and gold fill track. */
export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  display,
  className,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between">
        <label className="text-sm text-gold-light/80">{label}</label>
        <span className="font-mono text-base font-semibold text-gold tnum">
          {display ? display(value) : value}
        </span>
      </div>
      <input
        type="range"
        className="tc-range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--tc-fill" as string]: `${pct}%` }}
        aria-label={label}
      />
    </div>
  );
}
