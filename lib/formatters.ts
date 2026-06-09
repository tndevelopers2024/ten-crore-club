/**
 * Currency / number formatters — Indian conventions.
 */

/** Format rupees compactly: ₹22.4 Lakh, ₹1.5 Crore, ₹10 Crore */
export function formatINR(amount: number, compact = true): string {
  if (!isFinite(amount)) return "₹0";
  const rounded = Math.round(amount);
  if (!compact) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(rounded);
  }
  const abs = Math.abs(rounded);
  if (abs >= 1e7) return `₹${(rounded / 1e7).toFixed(2)} Cr`;
  if (abs >= 1e5) return `₹${(rounded / 1e5).toFixed(1)} L`;
  if (abs >= 1e3) return `₹${(rounded / 1e3).toFixed(0)}K`;
  return `₹${rounded}`;
}

/** Full grouped rupees with Indian digit grouping: ₹1,23,45,678 */
export function formatINRFull(amount: number): string {
  if (!isFinite(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

/** Plain grouped number, no symbol: 12,34,567 */
export function formatNumber(n: number): string {
  if (!isFinite(n)) return "0";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

/** Human label for a big rupee figure, e.g. "Crore" / "Lakh" — used by counters. */
export function rupeeUnit(amount: number): { value: number; suffix: string } {
  const abs = Math.abs(amount);
  if (abs >= 1e7) return { value: amount / 1e7, suffix: "Cr" };
  if (abs >= 1e5) return { value: amount / 1e5, suffix: "L" };
  if (abs >= 1e3) return { value: amount / 1e3, suffix: "K" };
  return { value: amount, suffix: "" };
}

export function formatPct(n: number, decimals = 1): string {
  return `${n.toFixed(decimals)}%`;
}

export function formatMultiple(n: number): string {
  return `${n.toFixed(1)}x`;
}
