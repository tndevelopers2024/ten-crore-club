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
        "rounded-2xl border bg-ink-card/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
        featured
          ? "border-gold/50 shadow-[0_0_50px_-15px_rgba(213,160,74,0.4)]"
          : "border-gold/15 hover:border-gold/30",
        interactive &&
          "hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_20px_50px_-15px_rgba(213,160,74,0.25)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
