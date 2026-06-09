import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { TrustStrip } from "@/components/shared/TrustStrip";

export function FinalCTASection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="cta-radial relative overflow-hidden rounded-2xl border border-gold/40 p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-3xl text-display-lg text-balance text-cream">
            Your ₹10 Crore journey starts with{" "}
            <span className="gold-text">one conversation.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gold-light/75">
            It costs nothing to understand what your financial future looks like.
            It costs everything to ignore it.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href="#" size="lg" pulse>
              Book Your Free 30-Minute Strategy Call
            </CTAButton>
          </div>
          <p className="mt-5 text-sm text-gold-light/60">
            No sales pressure. No commitment. Just clarity.
          </p>
          <div className="mt-9 flex justify-center">
            <TrustStrip />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
