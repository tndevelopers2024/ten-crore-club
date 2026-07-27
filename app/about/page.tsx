import type { Metadata } from "next";
import {
  Clock,
  Brain,
  Calculator,
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle2,
  Target,
  Compass,
  TrendingUp,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";
import { Card } from "@/components/ui/Card";
import { BlueprintCTA } from "@/components/forms/BlueprintCTA";

export const metadata: Metadata = {
  title: "About Me | Alex Pandyan – Wealth Architect & Founder",
  description:
    "Alex Pandyan is a Wealth Architect & founder of TenCroreClub, helping business owners and professionals build structured, long-term wealth through disciplined investing.",
};

const approachPillars = [
  {
    icon: Target,
    title: "Clarity over confusion",
  },
  {
    icon: Compass,
    title: "Strategy over speculation",
  },
  {
    icon: ShieldCheck,
    title: "Discipline over emotion",
  },
];

const philosophy = [
  {
    icon: Clock,
    title: "Time > Timing",
    body: "Time in the market always beats timing the market. Nobody rings a bell at the bottom.",
  },
  {
    icon: Brain,
    title: "Behavior First",
    body: "Behavior is the single biggest determinant of returns — more than fund selection, more than allocation.",
  },
  {
    icon: Calculator,
    title: "Arithmetic of Discipline",
    body: "₹10 Crore is not a fantasy. It is an arithmetic outcome of the right amount, invested for the right time.",
  },
];

const values = [
  "Transparency over performance promises",
  "Education over product pushing",
  "Long-term relationships over transactional advice",
  "Behavioral coaching over market predictions",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Wealth Architect & Founder – TenCroreClub"
        title={
          <>
            Earning well is not enough — your money must{" "}
            <span className="gold-text">work as hard as you do.</span>
          </>
        }
        subtitle="I’m Alex Pandyan, Wealth Architect & founder of TenCroreClub. I help business owners and high-performing professionals design precision wealth blueprints and compound long-term capital."
      />

      {/* Founder Story & Introduction */}
      <SectionWrapper>
        <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              <BrandImage
                src="/images/home/image-1-by-ten-crore-club.avif"
                alt="Alex Pandyan - Wealth Architect & Founder, Ten Crore Club"
                aspect="3/4"
                bordered
                sizes="(min-width: 768px) 360px, 100vw"
                placeholderLabel="Alex Pandyan"
              />
              <Card className="text-center">
                <div className="flex flex-col gap-3 text-sm">
                  <span className="flex items-center justify-center gap-2 font-bold text-gold">
                    <Compass className="size-5 shrink-0 text-gold" /> Wealth Architect & Founder
                  </span>
                  <span className="flex items-center justify-center gap-2 font-medium text-gold-light/90">
                    <ShieldCheck className="size-5 shrink-0 text-gold" /> AMFI Registered MFD
                  </span>
                  <span className="flex items-center justify-center gap-2 font-medium text-gold-light/90">
                    <BadgeCheck className="size-5 shrink-0 text-gold" /> SEBI Compliant
                  </span>
                </div>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gold-light/90 sm:text-2xl">
                Over the years as a Wealth Architect, I’ve seen a common pattern — successful individuals generating strong income, yet lacking an engineered roadmap to turn that income into enduring, multi-generational wealth.
              </p>
              <p className="font-display text-2xl font-medium text-cream sm:text-3xl">
                That’s where I come in.
              </p>
              <p className="text-base leading-relaxed text-gold-light/80 sm:text-lg">
                Instead of chasing market trends or speculative tips, my work as a Wealth Architect focuses on designing structural clarity:
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {approachPillars.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex flex-col items-center justify-center rounded-lg border border-gold/20 bg-ink-card p-4 text-center"
                    >
                      <Icon className="mb-2 size-6 text-gold" />
                      <span className="font-medium text-cream">{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <p className="pt-2 text-base leading-relaxed text-gold-light/80 sm:text-lg">
                Today, I manage a growing portfolio of clients with a focus on consistent compounding and long-term wealth creation, helping them move closer to a significant milestone:
              </p>

              <div className="gold-glow rounded-xl border border-gold/40 bg-gradient-to-r from-ink-card via-ink to-ink-card p-6 text-center sm:p-7">
                <p className="font-display text-xl font-semibold tracking-wide text-cream sm:text-2xl">
                  👉 Building a ₹10 Crore portfolio with confidence and structure
                </p>
              </div>

              <div className="pt-4">
                <CTAButton href="https://www.linkedin.com/in/alex-pandyan-61778124a" variant="secondary">
                  Connect with Alex Pandyan on LinkedIn
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* What Makes My Approach Different */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">What Makes My Approach Different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gold-light/80">
            I don’t believe in one-size-fits-all advice.
          </p>
          <GoldDivider className="mt-6" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col justify-between border-gold/20 bg-gradient-to-br from-ink-card to-ink p-8">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Personalized Roadmap
                </span>
                <h3 className="font-display text-2xl text-cream">Built Around Your Reality</h3>
                <p className="mt-3 text-base text-gold-light/80">
                  Every client journey is built around:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3 text-cream">
                    <span className="size-2 shrink-0 rounded-full bg-gold" />
                    <span>Their business cash flows</span>
                  </li>
                  <li className="flex items-center gap-3 text-cream">
                    <span className="size-2 shrink-0 rounded-full bg-gold" />
                    <span>Their risk appetite</span>
                  </li>
                  <li className="flex items-center gap-3 text-cream">
                    <span className="size-2 shrink-0 rounded-full bg-gold" />
                    <span>Their long-term life goals</span>
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="flex h-full flex-col justify-between border-gold/20 bg-gradient-to-br from-ink-card to-ink p-8">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Disciplined Execution
                </span>
                <h3 className="font-display text-2xl text-cream">A Structured System</h3>
                <p className="mt-3 text-base text-gold-light/80">
                  Through a structured system, I ensure that your investments are:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3 text-cream">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span className="font-medium">Purpose-driven</span>
                  </li>
                  <li className="flex items-center gap-3 text-cream">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span className="font-medium">Well-allocated</span>
                  </li>
                  <li className="flex items-center gap-3 text-cream">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span className="font-medium">Continuously optimized</span>
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-8">
          <div className="rounded-xl border border-line bg-ink-card/60 p-6 text-center">
            <p className="font-display text-xl italic text-gold-light/90 sm:text-2xl">
              Because real wealth isn’t built in months — it’s built through years of disciplined decisions.
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">Vision & Mission</h2>
          <GoldDivider className="mt-6" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-gold/20 bg-gradient-to-br from-ink-card to-ink p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Trophy className="size-6" />
                </div>
                <h3 className="font-display text-2xl text-gold">Mission</h3>
              </div>
              <p className="text-lg font-medium leading-relaxed text-cream">
                To help 1,000 business owners and professionals build a ₹10 Crore portfolio through disciplined, structured investing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gold-light/80">
                I aim to simplify wealth creation and make it accessible, practical, and achievable — without unnecessary complexity or noise.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className="h-full border-gold/20 bg-gradient-to-br from-ink-card to-ink p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="font-display text-2xl text-gold">Vision</h3>
              </div>
              <p className="text-lg font-medium leading-relaxed text-cream">
                To build India’s most trusted community of serious investors — the TenCroreClub — where wealth creation is driven by clarity, discipline, and long-term thinking.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gold-light/80">
                A space where individuals don’t just invest… they understand, grow, and stay committed to their financial journey.
              </p>
            </Card>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Our Philosophy */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">The Philosophy of Compounding</h2>
          <GoldDivider className="mt-6" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {philosophy.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 110}>
                <Card className="h-full">
                  <Icon className="size-7 text-gold" />
                  <h3 className="mt-4 font-display text-2xl text-cream">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gold-light/70">
                    {p.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* What we stand for */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">What We Stand For</h2>
          <GoldDivider className="mt-6" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 90}>
              <div className="flex items-start gap-3 rounded-lg border border-line bg-ink-card p-5">
                <span className="mt-1 size-2 shrink-0 rotate-45 bg-gold" />
                <p className="text-cream">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* A Personal Note */}
      <SectionWrapper width="narrow">
        <Reveal>
          <Card className="border-gold/30 bg-gradient-to-b from-ink-card via-ink to-ink-card p-8 sm:p-12">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                <HeartHandshake className="size-7" />
              </div>
            </div>
            <h2 className="text-center font-display text-3xl text-cream sm:text-4xl">
              🤝 A Personal Note
            </h2>
            <GoldDivider className="mt-4 mb-8" />
            <div className="space-y-6 text-center text-lg leading-relaxed text-gold-light/85 sm:text-xl">
              <p>
                I believe wealth management is not just about numbers — it’s about trust, consistency, and long-term relationships.
              </p>
              <p>
                That’s why I work with a limited number of clients, ensuring every individual gets the attention and strategic guidance they deserve.
              </p>
              <p className="pt-2 font-medium text-cream">
                If you’re someone who is serious about building real wealth — not just returns —
              </p>
              <div className="pt-2">
                <span className="inline-block rounded-xl border border-gold/40 bg-gold/10 px-6 py-3 font-display text-xl font-bold text-gold sm:text-2xl">
                  👉 You’re in the right place.
                </span>
              </div>
            </div>
          </Card>
        </Reveal>
      </SectionWrapper>

      {/* Closing CTA with Highlighted Blueprint Input Field */}
      <SectionWrapper width="narrow">
        <Reveal>
          <BlueprintCTA />
        </Reveal>
        <Reveal delay={120} className="mt-10 text-center">
          <p className="mb-4 text-sm text-gold-light/60">
            Prefer to speak directly with an advisor?
          </p>
          <CTAButton href="/book" size="lg" variant="secondary">
            Book a 1-on-1 Consultation
          </CTAButton>
        </Reveal>
      </SectionWrapper>
    </>
  );
}

