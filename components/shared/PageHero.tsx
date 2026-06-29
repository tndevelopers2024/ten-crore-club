import { AnimateIn } from "@/components/shared/AnimateIn";
import { Eyebrow } from "@/components/ui/Badge";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-12 sm:px-8 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(219, 51, 19,0.12) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <AnimateIn>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-display-xl text-balance text-cream">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gold-light/80">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </AnimateIn>
      </div>
    </section>
  );
}
