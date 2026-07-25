"use client";

import { useState } from "react";
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

/** Labeled range slider with an editable live value readout and gold fill track. */
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
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(true);
    setEditValue(value.toString());
    e.target.select();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    setEditValue(valStr);
    const cleanStr = valStr.replace(/[^0-9.]/g, "");
    const num = parseFloat(cleanStr);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    const cleanStr = editValue.replace(/[^0-9.]/g, "");
    const num = parseFloat(cleanStr);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
  };

  const clampedRangeValue = Math.min(max, Math.max(min, value));
  const pct = Math.min(100, Math.max(0, ((clampedRangeValue - min) / (max - min)) * 100));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-medium text-gold-light/80">{label}</label>
        <input
          type="text"
          value={isEditing ? editValue : (display ? display(value) : value)}
          onFocus={handleFocus}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
          className="w-32 sm:w-36 rounded-lg border border-line/60 bg-ink-card px-2.5 py-1 text-right font-mono text-base font-semibold text-gold tnum transition-all hover:border-gold/50 focus:border-gold focus:bg-ink focus:outline-none focus:ring-1 focus:ring-gold/30"
          aria-label={`${label} input`}
        />
      </div>
      <input
        type="range"
        className="tc-range"
        min={min}
        max={max}
        step={step}
        value={clampedRangeValue}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--tc-fill" as string]: `${pct}%` }}
        aria-label={label}
      />
    </div>
  );
}

