"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#", label: "About" },
  { href: "#", label: "Framework" },
  { href: "#", label: "Services" },
  { href: "#", label: "Calculators" },
  { href: "#", label: "Community" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Stories" },
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-gold/15 bg-ink/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.9)]"
          : "border-transparent bg-ink/40 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo/logo-mark.png"
            alt="Ten Crore Club"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-lg font-semibold leading-none tracking-wide text-cream">
            TEN CRORE <span className="text-gold">CLUB</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    active ? "text-gold" : "text-gold-light/70 hover:text-gold",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#"
            className="hidden rounded-md border border-red-vivid/60 bg-red-deep px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-red-mid sm:inline-flex"
          >
            Book Free Call
          </Link>
          <button
            className="inline-flex size-10 items-center justify-center rounded-md text-gold lg:hidden"
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
          "fixed inset-0 top-16 z-40 origin-top bg-ink/98 backdrop-blur-md transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {[...links, { href: "#", label: "Contact" }].map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-4 py-3 text-lg",
                    active ? "bg-gold/10 text-gold" : "text-gold-light/80",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3">
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-red-deep px-4 py-3 text-center text-lg font-medium text-on-accent"
            >
              Book Free Call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
