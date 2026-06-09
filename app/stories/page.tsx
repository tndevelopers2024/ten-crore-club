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

      <SectionWrapper>
        <div className="space-y-12">
          {successStories.map((s, i) => (
            <div key={s.name}>
              <Reveal>
                <article className="grid gap-8 rounded-xl border border-line bg-ink-card p-7 sm:p-10 lg:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex items-center gap-4">
                      <Avatar initials={s.initials} photo={s.photo} name={s.name} size={56} />
                      <div>
                        <h2 className="font-display text-2xl text-cream">{s.name}</h2>
                        <p className="text-sm text-gold-light/60">
                          {s.profession} · {s.city} · Age {s.age}
                        </p>
                      </div>
                    </div>

                    <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gold/70">
                          When they joined
                        </dt>
                        <dd className="mt-1 text-sm text-gold-light/80">{s.whenJoined}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gold/70">
                          The plan we built
                        </dt>
                        <dd className="mt-1 text-sm text-gold-light/80">{s.plan}</dd>
                      </div>
                    </dl>

                    <blockquote className="mt-6 border-l-2 border-gold/60 pl-4">
                      <p className="font-display text-xl italic leading-relaxed text-gold-light/90">
                        “{s.quote}”
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex flex-col justify-center gap-4 rounded-lg border border-gold/30 bg-ink p-6 text-center lg:w-56">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-light/60">
                        Portfolio today
                      </p>
                      <p className="mt-1 font-mono text-3xl font-semibold text-gold tnum">
                        {s.today}
                      </p>
                    </div>
                    <div className="border-t border-line pt-4">
                      <p className="text-xs uppercase tracking-wider text-gold-light/60">
                        On track for
                      </p>
                      <p className="mt-1 font-medium text-cream">{s.onTrack}</p>
                    </div>
                  </div>
                </article>
              </Reveal>

              {i === 0 && (
                <Reveal delay={80}>
                  <div className="mt-12 grid gap-6 rounded-xl border border-line bg-ink-soft p-6 text-center sm:grid-cols-3">
                    <div>
                      <p className="font-mono text-2xl font-semibold text-gold">₹22.4L · ₹68L · ₹45L</p>
                      <p className="mt-1 text-sm text-gold-light/60">Portfolios actively growing</p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-semibold text-gold">4.2 years</p>
                      <p className="mt-1 text-sm text-gold-light/60">Average portfolio age</p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-semibold text-gold">0 members</p>
                      <p className="mt-1 text-sm text-gold-light/60">Who stopped their SIPs</p>
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
