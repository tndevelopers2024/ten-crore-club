import type { Metadata } from "next";
import {
  Clock,
  Brain,
  Calculator,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Target,
  Compass,
  TrendingUp,
  Trophy,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa6";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";
import { Card } from "@/components/ui/Card";
import { BlueprintCTA } from "@/components/forms/BlueprintCTA";

const socialChannels = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-pandyan-61778124a",
    colorClass: "border-[#0A66C2]/60 text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] shadow-[0_2px_12px_rgba(10,102,194,0.2)]",
    iconColor: "text-[#0A66C2]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/tencroreclub",
    colorClass: "border-[#E4405F]/60 text-[#E4405F] bg-[#E4405F]/10 hover:bg-[#E4405F]/20 hover:border-[#E4405F] shadow-[0_2px_12px_rgba(228,64,95,0.2)]",
    iconColor: "text-[#E4405F]",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://youtube.com/@tencroreclub",
    colorClass: "border-[#FF0000]/60 text-[#FF0000] bg-[#FF0000]/10 hover:bg-[#FF0000]/20 hover:border-[#FF0000] shadow-[0_2px_12px_rgba(255,0,0,0.2)]",
    iconColor: "text-[#FF0000]",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/919840441135?text=Hi%2C%20I%20have%20an%20enquiry%20regarding%20Ten%20Crore%20Club",
    colorClass: "border-[#25D366]/60 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 hover:border-[#25D366] shadow-[0_2px_12px_rgba(37,211,102,0.2)]",
    iconColor: "text-[#25D366]",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    href: "https://twitter.com/tencroreclub",
    colorClass: "border-cream/60 text-cream bg-cream/10 hover:bg-cream/20 hover:border-cream shadow-[0_2px_12px_rgba(255,255,255,0.15)]",
    iconColor: "text-cream",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/people/Ten-Crore-Club/61590642871004/",
    colorClass: "border-[#1877F2]/60 text-[#1877F2] bg-[#1877F2]/10 hover:bg-[#1877F2]/20 hover:border-[#1877F2] shadow-[0_2px_12px_rgba(24,119,242,0.2)]",
    iconColor: "text-[#1877F2]",
  },
];

