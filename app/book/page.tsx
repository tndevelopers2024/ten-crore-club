import type { Metadata } from "next";
import {
  CheckCircle,
  ShieldCheck,
  Lock,
  Users,
  Clock,
  XCircle,
  BookOpen,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { BookingForm } from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy session. We'll map your income, your ₹10 Crore timeline, and the exact next steps — no sales pressure.",
};

const covers = [
  "Your current income, savings rate, and investable surplus",
  "Your ₹10 Crore timeline and what it requires",
  "A fund shortlist tailored to your goals",
  "Key mistakes to avoid based on your situation",
  "Whether Ten Crore Club is the right fit for you",
];

const trust = [
  { icon: ShieldCheck, label: "AMFI Registered" },
  { icon: Lock, label: "SEBI Compliant" },
  { icon: Users, label: "340+ members investing" },
  { icon: Clock, label: "Response within 24 hours" },
  { icon: XCircle, label: "No guaranteed-return claims" },
  { icon: BookOpen, label: "Education-first approach" },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title={
          <>
            One conversation can change the trajectory of your{" "}
            <span className="gold-text">financial life.</span>
          </>
        }
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left — what's covered + urgency */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-xl border border-line bg-ink-card p-7">
                <h2 className="font-display text-2xl text-cream">
                  What your free session covers
                </h2>
                <ul className="mt-5 space-y-3">
                  {covers.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-gold-light/80">
                      <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-xl border border-red-vivid/40 bg-red-deep/10 p-6 cta-pulse">
                <p className="text-sm leading-relaxed text-gold-light/90">
                  We take a limited number of new consultations each month to ensure
                  every client gets full attention. If you&apos;re seeing this page,
                  slots are available —{" "}
                  <span className="font-medium text-red-vivid">but not for long.</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <ul className="grid grid-cols-2 gap-3">
                {trust.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-xs text-gold-light/70">
                    <Icon className="size-4 shrink-0 text-gold" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={100}>
            <BookingForm />
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}
