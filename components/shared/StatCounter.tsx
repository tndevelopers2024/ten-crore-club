"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  labelClassName?: string;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  duration = 1800,
  threshold = 0.3,
  className,
  labelClassName,
}: StatCounterProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>(threshold);
  const count = useCountUp(value, duration, isInView);
  const display = count.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <span className="font-mono text-4xl font-semibold text-gold tnum sm:text-5xl">
        {prefix}
        {display}
        {suffix && <span className="ml-0.5 text-2xl text-gold-light sm:text-3xl">{suffix}</span>}
      </span>
      <span className={cn("mt-2 text-sm text-gold-light/70", labelClassName)}>
        {label}
      </span>
    </div>
  );
}
