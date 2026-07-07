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
      src: "/images/banners/banner-image-3-by-10crore.aviff",
      alt: "Elegant modern wealth manager's desk",
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
      src: "/images/banners/banner-image-1-by-10crore.avif",
      alt: "Macro photography of an elegant gold pocket watch on dark slate",
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
      src: "/images/banners/banner-image-2-by-10crore.avif",
      alt: "Empty ultra-luxury private boardroom with dark wood and leather",
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
