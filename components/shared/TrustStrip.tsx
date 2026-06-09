import { ShieldCheck, BadgeCheck, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultItems = [
  { icon: ShieldCheck, label: "AMFI Registered" },
  { icon: BadgeCheck, label: "SEBI Compliant" },
  { icon: Users, label: "340+ Active Members" },
  { icon: TrendingUp, label: "₹4.2 Cr Added Last Month" },
];

interface TrustStripProps {
  className?: string;
  items?: { icon: typeof ShieldCheck; label: string }[];
}

export function TrustStrip({ className, items = defaultItems }: TrustStripProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gold-light/80 sm:text-sm",
        className,
      )}
    >
      {items.map(({ icon: Icon, label }, i) => (
        <li key={label} className="flex items-center gap-2">
          {i > 0 && (
            <span className="mr-3 hidden size-1 rounded-full bg-gold/40 sm:inline-block" />
          )}
          <Icon className="size-4 text-gold" />
          <span className="whitespace-nowrap">{label}</span>
        </li>
      ))}
    </ul>
  );
}
