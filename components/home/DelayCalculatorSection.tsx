import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { DelayCalculator } from "@/components/calculators/DelayCalculator";

export function DelayCalculatorSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>The Cost of Waiting</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-display-lg text-balance text-cream">
            See exactly what one year of hesitation is{" "}
            <span className="gold-text">costing you — in rupees.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gold-light/70">
            Move the sliders. Watch the gap between starting today and starting
            next year. This is the single most clarifying number in personal
            finance.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <DelayCalculator />
        </Reveal>
      </div>
    </section>
  );
}
