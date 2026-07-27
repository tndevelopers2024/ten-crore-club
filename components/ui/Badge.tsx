import { cn } from "@/lib/utils";

type Variant = "gold" | "red" | "outline";

const variants: Record<Variant, string> = {
  gold: "border-gold/40 bg-gold/10 text-gold-light",
  red: "border-red-vivid/40 bg-red-mid/15 text-cream",
  outline: "border-line bg-ink-card text-gold-light/80",
};

export function Badge({
  children,
  variant = "outline",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wide transition-all duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Google-style sleek pill chip label used above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold shadow-[0_4px_20px_rgba(213,160,74,0.15)] backdrop-blur-md transition-all hover:border-gold/50 hover:bg-gold/15",
        className,
      )}
    >
      {children}
    </div>
  );
}
