import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  as?: "div" | "span" | "li";
}

/**
 * CSS-only entrance animation for above-the-fold content.
 * Unlike <Reveal>, this does NOT gate on an IntersectionObserver — the base
 * state is visible, so hero content never flashes hidden during hydration.
 */
export function AnimateIn({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: AnimateInProps) {
  return (
    <Tag
      className={cn("animate-in", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
