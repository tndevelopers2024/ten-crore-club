import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** adds gold hover glow + lift */
  interactive?: boolean;
  /** highlighted (premium) treatment */
  featured?: boolean;
}

export function Card({
  children,
  className,
  interactive = false,
  featured = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-ink-card p-6 transition-all duration-300",
        featured
          ? "border-gold/50 shadow-[0_0_40px_-20px_rgba(213,160,74,0.6)]"
          : "border-line",
        interactive &&
          "hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_40px_-20px_rgba(213,160,74,0.55)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
