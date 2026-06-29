import { Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Badge } from "@/components/ui/Badge";
import { BrandImage } from "@/components/shared/BrandImage";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-0 pb-0 sm:px-8">
      {/* red radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 glow-pulse"
        
      />
      {/* noise */}
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <div className="text-center lg:text-left">
          <AnimateIn>
            <Badge variant="gold" className="mx-auto lg:mx-0">
              <Sparkles className="size-3.5" />
              Private Wealth Community · AMFI Registered ·
            </Badge>
          </AnimateIn>

          <AnimateIn delay={120}>
            <h1 className="mt-6 text-display-xl text-balance text-cream">
              While you&apos;re thinking about it,{" "}
              <span className="gold-shimmer">your peers are already building it.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gold-light/80 lg:mx-0">
              Ten Crore Club exists for one reason — to make sure you are not the
              only person in your circle who didn&apos;t build serious wealth.
            </p>
          </AnimateIn>

          <AnimateIn delay={360}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <CTAButton href="/calculators" size="lg">
                Calculate My ₹10 Crore Plan
              </CTAButton>
              <CTAButton href="/book" variant="secondary" size="lg" withArrow={false}>
                Book a Free Strategy Call
              </CTAButton>
            </div>
          </AnimateIn>

          <AnimateIn delay={480}>
            <TrustStrip className="mt-9 justify-center lg:justify-start" />
          </AnimateIn>
        </div>

        {/* Right — brand visual only */}
        <AnimateIn delay={300}>
          <BrandImage
            src="/images/sections/hero-membership-clean.png"
            alt="Ten Crore Club Premium Membership Card"
            aspect="1/1"
            bordered
            className="shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </AnimateIn>
      </div>
    </section>
  );
}
