"use client";

import { useState } from "react";
import { TabBar } from "@/components/ui/TabBar";
import { SIPGrowthCalculator } from "./SIPGrowthCalculator";
import { LumpsumCalculator } from "./LumpsumCalculator";
import { SWPCalculator } from "./SWPCalculator";
import { GoalReverseCalculator } from "./GoalReverseCalculator";
import { DelayCalculator } from "./DelayCalculator";
import { HistoricalSWPTable } from "./HistoricalSWPTable";

const tabs = [
  { value: "sip", label: "SIP Growth" },
  { value: "lumpsum", label: "Lumpsum Growth" },
  { value: "swp", label: "Retirement (SWP)" },
  { value: "goal", label: "Goal Planner" },
  { value: "delay", label: "Delay Cost" },
  { value: "historical", label: "Historical Proof" },
];

const descriptions: Record<string, string> = {
  sip: "See how a monthly SIP — with optional annual step-ups — compounds over time.",
  lumpsum: "See how a one-time lumpsum investment grows over a specific horizon.",
  swp: "Find out how long a corpus lasts, or how much you need for a lifetime of income.",
  goal: "Pick your number. We'll tell you the exact monthly SIP it takes to get there.",
  delay: "The most important calculator here. What does one year of waiting really cost?",
  historical: "See how an actual ₹10 Crore lump sum with a ₹6L/month SWP performed in top mutual funds since 2011.",
};

export function CalculatorsTabs() {
  const [active, setActive] = useState("sip");

  return (
    <div className="space-y-6">
      <TabBar tabs={tabs} value={active} onChange={setActive} fill className="max-w-2xl" />
      <p className="text-sm text-gold-light/60">{descriptions[active]}</p>

      <div className="pt-2">
        {active === "sip" && <SIPGrowthCalculator />}
        {active === "lumpsum" && <LumpsumCalculator />}
        {active === "swp" && <SWPCalculator />}
        {active === "goal" && <GoalReverseCalculator />}
        {active === "delay" && <DelayCalculator />}
        {active === "historical" && <HistoricalSWPTable />}
      </div>
    </div>
  );
}
