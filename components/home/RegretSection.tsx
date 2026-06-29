import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { BrandImage } from "@/components/shared/BrandImage";

export function RegretSection() {
  return (
    <section className="px-5 py-14 sm:px-8 md:py-0">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-lg text-balance text-cream">
            The most expensive decision you&apos;ll ever make is the one you keep{" "}
            <span className="gold-text">postponing.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <GoldDivider className="my-10" />
        </Reveal>

        <div className="mx-auto max-w-3xl text-center">
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
          </div>

          <Reveal delay={200} className="mx-auto mt-12 max-w-4xl">
            <div className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-ink-card p-2 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_50px_-12px_rgba(212,175,55,0.25)]">
              {/* Ambient gold glow effect behind the image */}
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <BrandImage
                src="/images/home/image-1.jpeg"
                alt="Vikram vs You: The cost of postponing your SIP decision"
                aspect="3/2"
                rounded="lg"
                imgClassName="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </Reveal>

        <Reveal delay={320}>
          <div className="gold-glow mx-auto mt-12 max-w-3xl rounded-xl border border-gold/40 bg-ink/60 p-8 text-center">
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
