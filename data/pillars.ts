import { TrendingUp, Repeat, PieChart, Clock, Brain } from "lucide-react";
import type { Pillar } from "@/types";

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Income Expansion",
    icon: TrendingUp,
    short:
      "Find your true investable surplus. Most people underestimate how much they can invest by 30–40%.",
    detail: [
      "Before a single rupee is invested, we audit your income, expenses, and true savings rate.",
      "Most people can invest 30–40% more than they think — once we identify lifestyle leakages, EMI optimization opportunities, and tax-saving routes.",
    ],
    insight:
      "Your investable surplus is almost always larger than your bank balance suggests.",
  },
  {
    number: "02",
    title: "SIP Discipline",
    icon: Repeat,
    short:
      "Automated, consistent, emotionless. Your SIP runs whether markets are up 20% or down 30%.",
    detail: [
      "A SIP is only as powerful as your commitment to continuing it.",
      "We design SIPs around your income pattern — monthly salary, quarterly bonus, annual incentive — so you always invest the maximum possible without straining cash flow.",
    ],
    insight: "Consistency beats brilliance. The SIP that runs forever wins.",
  },
  {
    number: "03",
    title: "Smart Allocation",
    icon: PieChart,
    short:
      "Right funds. Right mix. Equity + debt + emergency buffer tuned to your age, income, and goal.",
    detail: [
      "Not all equity is the same. We build large cap for stability, flexi cap for growth, international for diversification, and debt for rebalancing.",
      "Quarterly rebalancing keeps the mix on target. Allocation evolves with your age and life stage.",
    ],
    insight: "Diversification is the only free lunch in investing. We serve it deliberately.",
  },
  {
    number: "04",
    title: "Compounding Time",
    icon: Clock,
    short:
      "10, 15, 20-year horizons. The longer you hold, the more time does the heavy lifting.",
    detail: [
      "Resisting the urge to redeem during market fear. Resisting the temptation to switch funds during underperformance. Resisting lifestyle inflation.",
      "Every year you stay invested, you move exponentially closer to your number.",
    ],
    insight: "Time in the market is the single greatest force in your favour.",
  },
  {
    number: "05",
    title: "Behavioral Coaching",
    icon: Brain,
    short:
      "The biggest threat to your wealth is not a market crash. It's you.",
    detail: [
      "When markets fall 20%, we send a coaching note — not a panic note. When a fund underperforms for two quarters, we explain the cycle.",
      "When your friend tells you to invest in a trending NFO, we give you the data to say no.",
    ],
    insight: "We don't just manage your portfolio. We manage the investor behind it.",
  },
];

/** Milestone table for a ₹15,000/month SIP at 12% annualised. */
export const methodMilestones: { year: number; label: string; value: number; target?: boolean }[] =
  [
    { year: 5, label: "₹12 Lakh", value: 1200000 },
    { year: 10, label: "₹35 Lakh", value: 3500000 },
    { year: 15, label: "₹1 Crore", value: 10000000 },
    { year: 20, label: "₹2.5 Crore", value: 25000000 },
    { year: 25, label: "₹5.8 Crore", value: 58000000 },
    { year: 30, label: "₹10.7 Crore", value: 107000000, target: true },
  ];
