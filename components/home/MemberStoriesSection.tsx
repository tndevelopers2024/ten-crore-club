import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/ui/Badge";
import { StatCounter } from "@/components/shared/StatCounter";
import { TrustStrip } from "@/components/shared/TrustStrip";
import { Avatar } from "@/components/shared/Avatar";
import { successStories } from "@/data/success-stories";

export function MemberStoriesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Member Stories</Eyebrow>
          <h2 className="text-display-lg text-balance text-cream">
            Real people. Real portfolios.{" "}
            <span className="gold-text">Real crores being built.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {successStories.map((s, i) => (
            <Reveal as="article" key={s.name} delay={i * 120}>
              <div className="group flex h-full flex-col rounded-lg border border-line bg-ink-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_0_40px_-20px_rgba(213,160,74,0.55)]">
                <div className="flex items-center gap-3">
                  <Avatar initials={s.initials} photo={s.photo} name={s.name} size={44} />
                  <div>
                    <p className="font-medium text-cream">{s.name}</p>
                    <p className="text-xs text-gold-light/60">
                      {s.profession} · {s.city} · Age {s.age}
                    </p>
                  </div>
                </div>

                <p className="mt-5 font-display text-lg italic leading-relaxed text-gold-light/85">
                  “{s.quote}”
                </p>

                <div className="mt-auto pt-6">
                  <div className="border-t border-line pt-4">
                    <StatCounter
                      value={s.todayValue / 1e5}
                      prefix="₹"
                      suffix=" L"
                      decimals={1}
                      label="Portfolio today"
                      duration={1600}
                    />
                    <p className="mt-3 text-sm text-gold">On track: {s.onTrack}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-12 flex justify-center">
          <TrustStrip />
        </Reveal>

        <p className="mt-6 text-center text-[11px] text-gold-light/40">
          Results may vary. These are individual member experiences and are not a
          guarantee of future performance.
        </p>
      </div>
    </section>
  );
}
