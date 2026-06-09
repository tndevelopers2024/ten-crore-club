import { cn } from "@/lib/utils";

/** Decorative gold hairline with a diamond accent. */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="size-1.5 rotate-45 bg-gold" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
