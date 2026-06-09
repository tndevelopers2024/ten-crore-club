import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  pulse?: boolean;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}
interface ButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const variants: Record<Variant, string> = {
  primary:
    "bg-red-deep text-on-accent border border-red-vivid/70 hover:bg-red-mid shadow-[0_8px_30px_-12px_rgba(205,20,10,0.7)]",
  secondary:
    "bg-transparent border border-gold/70 text-gold hover:bg-gold/10 hover:border-gold",
  ghost:
    "bg-transparent text-gold-light underline-offset-4 hover:text-cream hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function CTAButton(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    withArrow = true,
    pulse = false,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide",
    "transition-all duration-200 will-change-transform",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    variants[variant],
    sizes[size],
    pulse && "cta-pulse",
    className,
  );

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const isInternal = props.href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={props.href} className={classes}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={props.href} className={classes} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {inner}
    </button>
  );
}
