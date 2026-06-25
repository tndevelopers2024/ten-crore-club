"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/framework", label: "Framework" },
  { href: "/services", label: "Services" },
  { href: "/calculators", label: "Calculators" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Blog" },
  { href: "/stories", label: "Stories" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-3 transition-all duration-500 sm:h-16 sm:px-5 lg:h-auto lg:rounded-none lg:border-none lg:bg-transparent lg:px-0 lg:shadow-none lg:backdrop-blur-none",
          scrolled
            ? "rounded-2xl border border-gold/15 bg-ink/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7),0_0_0_1px_rgba(213,160,74,0.08)] backdrop-blur-xl"
            : "rounded-2xl border border-gold/10 bg-ink-card/60 backdrop-blur-md",
        )}
      >
        <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo/ten-crore-club-logo-2.png"
            alt="Ten Crore Club Logo"
            width={140}
            height={140}
            priority
            className="h-10 w-auto object-contain sm:h-12 lg:h-24 lg:w-24"
          />
        </Link>
 
        {/* Desktop links - styled as capsule */}
        <ul
          className={cn(
            "hidden items-center gap-1 lg:flex h-12 rounded-full border px-4 transition-all duration-500",
            scrolled
              ? "border-gold/15 bg-ink/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7),0_0_0_1px_rgba(213,160,74,0.08)] backdrop-blur-xl"
              : "border-gold/10 bg-ink-card/60 backdrop-blur-md",
          )}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors font-bold",
                    active ? "bg-gold/10 text-gold" : "text-gold-light/70 hover:bg-gold/5 hover:text-gold",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
 
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/book"
            className="hidden rounded-full border border-red-vivid/60 bg-red-mid px-5 py-2 text-sm font-bold text-on-accent transition-all hover:bg-red-vivid hover:shadow-[0_0_20px_-4px_rgba(219, 51, 19,0.5)] sm:inline-flex"
          >
            Book Free Call
          </Link>
          <button
            className="inline-flex size-10 items-center justify-center rounded-full text-gold transition-colors hover:bg-gold/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-4 top-[4.5rem] z-40 origin-top rounded-2xl border border-gold/15 bg-ink/95 backdrop-blur-xl transition-all duration-300 sm:inset-x-6 sm:top-[5rem] lg:hidden",
          open
            ? "pointer-events-auto scale-100 opacity-100 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)]"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {[...links, { href: "/contact", label: "Contact" }].map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-full px-4 py-3 text-lg transition-colors",
                    active ? "bg-gold/10 text-gold" : "text-gold-light/80 hover:bg-gold/5",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-red-mid px-4 py-3 text-center text-lg font-medium text-on-accent transition-colors hover:bg-red-vivid"
            >
              Book Free Call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
