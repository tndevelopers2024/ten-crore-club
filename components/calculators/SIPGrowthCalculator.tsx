"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { LineAreaChart } from "./CalculatorChart";
import { calcSIP, growthTimeline } from "@/lib/calculators";
import { formatINR, formatINRFull, formatMultiple } from "@/lib/formatters";

export function SIPGrowthCalculator() {
  const [monthly, setMonthly] = useState(15000);
  const [years, setYears] = useState(25);
  const [ret, setRet] = useState(12);
  const [topUp, setTopUp] = useState(10);

  const result = useMemo(
    () => calcSIP(monthly, years, ret, topUp),
    [monthly, years, ret, topUp],
  );

  const timeline = useMemo(
    () => growthTimeline(monthly, years, ret, topUp),
    [monthly, years, ret, topUp],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      {/* Inputs */}
      <div className="space-y-7 rounded-lg border border-line bg-ink-card p-6">
        <Slider
          label="Monthly SIP Amount"
          value={monthly}
          onChange={setMonthly}
          min={1000}
          max={500000}
          step={1000}
          display={formatINRFull}
        />
        <Slider
          label="Investment Period"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          display={(v) => `${v} yrs`}
        />
        <Slider
          label="Expected Annual Return"
          value={ret}
          onChange={setRet}
          min={6}
          max={20}
          step={0.5}
          display={(v) => `${v}%`}
        />
        <Slider
          label="Annual Step-up (optional)"
          value={topUp}
          onChange={setTopUp}
          min={0}
          max={20}
          display={(v) => `${v}%`}
        />
        <LineAreaChart
          maxX={years}
          series={[
            {
              label: "Portfolio Value",
              color: "#d5a04a",
              fill: true,
              points: timeline.map((t) => ({ x: t.year, y: t.value })),
            },
            {
              label: "Invested",
              color: "#a10601",
              dashed: true,
              points: timeline.map((t) => ({ x: t.year, y: t.invested })),
            },
          ]}
        />
      </div>

      {/* Output */}
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-gold/40 bg-gradient-to-b from-ink-card to-ink p-7">
          <p className="text-sm text-gold-light/70">Projected Future Value</p>
          <p className="mt-1 font-mono text-4xl font-semibold text-gold tnum sm:text-5xl">
            {formatINRFull(result.futureValue)}
          </p>
          <p className="mt-1 font-mono text-sm text-gold-light/60">
            {formatINR(result.futureValue)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat label="Total Invested" value={formatINRFull(result.totalInvested)} />
          <Stat label="Wealth Created" value={formatINRFull(result.wealthCreated)} accent />
          <Stat label="Investment Multiple" value={formatMultiple(result.wealthMultiple)} />
          <Stat label="Time Horizon" value={`${years} years`} />
        </div>

        <p className="mt-auto text-[11px] leading-relaxed text-gold-light/40">
          Returns shown are estimated and for illustrative purposes only. Past
          performance is not indicative of future returns.
        </p>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line bg-ink-card p-4">
      <p className="text-xs text-gold-light/60">{label}</p>
      <p
        className={`mt-1 font-mono text-lg font-semibold tnum ${accent ? "text-gold" : "text-cream"}`}
      >
        {value}
      </p>
    </div>
  );
}
