"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { TrendingUp, Coins, Wallet, Target, Clock, History, Sparkles } from "lucide-react";
import { TabBar } from "@/components/ui/TabBar";
import { SIPGrowthCalculator } from "./SIPGrowthCalculator";
import { LumpsumCalculator } from "./LumpsumCalculator";
import { SWPCalculator } from "./SWPCalculator";
import { GoalReverseCalculator } from "./GoalReverseCalculator";
import { DelayCalculator } from "./DelayCalculator";
import { HistoricalSWPTable } from "./HistoricalSWPTable";

const tabs = [
  { value: "sip", label: "SIP Growth", icon: TrendingUp },
  { value: "lumpsum", label: "Lumpsum", icon: Coins },
  { value: "swp", label: "SWP Income", icon: Wallet },
  { value: "goal", label: "Goal Planner", icon: Target },
  { value: "delay", label: "Delay Cost", icon: Clock },
  { value: "historical", label: "Historical Proof", icon: History },
];

const descriptions: Record<string, string> = {
  sip: "See how a monthly SIP — with optional annual step-ups — compounds over time.",
  lumpsum: "See how a one-time lumpsum investment grows over a specific horizon.",
  swp: "Find out how long a corpus lasts, or how much you need for a lifetime of income.",
  goal: "Pick your number. We'll tell you the exact monthly SIP it takes to get there.",
  delay: "The most important calculator here. What does one year of waiting really cost?",
  historical: "See how an actual ₹10 Crore lump sum with a ₹6L/month SWP performed in top mutual funds since 2011.",
};

function CalculatorsTabsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tabParam = searchParams.get("tab");
  const validTab = tabParam && tabs.some((t) => t.value === tabParam) ? tabParam : "sip";

  const [active, setActive] = useState(validTab);

  useEffect(() => {
    if (tabParam && tabs.some((t) => t.value === tabParam)) {
      setActive(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (val: string) => {
    setActive(val);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", val);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <TabBar tabs={tabs} value={active} onChange={handleTabChange} className="w-full max-w-5xl mx-auto" />

      {/* Styled Description Callout */}
      <div className="mx-auto max-w-5xl rounded-xl border border-gold/20 bg-ink-card/60 p-4 text-center backdrop-blur-md shadow-sm">
        <p className="text-xs sm:text-sm font-medium text-gold-light/90 flex items-center justify-center gap-2">
          <Sparkles className="size-4 text-gold shrink-0" />
          <span>{descriptions[active]}</span>
        </p>
      </div>

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

export function CalculatorsTabs() {
  return (
    <Suspense fallback={<div className="text-center py-8 text-gold-light/50">Loading calculators...</div>}>
      <CalculatorsTabsContent />
    </Suspense>
  );
}
