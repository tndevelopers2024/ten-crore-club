import { ShieldAlert } from "lucide-react";

/**
 * Renders on EVERY page, above the Footer. Legal requirement — do NOT omit.
 * The disclaimer text is fixed.
 */
export const COMPLIANCE_DISCLAIMER = `Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Ten Crore Club is an AMFI-registered Mutual Fund Distributor. ARN: XXXXXXX. All content on this website is for educational purposes only and does not constitute financial advice. Returns mentioned are indicative and based on historical data — actual returns may vary.`;

export function ComplianceFooter() {
  return (
    <aside
      aria-label="Regulatory disclaimer"
      className="border-t border-line bg-ink"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-5 py-6 sm:px-8">
        <ShieldAlert className="mt-0.5 size-4 shrink-0 text-gold/60" />
        <p className="text-[11px] leading-relaxed text-gold-light/45 sm:text-xs">
          {COMPLIANCE_DISCLAIMER}
        </p>
      </div>
    </aside>
  );
}

/** Smaller inline compliance note for calculator / stats contexts. */
export function ComplianceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] leading-relaxed text-gold-light/40">
      <span className="text-gold/60">Disclaimer: </span>
      {children}
    </p>
  );
}
