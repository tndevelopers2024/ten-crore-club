import { formatINR, formatINRFull } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface RupeeDisplayProps {
  amount: number;
  /** compact uses ₹X.X Cr / L; full uses grouped digits */
  compact?: boolean;
  className?: string;
}

/** Formatted ₹ figure, always in mono. */
export function RupeeDisplay({
  amount,
  compact = true,
  className,
}: RupeeDisplayProps) {
  return (
    <span className={cn("font-mono tnum", className)}>
      {compact ? formatINR(amount) : formatINRFull(amount)}
    </span>
  );
}
