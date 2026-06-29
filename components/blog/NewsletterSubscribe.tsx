"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <section className="relative my-20 overflow-hidden rounded-2xl border border-gold/30 cta-radial p-8 md:p-12 text-center max-w-4xl mx-auto gold-glow">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <Reveal>
          <Badge variant="gold" className="mb-4">
            <Mail className="size-3.5 mr-1" /> Join 14,200+ Wealth Builders
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="font-display text-3xl sm:text-4xl text-cream font-bold leading-tight">
            Subscribe to <span className="gold-text">The Journal</span>
          </h3>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 text-gold-light/70 leading-relaxed text-sm sm:text-base">
            No spam. No hype. Just wealth psychology, mathematical proofs, and the hard truth about building a ₹10 Crore portfolio in India. Delivered directly to your inbox every Sunday morning.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-4 animate-in">
              <CheckCircle2 className="size-12 text-gold animate-bounce" />
              <p className="text-xl font-medium text-cream">You&apos;re on the list!</p>
              <p className="text-sm text-gold-light/60">
                Welcome to the club. We sent a welcome note to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-5 rounded-full bg-ink/75 border border-gold/20 text-cream placeholder:text-gold-light/35 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-sm"
                  disabled={status === "submitting"}
                />
              </div>
              <CTAButton
                type="submit"
                variant="primary"
                withArrow={status !== "submitting"}
                disabled={status === "submitting"}
                className="h-12 flex items-center justify-center font-semibold text-sm shrink-0"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-1" />
                    Subscribing
                  </>
                ) : (
                  "Subscribe"
                )}
              </CTAButton>
            </form>
          )}
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-4 text-[11px] text-gold-light/40 leading-normal">
            By subscribing, you agree to our privacy policy. You can unsubscribe at any time in one click.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
