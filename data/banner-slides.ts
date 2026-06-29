import { Target, TrendingUp, ShieldCheck } from "lucide-react";
import type { BannerSlide } from "@/types";

/** Unsplash delivery params — high-res, modern format, edge-cropped.
   1920 is ample for a full-bleed background under a scrim, and lighter
   for Next's optimizer to fetch than the 2400 source (avoids upstream timeouts). */
const IMG = "?q=80&w=1920&auto=format&fit=crop";
const u = (id: string) => `https://images.unsplash.com/${id}${IMG}`;

export const bannerSlides: BannerSlide[] = [
  {
    title: "Your ₹10 Crore is {a plan, not a dream.}",
    subtitle:
      "A structured SIP roadmap built around your income, your age, and your goal — so wealth becomes a decision, not a gamble.",
    icon: Target,
    image: {
      src: u("photo-1460925895917-afdab827c52f"),
      alt: "A financial analytics dashboard on a laptop screen",
    },
    primaryCta: { label: "Calculate My ₹10 Crore Plan", href: "/calculators" },
    secondaryCta: { label: "See the Method", href: "/framework" },
    stats: [
      { label: "Target Wealth", value: "₹10 Crore" },
      { label: "Optimal Horizon", value: "15-20 Yrs" },
    ],
  },
  {
    title: "Every year you wait {costs you crores.}",
    subtitle:
      "Starting a ₹50,000 SIP at 30 instead of 35 can mean ₹3–4 crore more at retirement. The math is unforgiving — and unforgettable.",
    icon: TrendingUp,
    image: {
      src: u("photo-1579621970795-87facc2f976d"),
      alt: "A young plant sprouting from a jar of coins, symbolising growth",
    },
    primaryCta: { label: "See the Delay Cost", href: "/calculators" },
    secondaryCta: { label: "Read Member Stories", href: "/stories" },
    stats: [
      { label: "Delay Cost (5 Yrs)", value: "₹3.6 Crore" },
      { label: "Start Age Impact", value: "30 vs 35" },
      { label: "SIP Effort Required", value: "2x Extra" },
    ],
  },
  {
    title: "Don't build it {alone. Build it with us.}",
    subtitle:
      "340+ disciplined investors, AMFI-registered guidance, and behavioral coaching that keeps your SIP running through every market storm.",
    icon: ShieldCheck,
    image: {
      src: u("photo-1521737604893-d14cc237f11d"),
      alt: "A team collaborating around a table with laptops in warm daylight",
    },
    primaryCta: { label: "Book a Free Strategy Call", href: "/book" },
    secondaryCta: { label: "Explore the Community", href: "/community" },
    stats: [
      { label: "Active Members", value: "340+" },
      { label: "Guidance Quality", value: "AMFI Reg." },
      { label: "Asset Retention", value: "99.2%" },
    ],
  },
];
