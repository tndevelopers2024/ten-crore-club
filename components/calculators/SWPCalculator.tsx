"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { swpDuration, swpCorpusNeeded } from "@/lib/calculators";
import { formatINRFull } from "@/lib/formatters";

export function SWPCalculator() {
  const [corpus, setCorpus] = useState(30000000);
  const [withdrawal, setWithdrawal] = useState(150000);
  const [ret, setRet] = useState(11);

  const dur = useMemo(
    () => swpDuration(corpus, withdrawal, ret),
    [corpus, withdrawal, ret],
  );
  const corpusFor25y = useMemo(
    () => swpCorpusNeeded(withdrawal, 25, ret),
    [withdrawal, ret],
  );

  // sustainability: cap at 50 years for the bar
  const coveredPct = Math.min((dur.months / (50 * 12)) * 100, 100);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-7 rounded-lg border border-line bg-ink-card p-6">
        <Slider
          label="Retirement Corpus"
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

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-gold-light/60">
            <span>Sustainability (of a 50-year retirement)</span>
            <span className="font-mono text-gold">{coveredPct.toFixed(0)}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-ink-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-deep via-gold-warm to-gold transition-[width] duration-500"
              style={{ width: `${coveredPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-gold/40 bg-gradient-to-b from-ink-card to-ink p-7">
          <p className="text-sm text-gold-light/70">Your withdrawals last</p>
          <p className="mt-1 font-mono text-4xl font-semibold text-gold tnum sm:text-5xl">
            {dur.lastsForever ? "75+ yrs" : `${dur.years}y ${dur.extraMonths}m`}
          </p>
          <p className="mt-1 text-sm text-gold-light/60">
            {dur.lastsForever
              ? "At this rate, growth outpaces withdrawals — effectively perpetual."
              : `Drawing ${formatINRFull(withdrawal)} every month.`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-line bg-ink-card p-4">
            <p className="text-xs text-gold-light/60">Total Withdrawn</p>
            <p className="mt-1 font-mono text-lg font-semibold text-cream tnum">
              {dur.lastsForever ? "—" : formatINRFull(dur.totalWithdrawn)}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-ink-card p-4">
            <p className="text-xs text-gold-light/60">Monthly Income</p>
            <p className="mt-1 font-mono text-lg font-semibold text-cream tnum">
              {formatINRFull(withdrawal)}
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-red-vivid/30 bg-red-mid/10 p-5">
          <p className="text-sm leading-relaxed text-gold-light/85">
            To sustain{" "}
            <span className="font-mono text-cream">{formatINRFull(withdrawal)}</span>{" "}
            withdrawals for 25 years at {ret}% returns, you&apos;d need a corpus of{" "}
            <span className="font-mono font-semibold text-gold">
              {formatINRFull(corpusFor25y)}
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
