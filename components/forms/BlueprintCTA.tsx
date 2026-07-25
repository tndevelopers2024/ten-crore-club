"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";

export function BlueprintCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-gold/70 bg-gradient-to-b from-ink-card via-ink to-ink-card p-8 text-center shadow-[0_0_50px_rgba(213,160,74,0.25)] sm:p-12">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold shadow-[0_0_15px_rgba(213,160,74,0.2)]">
          <Sparkles className="size-3.5" /> Exclusive Member Resource
        </div>

        <h3 className="font-display text-2xl font-bold leading-tight text-cream sm:text-4xl">
          “Start your journey with the <span className="gold-text">₹10 Crore Blueprint.”</span>
        </h3>
        
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gold-light/80 sm:text-base">
          Get Alex Pandyan’s step-by-step framework and arithmetic roadmap to building generational wealth delivered directly to your inbox.
        </p>

        <div className="mt-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gold/40 bg-gold/10 py-6 animate-in">
              <CheckCircle2 className="size-12 text-gold animate-bounce" />
              <p className="text-xl font-bold text-cream">You&apos;re on the way!</p>
              <p className="text-sm text-gold-light/80">
                The ₹10 Crore Blueprint has been sent to your inbox. Let your investments fly higher.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                {/* Ultra-highlighted input field with vibrant gold border, glow, and focus ring */}
                <input
                  type="email"
                  required
                  placeholder="Enter your professional email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  className="h-14 w-full rounded-xl border-2 border-gold bg-ink/90 px-5 text-base font-medium text-cream placeholder:text-gold-light/45 shadow-[0_0_25px_rgba(213,160,74,0.35)] outline-none transition-all focus:border-gold-light focus:bg-ink focus:ring-4 focus:ring-gold/40 focus:shadow-[0_0_35px_rgba(213,160,74,0.5)] disabled:opacity-60"
                />
              </div>
              <CTAButton
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-14 shrink-0 px-8 text-base font-bold shadow-[0_0_25px_rgba(203,5,3,0.5)]"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Get Blueprint <ArrowRight className="size-5" />
                  </span>
                )}
              </CTAButton>
            </form>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-gold-light/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-gold" /> 100% Free & Instant Access
          </span>
          <span>·</span>
          <span>No Spam Guarantee</span>
          <span>·</span>
          <span>Unsubscribe Anytime</span>
        </div>
      </div>
    </div>
  );
}
