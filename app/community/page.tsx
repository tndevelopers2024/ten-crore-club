import type { Metadata } from "next";
import {
  Stethoscope,
  Laptop,
  Briefcase,
  Globe,
  Building2,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";

export const metadata: Metadata = {
  title: "The ₹10 Crore Circle",
  description:
    "A private wealth community of doctors, IT professionals, founders, NRIs, and executives — all compounding toward ₹10 Crore together.",
};

const members = [
  { icon: Stethoscope, label: "Doctors & Healthcare Professionals", image: "/images/community/doctor.jpg" },
  { icon: Laptop, label: "IT Professionals & Software Engineers", image: "/images/community/it.jpg" },
  { icon: Briefcase, label: "Business Owners & Entrepreneurs", image: "/images/community/entrepreneur.jpg" },
  { icon: Globe, label: "NRIs Building India-Linked Wealth", image: "/images/community/nri.jpg" },
  { icon: Building2, label: "Senior Corporate Executives", image: "/images/community/executive.jpg" },
];

const free = [
  "Weekly curated wealth newsletter",
  "Monthly live webinar (compounding, allocation, wealth psychology)",
  "Content library: articles, case studies, the Ten Crore Method™ guide",
  "Community forum",
];

const inner = [
  "Everything in the Free Tier",
  "Quarterly 1-on-1 strategy review",
  "Personal goal dashboard (track your ₹10 Crore milestone)",
  "Behavioral coaching sessions during corrections",
  "Exclusive masterclasses with senior financial professionals",
  "Private network of 340+ verified HNI members",
  "Priority access to new tools and research",
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="The ₹10 Crore Circle"
        title={
          <>
            Wealth is built faster when you&apos;re surrounded by people{" "}
            <span className="gold-text">building it too.</span>
          </>
        }
      />

      <SectionWrapper>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <BrandImage
              src="/images/community/networking.jpg"
              alt="Community Networking"
              aspect="4/3"
              bordered
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="gold-glow flex h-full flex-col justify-center rounded-xl border border-gold/40 bg-ink-card p-8 text-center">
              <p className="font-display text-xl italic leading-relaxed text-gold-light/85 sm:text-2xl">
                Research shows that your financial outcomes are heavily influenced by
                your peer group. The ₹10 Crore Circle is designed to give you the
                right one.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Reveal className="mb-8 text-center">
          <h2 className="text-display-md text-cream">Who&apos;s inside</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.label} delay={i * 80}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-xl border border-line bg-ink-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5">
                  <div className="relative">
                    <div className="overflow-hidden rounded-full border border-gold/30 p-1">
                      <BrandImage
                        src={m.image}
                        alt={m.label}
                        aspect="1/1"
                        rounded="full"
                        className="size-24 sm:size-28"
                        imgClassName="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-full border border-line bg-ink-card shadow-sm">
                      <Icon className="size-4.5 text-gold" />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-1 flex-col justify-start">
                    <p className="font-display text-[15px] leading-snug text-cream">{m.label}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-xl border border-line bg-ink-card p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light/60">
                Free Tier
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">The Foundation</h3>
              <ul className="mt-6 space-y-3">
                {free.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gold-light/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-light/50" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <CTAButton href="https://chat.whatsapp.com/learning-community" variant="secondary">
                  Join Learning Group (WhatsApp)
                </CTAButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-xl border border-gold/50 bg-ink-card p-8 shadow-[0_0_50px_-24px_rgba(213,160,74,0.7)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Inner Circle
                </p>
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-0.5 text-xs text-gold">
                  Premium
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl text-cream">
                The Accelerator
              </h3>
              <ul className="mt-6 space-y-3">
                {inner.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 flex flex-col gap-3">
                <CTAButton href="/book">Apply for Inner Circle</CTAButton>
                <CTAButton href="https://chat.whatsapp.com/premium-community" variant="secondary">
                  Join Premium Group (WhatsApp)
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      <SectionWrapper width="narrow">
        <Reveal>
          <p className="text-center font-display text-2xl leading-relaxed text-gold-light/85 sm:text-3xl">
            The members inside this community right now are people exactly like
            you. Same background. Same income. Same city.{" "}
            <span className="gold-text">The difference is — they decided.</span>{" "}
            Every month you&apos;re outside is another month they compound and you
            don&apos;t.
          </p>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
