import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function RegretSection() {
  return (
    <section className="px-5 py-10 sm:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-lg text-balance text-cream">
            The most expensive decision you&apos;ll ever make is the one you keep{" "}
            <span className="gold-text">postponing.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <GoldDivider className="my-6" />
        </Reveal>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={160}>
            <p className="font-display text-2xl italic leading-relaxed text-gold-light/85 sm:text-[1.7rem]">
              Imagine it&apos;s 2040, you are 55, your colleague Vikram — same salary, same city, same opportunities — just hit ₹10 Crore with his disciplined SIP and lumpsum investment, but you didn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 font-display text-2xl italic leading-relaxed text-gold-light/70 sm:text-[1.7rem]">
              Not because you couldn&apos;t, because you were going to{" "}
              <span className="text-cream">“start next month.”</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto mt-8 max-w-6xl">
          <Image
            src="/images/home/image-by-mohan.avif"
            alt="Vikram vs You: The cost of postponing your SIP decision to 2040"
            width={1536}
            height={1024}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
            priority
          />
        </Reveal>

        <Reveal delay={320}>
          <div className="gold-glow mx-auto mt-8 max-w-3xl rounded-xl border border-gold/40 bg-ink/60 p-6 sm:p-8 text-center">
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
