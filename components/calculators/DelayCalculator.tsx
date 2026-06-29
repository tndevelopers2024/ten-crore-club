"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { LineAreaChart } from "./CalculatorChart";
import { CTAButton } from "@/components/shared/CTAButton";
import { calcDelayCost, delayTimeline } from "@/lib/calculators";
import { formatINR, formatINRFull } from "@/lib/formatters";

interface DelayCalculatorProps {
  showChart?: boolean;
  showCTA?: boolean;
}

export function DelayCalculator({
  showChart = true,
  showCTA = true,
}: DelayCalculatorProps) {
  const [monthly, setMonthly] = useState(45000);
  const [years, setYears] = useState(32);
  const [ret, setRet] = useState(14);

  const { valueToday, valueNextYear, delayCost, delayCostLabel } = useMemo(
    () => calcDelayCost(monthly, years, ret),
    [monthly, years, ret],
  );

  const timeline = useMemo(
    () => delayTimeline(monthly, years, ret),
    [monthly, years, ret],
  );

  const formatDisplayValue = (val: number) => {
    if (val >= 10000000) {
      return formatINR(val);
    }
    return formatINRFull(val);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-red-vivid/40 bg-gradient-to-b from-ink-card to-ink">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* Inputs */}
        <div className="space-y-7">
          <Slider
            label="Monthly SIP Amount"
            value={monthly}
            onChange={setMonthly}
            min={10000}
            max={500000}
            step={10000}
            display={formatINRFull}
          />
          <Slider
            label="Investment Horizon"
            value={years}
            onChange={setYears}
            min={10}
            max={50}
            display={(v) => `${v} yrs`}
          />
          <Slider
            label="Expected Annual Return"
            value={ret}
            onChange={setRet}
            min={10}
            max={40}
            step={0.5}
            display={(v) => `${v}%`}
          />

          {showChart && (
            <LineAreaChart
              maxX={years}
              height={220}
              series={[
                {
                  label: "Start today",
                  color: "#eb401e",
                  fill: true,
                  points: timeline.map((t) => ({ x: t.year, y: t.today })),
                },
                {
                  label: "Start next year",
                  color: "#8a8a8a",
                  dashed: true,
                  points: timeline.map((t) => ({ x: t.year, y: t.delayed })),
                },
              ]}
            />
          )}
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gold/40 bg-ink p-5">
              <p className="text-xs uppercase tracking-wider text-gold/80">
                Start Today
              </p>
              <p className="mt-2 font-mono text-2xl font-semibold text-gold tnum sm:text-3xl">
                {formatDisplayValue(valueToday)}
              </p>
            </div>
            <div className="rounded-lg border border-line bg-ink p-5">
              <p className="text-xs uppercase tracking-wider text-gold-light/50">
                Start Next Year
              </p>
              <p className="mt-2 font-mono text-2xl font-semibold text-gold-light/55 tnum sm:text-3xl">
                {formatDisplayValue(valueNextYear)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border-2 border-red-vivid/60 bg-red-mid/10 p-6 text-center cta-pulse">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-vivid">
              One Year Costs You
            </p>
            <p className="mt-2 font-mono text-4xl font-bold text-red-vivid tnum sm:text-5xl">
              {formatDisplayValue(delayCost)}
            </p>
            <p className="mt-2 text-sm text-gold-light/75">
              That&apos;s <span className="text-cream">{delayCostLabel}</span>.
              Gone. Because of one year.
            </p>
          </div>

          <p className="mt-4 font-display text-lg italic text-gold-light/80">
            “This number isn&apos;t a projection. It&apos;s a price tag on
            procrastination.”
          </p>

          {showCTA && (
            <div className="mt-5">
              <CTAButton href="/book" pulse>
                Stop Waiting. Book Your Free Strategy Call
              </CTAButton>
            </div>
          )}

          <p className="mt-4 text-[11px] leading-relaxed text-gold-light/40">
            Returns shown are estimated and for illustrative purposes only. Past
            performance is not indicative of future returns.
          </p>
        </div>
      </div>
    </div>
  );
}
