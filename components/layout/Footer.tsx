import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";
import { 
  FaInstagram, 
  FaXTwitter, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa6";

const methodLinks = [
  { href: "/framework", label: "The Ten Crore Method™" },
  { href: "/community", label: "The ₹10 Crore Circle" },
  { href: "/stories", label: "Success Stories" },
  { href: "/blog", label: "Wealth Journal" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const calculatorLinks = [
  { href: "/calculators", label: "SIP Growth Calculator" },
  { href: "/calculators", label: "Lumpsum Calculator" },
  { href: "/calculators", label: "SWP Calculator" },
  { href: "/calculators", label: "Goal Planner" },
  { href: "/calculators", label: "Delay Cost Calculator" },
];

const offeringLinks = [
  { href: "/services#mutual-funds", label: "Mutual Funds" },
  { href: "/services#insurances", label: "Insurances" },
  { href: "/services#gift-city", label: "GIFT City" },
  { href: "/services#pms", label: "PMS & AIF" },
  { href: "/services#bonds", label: "Bonds & Fixed Income" },
];

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/tencroreclub" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "https://twitter.com/tencroreclub" },
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/tencroreclub" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/company/tencroreclub" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@tencroreclub" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919876543210" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-gold/15 bg-ink-card/65 backdrop-blur-xl shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8),0_0_50px_-20px_rgba(213,160,74,0.15)]">
        {/* Decorative background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(213,160,74,0.12) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(219, 51, 19,0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(213,160,74,0.02) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen"
        />

        {/* Top CTA strip */}
        <div className="relative border-b border-gold/10 px-8 py-8 sm:px-12 sm:py-10 bg-gradient-to-r from-gold/5 via-transparent to-red-mid/5">
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
              className="group flex items-center gap-2 rounded-full bg-red-mid px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-red-vivid hover:shadow-[0_0_30px_-8px_rgba(219, 51, 19,0.6)]"
            >
              Book Free Strategy Call
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative grid gap-10 px-8 py-12 sm:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/ten-crore-club-logo-2.png"
                alt="Ten Crore Club logo"
                width={180}
                height={180}
                className="h-36 w-36 object-contain sm:h-44 sm:w-44 transition-transform duration-300 hover:scale-[1.03]"
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
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line/60 bg-ink/40 text-gold-light/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/15 hover:text-gold-light hover:shadow-[0_4px_20px_rgba(213,160,74,0.25)]"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 (Method & Community) */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Community
            </h3>
            <ul className="mt-5 space-y-2">
              {methodLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 border-l border-transparent pl-0 text-sm text-gold-light/65 transition-all duration-300 hover:border-gold hover:pl-2.5 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Calculators) */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Calculators
            </h3>
            <ul className="mt-5 space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 border-l border-transparent pl-0 text-sm text-gold-light/65 transition-all duration-300 hover:border-gold hover:pl-2.5 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (Services) */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Services
            </h3>
            <ul className="mt-5 space-y-2">
              {offeringLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 border-l border-transparent pl-0 text-sm text-gold-light/65 transition-all duration-300 hover:border-gold hover:pl-2.5 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold">
              <span className="inline-block h-px w-4 bg-gold/50" />
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:contact@tencroreclub.in"
                  className="group flex items-center gap-3.5 rounded-xl p-2 transition-all duration-300 hover:bg-gold/[0.02]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15 group-hover:shadow-[0_0_15px_rgba(213,160,74,0.2)]">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gold-light/45">Email</p>
                    <p className="text-[13px] font-medium text-gold-light/85 transition-colors group-hover:text-gold">
                      contact@tencroreclub.in
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-3.5 rounded-xl p-2 transition-all duration-300 hover:bg-gold/[0.02]"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15 group-hover:shadow-[0_0_15px_rgba(213,160,74,0.2)]">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gold-light/45">Phone</p>
                    <p className="text-[13px] font-medium text-gold-light/85 transition-colors group-hover:text-gold">
                      +91 98765 43210
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3.5 p-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/8 text-gold">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-light/45">Location</p>
                  <p className="text-[13px] leading-relaxed text-gold-light/80">
                    Serving investors across India &amp; NRIs.
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
              className="hidden size-9 items-center justify-center rounded-full border border-gold/20 bg-ink/60 text-gold-light/50 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold sm:inline-flex"
            >
              <ChevronUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
