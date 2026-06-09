import type { BlogPost } from "@/types";

export const categoryLabels: Record<string, string> = {
  all: "All",
  psychology: "Wealth Psychology",
  education: "SIP Education",
  journey: "Real Journeys",
  macro: "India Opportunity",
};

const lorem = (topic: string): string[] => [
  `${topic} It is one of the most consequential — and least discussed — forces in personal finance. We see it play out in every portfolio we review, and the pattern is remarkably consistent.`,
  "## The pattern nobody talks about",
  "The investors who build serious wealth are rarely the ones with the highest incomes or the sharpest market calls. They are the ones who removed emotion from the equation and let arithmetic do the work — month after month, year after year.",
  "Consider two people with identical salaries. One starts a disciplined SIP at 30 and never stops. The other waits, dabbles, exits during every correction, and re-enters at the top. Fifteen years later their portfolios are not slightly different — they are an order of magnitude apart.",
  "## What the numbers actually say",
  "Historical 15-year SIP returns in Indian equity funds have clustered in the 14–16% CAGR range. At those rates, the difference between starting today and starting next year is not a rounding error — it can be the price of a flat.",
  "Past performance is not indicative of future returns, and no outcome is guaranteed. But the mathematics of compounding is not an opinion. The longer your money stays invested, the more disproportionately time rewards you.",
  "## The takeaway",
  "You cannot control the market. You can control three things: how much you invest, how consistently you invest, and how long you stay invested. Master those three and the ₹10 Crore number stops being a fantasy and becomes an arithmetic outcome.",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-smart-people-make-terrible-investment-decisions",
    title: "Why smart people make terrible investment decisions",
    excerpt:
      "Intelligence is no defence against the behavioural traps that quietly destroy portfolios. Here is what actually goes wrong.",
    category: "psychology",
    readTime: 6,
    publishDate: "2025-11-18",
    author: "Ten Crore Club",
    featured: true,
    // coverImage: "/images/blog/<slug>.jpg" (local) or a remote URL — shows a branded placeholder until set
    body: lorem(
      "Smart people make terrible investment decisions for the same reason brilliant drivers still crash: confidence is not the same as control.",
    ),
  },
  {
    slug: "the-one-emotion-that-destroyed-more-wealth-than-any-crash",
    title:
      "The one emotion that has destroyed more wealth than any market crash",
    excerpt:
      "It isn't fear. It isn't greed. It's the quiet, comfortable feeling that you can always start later.",
    category: "psychology",
    readTime: 5,
    publishDate: "2025-11-04",
    author: "Ten Crore Club",
    body: lorem(
      "Procrastination has quietly vaporised more rupees than every crash in market history combined.",
    ),
  },
  {
    slug: "what-panic-selling-really-costs-you",
    title: "What panic selling really costs you (the numbers will shock you)",
    excerpt:
      "Selling during a 30% drawdown feels like protecting your money. The data says it's the most expensive instinct you have.",
    category: "psychology",
    readTime: 7,
    publishDate: "2025-10-22",
    author: "Ten Crore Club",
    body: lorem(
      "Panic selling locks in a temporary loss and converts it into a permanent one.",
    ),
  },
  {
    slug: "how-compounding-works-the-mathematical-proof",
    title: "How compounding works: the mathematical proof that patience pays",
    excerpt:
      "A plain-English walkthrough of the formula that turns ₹15,000 a month into ₹10 Crore — and why the last decade does most of the work.",
    category: "education",
    readTime: 8,
    publishDate: "2025-11-12",
    author: "Ten Crore Club",
    body: lorem(
      "Compounding is the only force in finance that rewards you simply for refusing to interrupt it.",
    ),
  },
  {
    slug: "sip-myths-every-indian-investor-still-believes",
    title: "SIP myths every Indian investor still believes",
    excerpt:
      "“I need a lump sum first.” “I'll start when the market dips.” “SIPs are only for small investors.” Let's bury all three.",
    category: "education",
    readTime: 6,
    publishDate: "2025-10-30",
    author: "Ten Crore Club",
    body: lorem("Most SIP myths are just procrastination wearing a disguise."),
  },
  {
    slug: "what-is-swp-and-why-every-retiree-needs-one",
    title: "What is SWP and why every retiree needs one",
    excerpt:
      "A Systematic Withdrawal Plan can turn a corpus into a monthly paycheck that outlives you. Here's the mechanics.",
    category: "education",
    readTime: 6,
    publishDate: "2025-10-15",
    author: "Ten Crore Club",
    body: lorem(
      "An SWP is the retirement engine almost nobody sets up until it's too late.",
    ),
  },
  {
    slug: "build-10-crore-on-60000-monthly-salary",
    title:
      "How to build a ₹10 Crore portfolio on a ₹60,000 monthly salary",
    excerpt:
      "₹10 Crore is not reserved for the ultra-rich. With the right horizon and step-ups, it's an arithmetic outcome.",
    category: "education",
    readTime: 9,
    publishDate: "2025-09-28",
    author: "Ten Crore Club",
    body: lorem(
      "₹10 Crore on a middle-class salary is not a fantasy — it is a spreadsheet.",
    ),
  },
  {
    slug: "32-year-old-it-professional-targeting-10-crore",
    title:
      "How a 32-year-old IT professional is targeting ₹10 Crore by 50",
    excerpt:
      "A real plan, real numbers, and the three decisions that put a Pune engineer on track for a nine-figure corpus.",
    category: "journey",
    readTime: 7,
    publishDate: "2025-11-08",
    author: "Ten Crore Club",
    body: lorem(
      "The difference between this engineer and his peers wasn't income. It was a start date.",
    ),
  },
  {
    slug: "age-42-zero-invested-is-it-too-late",
    title: "Age 42, ₹0 invested, ₹25 Lakh salary — is it too late?",
    excerpt:
      "The honest answer, with the actual maths. Spoiler: late is not the same as never.",
    category: "journey",
    readTime: 6,
    publishDate: "2025-10-10",
    author: "Ten Crore Club",
    body: lorem(
      "Starting at 42 is not ideal. It is also dramatically better than starting at 43.",
    ),
  },
  {
    slug: "members-who-stayed-invested-through-covid",
    title: "What happened to members who stayed invested through COVID crash",
    excerpt:
      "March 2020 felt like the end. For the investors who didn't blink, it became the best buying window of the decade.",
    category: "journey",
    readTime: 5,
    publishDate: "2025-09-15",
    author: "Ten Crore Club",
    body: lorem(
      "The members who did nothing in March 2020 are the ones thanking us today.",
    ),
  },
  {
    slug: "india-next-20-years-more-crorepatis",
    title:
      "Why India's next 20 years will create more crorepatis than the last 50",
    excerpt:
      "Demographics, formalisation, and equity participation are converging into the largest wealth-creation window in Indian history.",
    category: "macro",
    readTime: 8,
    publishDate: "2025-11-15",
    author: "Ten Crore Club",
    body: lorem(
      "India is standing at the start of a compounding decade unlike anything in its history.",
    ),
  },
  {
    slug: "sensex-at-300000-what-history-says",
    title:
      "The Sensex at 3,00,000: what history says about India's next bull run",
    excerpt:
      "From 1,000 in 1990 to 80,000+ in 2024. We map the runway to the next milestone — and what could derail it.",
    category: "macro",
    readTime: 7,
    publishDate: "2025-10-18",
    author: "Ten Crore Club",
    body: lorem(
      "Every previous Sensex milestone felt impossible right up until it became history.",
    ),
  },
  {
    slug: "why-nris-are-rushing-to-indian-mutual-funds",
    title: "Why NRIs are rushing to invest in Indian mutual funds right now",
    excerpt:
      "A weakening rupee, a strengthening economy, and FEMA-compliant routes are pulling NRI capital home.",
    category: "macro",
    readTime: 6,
    publishDate: "2025-09-20",
    author: "Ten Crore Club",
    body: lorem(
      "For NRIs, Indian equity is no longer a sentimental allocation — it's a strategic one.",
    ),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return blogPosts.slice(0, count);
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, count);
}
