import {
  Coins,
  ShieldCheck,
  Building2,
  Gem,
  Layers,
  Lock,
  HandCoins,
  Calculator,
  Receipt,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "mutual-funds",
    title: "Mutual Funds",
    icon: Coins,
    description:
      "Tailored equity and hybrid mutual fund portfolios constructed to capture long-term market upside while respecting your risk tolerances.",
    cta: "Invest in Mutual Funds",
  },
  {
    slug: "insurances",
    title: "Insurances",
    icon: ShieldCheck,
    description:
      "Protect your family's future and your hard-earned assets with term life, health, and property insurance plans tailored to your liability profile.",
    cta: "Get Covered",
  },
  {
    slug: "gift-city",
    title: "GIFT City Investments",
    icon: Building2,
    description:
      "Gain global investment access and tax efficiency through offshore funds, dollar-denominated accounts, and products routed through GIFT City IFSC.",
    cta: "Explore GIFT City",
  },
  {
    slug: "pms",
    title: "Portfolio Management Services (PMS)",
    icon: Gem,
    description:
      "Exclusive, concentrated equity portfolios managed by top-tier investment professionals for high-net-worth individuals aiming for alpha.",
    cta: "Access PMS",
  },
  {
    slug: "aif",
    title: "Alternative Investment Funds (AIF)",
    icon: Layers,
    description:
      "Diversify beyond traditional assets into private equity, venture capital, long-short strategies, and real estate via structured Category I, II, & III funds.",
    cta: "Explore AIFs",
  },
  {
    slug: "fixed-deposits",
    title: "Fixed Deposits",
    icon: Lock,
    description:
      "Secure, guaranteed returns on your emergency fund or short-term reserves through curated high-yield fixed deposit options from top banks.",
    cta: "Book a Fixed Deposit",
  },
  {
    slug: "loans",
    title: "Loans & Debt Solutions",
    icon: HandCoins,
    description:
      "Access capital efficiently with customized home loans, business loans, or loans against securities at the most competitive interest rates.",
    cta: "Apply for Loans",
  },
  {
    slug: "tax-auditing",
    title: "Tax Auditing & Planning",
    icon: Calculator,
    description:
      "Optimize your post-tax returns with tax filing, regulatory compliance, legal structure advisory, and comprehensive audit preparation.",
    cta: "Schedule Audit",
  },
  {
    slug: "bonds",
    title: "Bonds & Fixed Income",
    icon: Receipt,
    description:
      "Enhance portfolio stability with corporate bonds, government securities, state development loans, and high-quality structured debt instruments.",
    cta: "Invest in Bonds",
  },
];
