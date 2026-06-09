import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Share2, AtSign, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "The Ten Crore Method™" },
  { href: "#", label: "Services" },
  { href: "#", label: "Calculators" },
  { href: "#", label: "The ₹10 Crore Circle" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Success Stories" },
  { href: "#", label: "Book a Call" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo/logo-mark.png"
              alt="Ten Crore Club"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-xl font-semibold tracking-wide text-cream">
              TEN CRORE <span className="text-gold">CLUB</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs font-display text-lg italic text-gold-light/80">
            Let Your Investments Fly Higher.
          </p>
          <div className="mt-5 flex gap-3">
            {[Share2, AtSign, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="inline-flex size-9 items-center justify-center rounded-md border border-line text-gold-light/70 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-gold-light/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gold-light/70">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-gold" />
              contact@tencroreclub.in
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-gold" />
              +91 98765 43210
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              Wealth advisory, serving investors across India &amp; NRIs.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-gold-light/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ten Crore Club. All rights reserved.</p>
          <p className="font-mono">
            AMFI Registered Mutual Fund Distributor · ARN: XXXXX · SEBI Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
