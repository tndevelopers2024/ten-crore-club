import { cn } from "@/lib/utils";

type Variant = "gold" | "red" | "outline";

const variants: Record<Variant, string> = {
  gold: "border-gold/40 bg-gold/10 text-gold-light",
  red: "border-red-vivid/40 bg-red-deep/15 text-cream",
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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small uppercase eyebrow label used above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold/80",
        className,
      )}
    >
      {children}
    </p>
  );
}
