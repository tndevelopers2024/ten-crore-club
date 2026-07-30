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

export function getWhatsAppUrl(
  phone: string = "919840441135",
  message: string = "Hi, I have an enquiry regarding Ten Crore Club"
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function handleWhatsAppClick(
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  phone: string = "919840441135",
  message: string = "Hi, I have an enquiry regarding Ten Crore Club"
) {
  e.preventDefault();
  const url = getWhatsAppUrl(phone, message);
  window.open(url, "_blank", "noopener,noreferrer");
}
