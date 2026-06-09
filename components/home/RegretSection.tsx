import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function RegretSection() {
  return (
    <section className="bg-ink-card px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-display-lg text-balance text-cream">
            The most expensive decision you&apos;ll ever make is the one you keep{" "}
            <span className="gold-text">postponing.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <GoldDivider className="my-10" />
        </Reveal>

        <Reveal delay={160}>
          <p className="font-display text-2xl italic leading-relaxed text-gold-light/85 sm:text-[1.7rem]">
            Imagine it&apos;s 2040. You&apos;re 55. Your colleague Vikram — same
            salary, same city, same opportunities — just hit ₹10 Crore. He started
            a ₹20,000 SIP in 2025. You didn&apos;t.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 font-display text-2xl italic leading-relaxed text-gold-light/70 sm:text-[1.7rem]">
            Not because you couldn&apos;t. Because you were going to{" "}
            <span className="text-cream">“start next month.”</span>
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="gold-glow mt-12 rounded-xl border border-gold/40 bg-ink/60 p-8">
            <p className="text-lg leading-relaxed text-cream sm:text-xl">
              The difference between you and Vikram isn&apos;t intelligence. It
              isn&apos;t income. It isn&apos;t luck.{" "}
              <span className="font-display text-2xl italic text-gold">
                It&apos;s one decision. Made 15 years earlier.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