export const metadata: Metadata = {
  title: "About Me | Alex Pandyan – TenCroreClub",
  description:
    "I’m Alex Pandyan, founder of TenCroreClub, and I help business owners and professionals build structured, long-term wealth through disciplined investing.",
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
        eyebrow="About Me – TenCroreClub"
        title={
          <>
            <span className="block text-sm font-semibold uppercase tracking-widest text-gold/90 mb-3 sm:text-base">
              I work with a simple belief:
            </span>
            Earning well is not enough — your money must{" "}
            <span className="gold-text">work as hard as you do.</span>
          </>
        }
        subtitle="I’m Alex Pandyan, founder of TenCroreClub, and I help business owners and professionals build structured, long-term wealth through disciplined investing."
      />

      {/* Founder Story & Introduction */}
      <SectionWrapper>
        <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Unified Founder Profile Card */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-gold/30 bg-ink-card shadow-[0_16px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-gold/50">
              <div className="relative group overflow-hidden">
                <div className="pointer-events-none absolute -inset-1.5 rounded-t-3xl bg-gradient-to-b from-gold/20 via-transparent to-transparent opacity-70 blur-md" />
                <BrandImage
                  src="/images/home/image-1-by-ten-crore-club.avif"
                  alt="Alex Pandyan - The Wealth Architect & Founder, TenCroreClub"
                  aspect="3/4"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 380px, 100vw"
                  placeholderLabel="Alex Pandyan"
                />
              </div>

              <div className="p-6 text-center space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-cream tracking-tight">
                    Alex Pandyan
                  </h3>
                  <p className="mt-1 font-display text-base font-bold tracking-wider uppercase text-red-vivid">
                    The Wealth Architect
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="space-y-2.5 text-xs font-medium">
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/10 py-2.5 px-4 font-bold text-gold">
                    <Compass className="size-4 shrink-0 text-gold" />
                    <span>Founder – TenCroreClub</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-line bg-ink-elevated/70 py-2.5 px-4 text-gold-light/90">
                    <ShieldCheck className="size-4 shrink-0 text-gold" />
                    <span>AMFI Registered MFD</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-line bg-ink-elevated/70 py-2.5 px-4 text-gold-light/90">
                    <BadgeCheck className="size-4 shrink-0 text-gold" />
                    <span>SEBI Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Bio & Structured Social Links */}
          <Reveal delay={120}>
            <div className="space-y-7">
              <p className="text-xl leading-relaxed text-gold-light/90 sm:text-2xl font-light">
                Over the years, I’ve seen a common pattern — successful individuals generating strong income, yet lacking a clear roadmap to turn that income into meaningful wealth.
              </p>
              <p className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                That’s where I come in.
              </p>
              <p className="text-base leading-relaxed text-gold-light/80 sm:text-lg">
                Instead of chasing trends or short-term gains, my approach focuses on:
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {approachPillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-ink-card/70 p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/10"
                    >
                      <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-medium text-cream text-sm leading-snug">{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <p className="pt-2 text-base leading-relaxed text-gold-light/80 sm:text-lg">
                Today, I manage a growing portfolio of clients with a focus on consistent compounding and long-term wealth creation, helping them move closer to a significant milestone:
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-gold/50 bg-gradient-to-r from-gold/15 via-ink-card to-gold/10 p-6 text-center shadow-[0_0_40px_rgba(213,160,74,0.15)] sm:p-8">
                <p className="font-display text-xl font-bold tracking-wide text-cream sm:text-2xl flex items-center justify-center gap-2.5">
                  <Sparkles className="size-6 shrink-0 text-gold" />
                  <span>Building a ₹10 Crore portfolio with confidence and structure</span>
                </p>
              </div>

              {/* Structured Social Media Grid */}
              <div className="rounded-2xl border border-gold/25 bg-ink-card/90 p-5 sm:p-6 shadow-md backdrop-blur-xl">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                  <Sparkles className="size-3.5 text-gold" />
                  <span>Connect Across Social Media</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialChannels.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2.5 rounded-xl border p-3 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${item.colorClass}`}
                      >
                        <Icon className={`size-4 shrink-0 ${item.iconColor}`} />
                        <span className="truncate">{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* What Makes My Approach Different */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream flex items-center justify-center gap-3">
            <Sparkles className="size-7 text-gold" />
            <span>What Makes My Approach Different</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gold-light/80">
            I don’t believe in one-size-fits-all advice.
          </p>
          <GoldDivider className="mt-6" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col justify-between border-gold/25 bg-gradient-to-br from-ink-card via-ink to-ink-card p-8 sm:p-10 rounded-3xl">
              <div>
                <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold shadow-[0_2px_10px_rgba(213,160,74,0.15)]">
                  Personalized Roadmap
                </span>
                <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">Every client journey is built around:</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <span className="size-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(213,160,74,0.8)]" />
                    <span>Their business cash flows</span>
                  </li>
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <span className="size-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(213,160,74,0.8)]" />
                    <span>Their risk appetite</span>
                  </li>
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <span className="size-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(213,160,74,0.8)]" />
                    <span>Their long-term life goals</span>
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="flex h-full flex-col justify-between border-gold/25 bg-gradient-to-br from-ink-card via-ink to-ink-card p-8 sm:p-10 rounded-3xl">
              <div>
                <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold shadow-[0_2px_10px_rgba(213,160,74,0.15)]">
                  Disciplined Execution
                </span>
                <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">Through a structured system, I ensure that your investments are:</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span>Purpose-driven</span>
                  </li>
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span>Well-allocated</span>
                  </li>
                  <li className="flex items-center gap-3.5 text-cream font-medium text-base sm:text-lg">
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    <span>Continuously optimized</span>
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-8">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 via-ink-card to-gold/10 p-6 text-center shadow-[0_0_30px_rgba(213,160,74,0.1)] backdrop-blur-md">
            <p className="font-display text-xl italic text-gold-light/90 sm:text-2xl">
              Because real wealth isn’t built in months — it’s built through years of disciplined decisions.
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper>
        <Reveal className="mb-10 text-center">
          <h2 className="text-display-md text-cream">Mission & Vision</h2>
          <GoldDivider className="mt-6" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-gold/25 bg-gradient-to-br from-ink-card via-ink to-ink-card p-8 sm:p-10 rounded-3xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/15 text-gold shadow-[0_4px_20px_rgba(213,160,74,0.2)]">
                  <Trophy className="size-7" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gold">Mission</h3>
              </div>
              <p className="text-lg font-semibold leading-relaxed text-cream sm:text-xl">
                To help 1,000 business owners and professionals build a ₹10 Crore portfolio through disciplined, structured investing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gold-light/80">
                I aim to simplify wealth creation and make it accessible, practical, and achievable — without unnecessary complexity or noise.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card className="h-full border-gold/25 bg-gradient-to-br from-ink-card via-ink to-ink-card p-8 sm:p-10 rounded-3xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/15 text-gold shadow-[0_4px_20px_rgba(213,160,74,0.2)]">
                  <TrendingUp className="size-7" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gold">Vision</h3>
              </div>
              <p className="text-lg font-semibold leading-relaxed text-cream sm:text-xl">
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
        <div className="grid gap-6 md:grid-cols-3">
          {philosophy.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 110}>
                <Card className="h-full border-gold/20 bg-ink-card/80 p-8 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold mb-5">
                    <Icon className="size-6 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gold-light/80">
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
              <div className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-ink-card/70 p-6 backdrop-blur-md transition-all hover:border-gold/40 hover:bg-gold/5">
                <span className="size-2.5 shrink-0 rotate-45 bg-gold shadow-[0_0_10px_rgba(213,160,74,0.8)]" />
                <p className="font-medium text-cream text-base">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* A Personal Note */}
      <SectionWrapper width="narrow">
        <Reveal>
          <Card className="border-gold/40 bg-gradient-to-b from-ink-card via-ink to-ink-card p-8 sm:p-12 rounded-3xl shadow-[0_0_60px_rgba(213,160,74,0.15)]">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-[0_0_20px_rgba(213,160,74,0.25)]">
                <HeartHandshake className="size-8" />
              </div>
            </div>
            <h2 className="text-center font-display text-3xl font-bold text-cream sm:text-4xl">
              A Personal Note
            </h2>
            <GoldDivider className="mt-4 mb-8" />
            <div className="space-y-6 text-center text-lg leading-relaxed text-gold-light/85 sm:text-xl">
              <p>
                I believe wealth management is not just about numbers — it’s about trust, consistency, and long-term relationships.
              </p>
              <p>
                That’s why I work with a limited number of clients, ensuring every individual gets the attention and strategic guidance they deserve.
              </p>
              <p className="pt-2 font-semibold text-cream">
                If you’re someone who is serious about building real wealth — not just returns —
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/40 bg-gold/15 px-8 py-3.5 font-display text-xl font-bold text-gold shadow-[0_0_25px_rgba(213,160,74,0.2)] sm:text-2xl">
                  <CheckCircle2 className="size-6 shrink-0 text-gold" />
                  <span>You’re in the right place.</span>
                </span>
              </div>
            </div>
          </Card>
        </Reveal>
      </SectionWrapper>

      {/* Closing CTA with Highlighted Blueprint Input Field */}
      <SectionWrapper width="narrow">
        <Reveal>
          <div className="text-center mb-6">
            <p className="font-display text-2xl font-bold text-gold sm:text-3xl flex items-center justify-center gap-2.5">
              <Sparkles className="size-6 shrink-0 text-gold" />
              <span>Start your journey with the ₹10 Crore Blueprint.</span>
            </p>
          </div>
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

