"use client";

import { useId } from "react";
import { formatINR } from "@/lib/formatters";
import { cn } from "@/lib/utils";

export interface Series {
  label: string;
  color: string; // stroke / fill base color
  points: { x: number; y: number }[]; // x = year, y = value
  fill?: boolean;
  dashed?: boolean;
}

interface LineAreaChartProps {
  series: Series[];
  /** max y for scaling; auto-computed if omitted */
  maxY?: number;
  maxX: number;
  height?: number;
  className?: string;
  yTicks?: number;
  animate?: boolean;
}

const W = 640;

/**
 * Lightweight SVG line/area chart. Updates instantly on input change.
 * Pass animate to draw the lines once on mount (used for static charts).
 */
export function LineAreaChart({
  series,
  maxY,
  maxX,
  height = 280,
  className,
  yTicks = 4,
  animate = false,
}: LineAreaChartProps) {
  const uid = useId().replace(/:/g, "");
  const padL = 8;
  const padR = 8;
  const padB = 26;
  const padT = 12;
  const innerW = W - padL - padR;
  const innerH = height - padT - padB;

  const yMax =
    maxY ??
    Math.max(
      1,
      ...series.flatMap((s) => s.points.map((p) => p.y)),
    ) * 1.05;

  const sx = (x: number) => padL + (x / maxX) * innerW;
  const sy = (y: number) => padT + innerH - (y / yMax) * innerH;

  const toLine = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`).join(" ");

  const toArea = (pts: { x: number; y: number }[]) =>
    `${toLine(pts)} L ${sx(pts[pts.length - 1].x).toFixed(1)} ${sy(0).toFixed(1)} L ${sx(pts[0].x).toFixed(1)} ${sy(0).toFixed(1)} Z`;

  return (
    <div className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${W} ${height}`}
        className="w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label="Growth chart"
      >
        <defs>
          {series.map((s, i) => (
            <linearGradient key={i} id={`${uid}-g${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.45" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0.02" />
            </linearGradient>
          ))}
        </defs>

        {/* y gridlines */}
        {Array.from({ length: yTicks + 1 }, (_, i) => {
          const v = (yMax / yTicks) * i;
          const y = sy(v);
          return (
            <g key={i}>
              <line
                x1={padL}
                x2={W - padR}
                y1={y}
                y2={y}
                style={{ stroke: "var(--color-line)" }}
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <text
                x={padL + 2}
                y={y - 4}
                style={{ fill: "var(--color-gold-light)" }}
                fillOpacity="0.55"
                fontSize="10"
              >
                {formatINR(v)}
              </text>
            </g>
          );
        })}

        {/* areas */}
        {series
          .filter((s) => s.fill)
          .map((s, i) => (
            <path key={`a${i}`} d={toArea(s.points)} fill={`url(#${uid}-g${series.indexOf(s)})`} />
          ))}

        {/* lines */}
        {series.map((s, i) => (
          <path
            key={`l${i}`}
            d={toLine(s.points)}
            fill="none"
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={s.dashed ? "5 5" : undefined}
            pathLength={animate ? 1 : undefined}
            style={
              animate
                ? {
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    animation: `draw-${uid} 1.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s forwards`,
                  }
                : undefined
            }
          />
        ))}

        {/* x labels */}
        {Array.from({ length: 6 }, (_, i) => {
          const yr = Math.round((maxX / 5) * i);
          return (
            <text
              key={i}
              x={sx(yr)}
              y={height - 8}
              style={{ fill: "var(--color-gold-light)" }}
              fillOpacity="0.6"
              fontSize="10"
              textAnchor="middle"
            >
              Yr {yr}
            </text>
          );
        })}

        {animate && (
          <style>{`@keyframes draw-${uid}{to{stroke-dashoffset:0}}`}</style>
        )}
      </svg>

      {/* legend */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
        {series.map((s, i) => (
          <span key={i} className="flex items-center gap-2 text-xs text-gold-light/70">
            <span
              className="h-0.5 w-4 rounded-full"
              style={{ background: s.color, opacity: s.dashed ? 0.6 : 1 }}
            />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

interface MilestoneBarsProps {
  data: { year: number; label: string; value: number; target?: boolean }[];
  className?: string;
}

/** Horizontal milestone bar chart (Year → value), target bar highlighted gold. */
export function MilestoneBars({ data, className }: MilestoneBarsProps) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className={cn("space-y-3", className)}>
      {data.map((d) => {
        const pct = (d.value / max) * 100;
        return (
          <div key={d.year} className="flex items-center gap-3">
            <span className="w-16 shrink-0 font-mono text-xs text-gold-light/60">
              Year {d.year}
            </span>
            <div className="relative h-8 flex-1 overflow-hidden rounded-md bg-ink-elevated">
              <div
                className={cn(
                  "flex h-full items-center justify-end rounded-md px-3 transition-[width] duration-700 ease-out",
                  d.target
                    ? "bg-gradient-to-r from-red-deep to-gold"
                    : "bg-gradient-to-r from-ink-elevated to-gold-warm/70",
                )}
                style={{ width: `${Math.max(pct, 14)}%` }}
              >
                <span className="font-mono text-xs font-semibold text-cream">
                  {d.label}
                </span>
              </div>
            </div>
            {d.target && (
              <span className="hidden shrink-0 text-xs font-medium text-gold sm:inline">
                ← Your Target
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
