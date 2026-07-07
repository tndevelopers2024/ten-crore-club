"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { LineAreaChart } from "./CalculatorChart";
import { calcSWP, swpTimeline, swpCorpusNeeded } from "@/lib/calculators";
import { formatINR, formatINRFull } from "@/lib/formatters";

export function SWPCalculator() {
  const [corpus, setCorpus] = useState(30000000);
  const [withdrawal, setWithdrawal] = useState(150000);
  const [ret, setRet] = useState(11);
  const [years, setYears] = useState(25);

  const result = useMemo(
    () => calcSWP(corpus, withdrawal, ret, years),
    [corpus, withdrawal, ret, years],
  );

  const timeline = useMemo(
    () => swpTimeline(corpus, withdrawal, ret, years),
    [corpus, withdrawal, ret, years],
  );

  const corpusForYears = useMemo(
    () => swpCorpusNeeded(withdrawal, years, ret),
    [withdrawal, years, ret],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      {/* Inputs */}
      <div className="space-y-7 rounded-lg border border-line bg-ink-card p-6">
        <Slider
          label="Corpus"
          value={corpus}
          onChange={setCorpus}
          min={1000000}
          max={500000000}
          step={500000}
          display={formatINRFull}
        />
        <Slider
          label="Monthly Withdrawal"
          value={withdrawal}
          onChange={setWithdrawal}
          min={10000}
          max={500000}
          step={5000}
          display={formatINRFull}
        />
        <Slider
          label="Expected Annual Return"
          value={ret}
          onChange={setRet}
          min={8}
          max={40}
          step={0.5}
          display={(v) => `${v}%`}
        />
        <Slider
          label="Time Period (Years)"
          value={years}
          onChange={setYears}
          min={5}
          max={50}
          step={1}
          display={(v) => `${v} yrs`}
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
              label: "Initial Corpus",
              color: "#b0270e",
              dashed: true,
              points: timeline.map((t) => ({ x: t.year, y: t.invested })),
            },
          ]}
        />
      </div>

      {/* Output */}
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-gold/40 bg-gradient-to-b from-ink-card to-ink p-7">
          <p className="text-sm text-gold-light/70">Final Portfolio Value</p>
          <p className="mt-1 font-mono text-4xl font-semibold text-gold tnum sm:text-5xl">
            {formatINRFull(result.finalBalance)}
          </p>
          <p className="mt-1 font-mono text-sm text-gold-light/60">
            {formatINR(result.finalBalance)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Stat label="Total Withdrawn" value={formatINRFull(result.totalWithdrawn)} accent />
          <Stat label="Initial Corpus" value={formatINRFull(result.totalInvested)} />
          <Stat label="Monthly Income" value={formatINRFull(withdrawal)} />
          <Stat label="Time Horizon" value={`${years} years`} />
        </div>

        <div className="rounded-lg border border-red-vivid/30 bg-red-mid/10 p-5">
          <p className="text-sm leading-relaxed text-gold-light/85">
            To sustain{" "}
            <span className="font-mono text-cream">{formatINRFull(withdrawal)}</span>{" "}
            withdrawals for {years} years at {ret}% returns, you&apos;d need a minimum corpus of{" "}
            <span className="font-mono font-semibold text-gold">
              {formatINRFull(corpusForYears)}
            </span>
            .
          </p>
        </div>

        <p className="mt-auto text-[11px] leading-relaxed text-gold-light/40">
          Returns shown are estimated and for illustrative purposes only.
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
