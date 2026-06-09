"use client";

import { useState } from "react";
import { TabBar } from "@/components/ui/TabBar";
import { SIPGrowthCalculator } from "./SIPGrowthCalculator";
import { SWPCalculator } from "./SWPCalculator";
import { GoalReverseCalculator } from "./GoalReverseCalculator";
import { DelayCalculator } from "./DelayCalculator";

const tabs = [
  { value: "sip", label: "SIP Growth" },
  { value: "swp", label: "Retirement (SWP)" },
  { value: "goal", label: "Goal Planner" },
  { value: "delay", label: "Delay Cost" },
];

const descriptions: Record<string, string> = {
  sip: "See how a monthly SIP — with optional annual step-ups — compounds over time.",
  swp: "Find out how long a corpus lasts, or how much you need for a lifetime of income.",
  goal: "Pick your number. We'll tell you the exact monthly SIP it takes to get there.",
  delay: "The most important calculator here. What does one year of waiting really cost?",
};

export function CalculatorsTabs() {
  const [active, setActive] = useState("sip");

  return (
    <div className="space-y-6">
      <TabBar tabs={tabs} value={active} onChange={setActive} fill className="max-w-2xl" />
      <p className="text-sm text-gold-light/60">{descriptions[active]}</p>

      <div className="pt-2">
        {active === "sip" && <SIPGrowthCalculator />}
        {active === "swp" && <SWPCalculator />}
        {active === "goal" && <GoalReverseCalculator />}
        {active === "delay" && <DelayCalculator />}
      </div>
    </div>
  );
}
