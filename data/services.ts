import {
  TrendingUp,
  Map,
  Sunset,
  GraduationCap,
  RefreshCw,
  Shield,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "sip-advisory",
    title: "SIP Advisory & Portfolio Construction",
    icon: TrendingUp,
    description:
      "Fund selection based on 5–10 year performance consistency, fund manager track record, expense ratio, and category suitability.",
    forWhom: [
      "First-time investors",
      "Scattered, unmanaged portfolios",
      "Anyone who wants one clean SIP plan",
    ],
    cta: "Learn More",
  },
  {
    slug: "wealth-roadmaps",
    title: "Wealth Creation Roadmaps",
    icon: Map,
    description:
      "A structured corpus plan mapped to your timeline and income — choose your destination and we engineer the route.",
    detail: "₹1 Crore Plan · ₹3 Crore Plan · ₹5 Crore Plan · ₹10 Crore Plan",
    cta: "Get My Roadmap",
  },
  {
    slug: "retirement-swp",
    title: "Retirement Planning (SWP Strategy)",
    icon: Sunset,
    description:
      "A Systematic Withdrawal Plan engineered for monthly income that never runs out — so your corpus outlives your retirement.",
    detail:
      "“₹3 Crore at 55 → how much monthly withdrawal, for how long?” We answer it precisely.",
    cta: "Plan My Retirement",
  },
  {
    slug: "child-education",
    title: "Child Education Planning",
    icon: GraduationCap,
    description:
      "Goal-mapped investing so the most important cheque you ever write is already funded — years before the admission letter.",
    detail: "India's top colleges will cost ₹40–80 Lakhs by 2035.",
    cta: "Secure My Child's Future",
  },
  {
    slug: "portfolio-review",
    title: "Portfolio Review & Rebalancing",
    icon: RefreshCw,
    description:
      "A full audit — fund-by-fund analysis, overlap detection, rebalancing recommendations, and tax-impact assessment.",
    cta: "Review My Portfolio",
  },
  {
    slug: "behavioral-coaching",
    title: "Behavioral Coaching & Accountability",
    icon: Shield,
    description:
      "The service no one else offers. Quarterly 1-on-1 calls that keep you invested when fear, FOMO, and noise try to derail you.",
    detail: "Because the biggest threat to your wealth is not the market. It's you.",
    cta: "Join the Accountability Program",
  },
];
