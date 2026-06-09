/**
 * Minimal className combiner — joins truthy class fragments.
 * Avoids extra deps; sufficient for our component set.
 */
export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (val: ClassValue) => {
    if (!val) return;
    if (typeof val === "string" || typeof val === "number") {
      out.push(String(val));
    } else if (Array.isArray(val)) {
      val.forEach(walk);
    } else if (typeof val === "object") {
      for (const key in val) if (val[key]) out.push(key);
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
