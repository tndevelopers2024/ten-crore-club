import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-32 text-center">
      <div>
        <p className="font-mono text-7xl font-bold text-gold/30">404</p>
        <h1 className="mt-4 text-display-md text-cream">
          This page hasn&apos;t compounded into existence.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-gold-light/70">
          The page you&apos;re looking for moved or never existed. Let&apos;s get
          you back to building wealth.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <CTAButton href="/">Back to Home</CTAButton>
          <CTAButton href="/calculators" variant="secondary" withArrow={false}>
            Open Calculators
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
