import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  AtSign,
  MessageCircle,
  Rss,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/framework", label: "The Ten Crore Method™" },
  { href: "/services", label: "Services" },
  { href: "/calculators", label: "Calculators" },
  { href: "/community", label: "The ₹10 Crore Circle" },
  { href: "/blog", label: "Blog" },
  { href: "/stories", label: "Success Stories" },
  { href: "/book", label: "Book a Call" },
];

const socials = [
  { icon: Globe, label: "Website", href: "/" },
  { icon: AtSign, label: "Email", href: "mailto:contact@tencroreclub.in" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919876543210" },
  { icon: Rss, label: "RSS", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gold/12 bg-ink-card/90">
        {/* Decorative background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(213,160,74,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(161,6,1,0.05) 0%, transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen"
        />

        {/* Top CTA strip */}
        <div className="relative border-b border-gold/10 px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-display text-2xl text-cream sm:text-3xl">
                Ready to start your{" "}
                <span className="gold-text">₹10 Crore journey?</span>
              </h3>
              <p className="mt-2 text-sm text-gold-light/60">
                Book a free 30-minute strategy call — no pressure, just clarity.
              </p>
            </div>
            <Link
              href="/book"
              className="group flex items-center gap-2 rounded-lg border border-red-vivid/60 bg-red-deep px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-red-mid hover:shadow-[0_0_30px_-8px_rgba(161,6,1,0.6)]"
            >
              Book Free Strategy Call
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative grid gap-12 px-8 py-12 sm:px-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/ten-crore-club-logo-2.png"
                alt="Ten Crore Club logo"
                width={180}
                height={180}
                className="h-36 w-36 object-contain sm:h-44 sm:w-44"
              />
            </Link>
            <p className="mt-5 max-w-xs font-display text-lg italic leading-relaxed text-gold-light/70">
              &ldquo;Let Your Investments Fly Higher.&rdquo;
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gold-light/50">
              India&apos;s private wealth community for serious investors.
              Structured SIP plans, behavioral coaching, and the Ten Crore
              Method™.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-line/60 bg-ink/40 text-gold-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/10 hover:text-gold hover:shadow-[0_4px_16px_-4px_rgba(213,160,74,0.3)]"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Explore
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-y-1 sm:grid-cols-2 sm:gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm text-gold-light/65 transition-all hover:bg-gold/5 hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:contact@tencroreclub.in"
                  className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-all hover:bg-gold/5"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold transition-colors group-hover:bg-gold/15">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-gold-light/50">Email</p>
                    <p className="text-sm text-gold-light/80 transition-colors group-hover:text-gold">
                      contact@tencroreclub.in
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-all hover:bg-gold/5"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold transition-colors group-hover:bg-gold/15">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-gold-light/50">Phone</p>
                    <p className="text-sm text-gold-light/80 transition-colors group-hover:text-gold">
                      +91 98765 43210
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 px-2 py-2">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-xs text-gold-light/50">Location</p>
                  <p className="text-sm leading-relaxed text-gold-light/80">
                    Wealth advisory, serving investors across India &amp; NRIs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-gold/8">
          <div className="flex flex-col items-center gap-3 px-8 py-5 sm:flex-row sm:justify-between sm:px-12">
            <p className="text-xs text-gold-light/40">
              © {new Date().getFullYear()} Ten Crore Club. All rights reserved.
            </p>
            <p className="text-center font-mono text-[11px] text-gold-light/35">
              AMFI Registered Mutual Fund Distributor · ARN: XXXXX · SEBI
              Compliant
            </p>
            {/* Back to top */}
            <a
              href="#"
              aria-label="Back to top"
              className="hidden size-9 items-center justify-center rounded-xl border border-gold/20 bg-ink/60 text-gold-light/50 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold sm:inline-flex"
            >
              <ChevronUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
