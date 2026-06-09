"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

/**
 * Dark / light toggle. The actual class is applied to <html> by an inline
 * no-flash script in the root layout; this just keeps it in sync + persists.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setTheme(
        document.documentElement.classList.contains("light") ? "light" : "dark",
      );
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("tc-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md border border-line text-gold transition-colors hover:border-gold/50 hover:bg-gold/5",
        className,
      )}
    >
      {/* Render the icon for the mode you'll switch TO; avoid hydration flash */}
      {mounted && theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}
