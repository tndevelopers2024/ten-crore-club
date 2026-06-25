import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  /** inner container max width */
  width?: "narrow" | "default" | "wide" | "full";
  id?: string;
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function SectionWrapper({
  children,
  className,
  width = "default",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-18", className)}>
      <div className={cn("mx-auto w-full", widths[width])}>{children}</div>
    </section>
  );
}
