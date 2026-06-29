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
    insight: "Your investable surplus is almost always larger than your bank balance suggests.",
    image: "/images/sections/pillar-income-expansion.png",
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
    image: "/images/sections/pillar-sip-discipline.png",
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
    image: "/images/sections/pillar-smart-allocation.png",
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
    image: "/images/sections/pillar-compounding-time.png",
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
    image: "/images/sections/pillar-behavioral-coaching.png",
  },
];

/** Milestone table for a ₹30,000/month SIP at 12.5% annualised. */
export const methodMilestones: { year: number; label: string; value: number; target?: boolean }[] =
  [
    { year: 5, label: "₹25 Lakh", value: 2500000 },
    { year: 10, label: "₹69 Lakh", value: 6900000 },
    { year: 15, label: "₹1.5 Crore", value: 15000000 },
    { year: 20, label: "₹2.9 Crore", value: 29000000 },
    { year: 25, label: "₹5.52 Crore", value: 55200000 },
    { year: 30, label: "₹10.2 Crore", value: 102000000, target: true },
  ];
