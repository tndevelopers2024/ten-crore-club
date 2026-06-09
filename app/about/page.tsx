import type { Metadata } from "next";
import { Clock, Brain, Calculator, ShieldCheck, BadgeCheck, Award } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Ten Crore Club exists: a wealth advisor on a mission to make sure smart people stop making the same expensive mistake — waiting.",
};

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
        eyebrow="About"
        title={
          <>
            I became a wealth advisor because I watched smart people make the same{" "}
            <span className="gold-text">expensive mistake.</span>
          </>
        }
      />

      <SectionWrapper>
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <BrandImage
              src={undefined /* /images/team/advisor.jpg */}
              alt="Founder, Ten Crore Club"
              aspect="3/4"
              bordered
              sizes="(min-width: 768px) 360px, 100vw"
              placeholderLabel="Founder portrait"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-2xl leading-relaxed text-gold-light/85 sm:text-[1.6rem]">
              Year after year, I met brilliant doctors, engineers, and founders who
              earned remarkably well — and had almost nothing to show for it. Not
              because they were careless. Because nobody ever gave them a system,
              and the cost of waiting stayed invisible until it was enormous. Ten
              Crore Club is my answer to that.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper>
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

      <SectionWrapper width="narrow">
        <Reveal>
          <Card featured className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <span className="flex items-center gap-2 text-gold">
                <ShieldCheck className="size-5" /> AMFI Registered MFD
              </span>
              <span className="flex items-center gap-2 text-gold">
                <Award className="size-5" /> ARN: XXXXX
              </span>
              <span className="flex items-center gap-2 text-gold">
                <BadgeCheck className="size-5" /> SEBI Compliant
              </span>
            </div>
          </Card>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">What we stand for</h2>
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

      <SectionWrapper width="narrow">
        <Reveal>
          <div className="gold-glow rounded-xl border border-gold/40 bg-ink-card p-8 text-center sm:p-10">
            <p className="font-display text-2xl italic leading-relaxed text-gold-light/90 sm:text-3xl">
              “My mission is simple: make sure that 10 years from now, you are not
              the person watching your peers count their crores while you wonder
              where it all went.”
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="mt-10 text-center">
          <CTAButton href="/book" size="lg">
            Book a Consultation
          </CTAButton>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
