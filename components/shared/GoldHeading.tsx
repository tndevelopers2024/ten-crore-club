import { cn } from "@/lib/utils";

type Size = "2xl" | "xl" | "lg" | "md";

interface GoldHeadingProps {
  children: React.ReactNode;
  size?: Size;
  as?: "h1" | "h2" | "h3";
  shimmer?: boolean;
  className?: string;
}

const sizeClass: Record<Size, string> = {
  "2xl": "text-display-2xl",
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
};

/**
 * Cormorant Garamond headline with animated gold shimmer.
 * Use shimmer sparingly — only on primary headlines (scarcity = impact).
 */
export function GoldHeading({
  children,
  size = "lg",
  as: Tag = "h2",
  shimmer = true,
  className,
}: GoldHeadingProps) {
  return (
    <Tag
      className={cn(
        sizeClass[size],
        shimmer ? "gold-shimmer" : "gold-text",
        "text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
