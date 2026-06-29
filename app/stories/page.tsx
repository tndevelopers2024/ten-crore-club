import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Avatar } from "@/components/shared/Avatar";
import { ComplianceNote } from "@/components/layout/ComplianceFooter";
import { successStories } from "@/data/success-stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real investors, real journeys, real crores being built. See how Ten Crore Club members went from scattered savings to structured wealth.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Member Journeys"
        title={
          <>
            Real investors. Real journeys.{" "}
            <span className="gold-text">Real crores being built.</span>
          </>
        }
      />

      <SectionWrapper width="default">
        <div className="space-y-12">
          {successStories.map((s, i) => (
            <div key={s.name}>
              <Reveal>
                <article className="group grid gap-8 rounded-xl border border-gold/20 bg-ink-card/60 backdrop-blur-md p-7 sm:p-10 lg:grid-cols-[1fr_auto] hover:border-gold/45 hover:shadow-[0_12px_40px_-20px_rgba(213,160,74,0.25)] transition-all duration-300 glare-sweep relative overflow-hidden">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Avatar initials={s.initials} photo={s.photo} name={s.name} size={56} />
                        <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-gold border-2 border-ink flex items-center justify-center">
                          <span className="size-1.5 rounded-full bg-ink animate-pulse" />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-200">{s.name}</h2>
                        <p className="text-sm text-gold-light/60">
                          {s.profession} · {s.city} · Age {s.age}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Sequence */}
                    <div className="mt-6 space-y-4 border-l-2 border-gold/30 pl-4 py-1">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                          Before Joining
                        </span>
                        <p className="mt-1 text-sm text-gold-light/80 leading-relaxed">{s.whenJoined}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70">
                          The Roadmap Plan
                        </span>
                        <p className="mt-1 text-sm text-gold-light/80 leading-relaxed">{s.plan}</p>
                      </div>
                    </div>

                    {/* Quote Testimonial */}
                    <blockquote className="relative mt-6 pt-1">
                      <span className="absolute -top-3 -left-2 text-4xl font-serif text-gold/20 select-none pointer-events-none">“</span>
                      <p className="font-display text-xl italic leading-relaxed text-cream pl-4">
                        {s.quote}
                      </p>
                    </blockquote>
                  </div>

                  {/* Portfolio Status Widget */}
                  <div className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-ink-soft/80 p-6 text-center lg:w-60 shadow-inner shrink-0 self-center lg:self-stretch">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-light/50">
                        Portfolio today
                      </p>
                      <p className="mt-2 font-mono text-3xl font-bold text-gold tnum">
                        {s.today}
                      </p>
                    </div>
                    
                    <div className="border-t border-line/30 pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-light/50">
                        On track for
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 font-medium text-cream font-sans text-sm justify-center">
                        <span className="size-1.5 rounded-full bg-gold animate-pulse" />
                        {s.onTrack}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>

              {i === 0 && (
                <Reveal delay={80}>
                  <div className="mt-12 grid gap-6 rounded-xl border border-gold/20 bg-ink-card/40 backdrop-blur-sm p-6 text-center sm:grid-cols-3 gold-glow">
                    <div>
                      <p className="font-mono text-2xl font-bold gold-text">₹22.4L · ₹68L · ₹45L</p>
                      <p className="mt-1 text-xs sm:text-sm text-gold-light/60">Portfolios actively growing</p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold gold-text">4.2 years</p>
                      <p className="mt-1 text-xs sm:text-sm text-gold-light/60">Average portfolio age</p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold gold-text">0 members</p>
                      <p className="mt-1 text-xs sm:text-sm text-gold-light/60">Who stopped their SIPs</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <Reveal className="mt-12">
          <ComplianceNote>
            Results may vary. These are individual member experiences and are not a
            guarantee of future performance. Past performance is not indicative of
            future returns.
          </ComplianceNote>
        </Reveal>

        <Reveal delay={120} className="mt-10 text-center">
          <CTAButton href="/book" size="lg">
            Start Writing Your Story
          </CTAButton>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
