"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { sipRequired } from "@/lib/calculators";
import { formatINRFull } from "@/lib/formatters";

export function GoalReverseCalculator() {
  const [target, setTarget] = useState(100000000);
  const [years, setYears] = useState(25);
  const [ret, setRet] = useState(13);

  const monthly = useMemo(
    () => sipRequired(target, years, ret),
    [target, years, ret],
  );
  const totalInvested = monthly * years * 12;
  const wealthCreated = target - totalInvested;

  const tag =
    monthly <= 20000
      ? "Less than you think!"
      : monthly <= 50000
        ? "Achievable on your salary."
        : "Ambitious — but a step-up SIP can get you there.";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-7 rounded-lg border border-line bg-ink-card p-6">
        <Slider
          label="Target Corpus"
          value={target}
          onChange={setTarget}
          min={5000000}
          max={100000000}
          step={500000}
          display={formatINRFull}
        />
        <Slider
          label="Years to Goal"
          value={years}
          onChange={setYears}
          min={5}
          max={35}
          display={(v) => `${v} yrs`}
        />
        <Slider
          label="Expected Annual Return"
          value={ret}
          onChange={setRet}
          min={10}
          max={18}
          step={0.5}
          display={(v) => `${v}%`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-gold/40 bg-gradient-to-b from-ink-card to-ink p-7">
          <p className="text-sm text-gold-light/70">Monthly SIP needed</p>
          <p className="mt-1 font-mono text-4xl font-semibold text-gold tnum sm:text-5xl">
            {formatINRFull(monthly)}
          </p>
          <p className="mt-2 inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-light">
            {tag}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-line bg-ink-card p-4">
            <p className="text-xs text-gold-light/60">Total You Invest</p>
            <p className="mt-1 font-mono text-lg font-semibold text-cream tnum">
              {formatINRFull(totalInvested)}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-ink-card p-4">
            <p className="text-xs text-gold-light/60">Wealth Created</p>
            <p className="mt-1 font-mono text-lg font-semibold text-gold tnum">
              {formatINRFull(wealthCreated)}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gold-light/70">
          That means <span className="font-mono text-cream">{formatINRFull(monthly)}</span>{" "}
          a month, invested consistently for {years} years, compounds into your goal of{" "}
          <span className="font-mono text-gold">{formatINRFull(target)}</span>.
        </p>

        <p className="mt-auto text-[11px] leading-relaxed text-gold-light/40">
          Returns shown are estimated and for illustrative purposes only.
        </p>
      </div>
    </div>
  );
}
