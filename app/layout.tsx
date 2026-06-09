import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tencroreclub.in"),
  title: {
    default: "Ten Crore Club — Build ₹10 Crore with Mutual Fund SIPs",
    template: "%s | Ten Crore Club",
  },
  description:
    "India's private wealth community for serious investors. Structured SIP plans, behavioral coaching, and the Ten Crore Method™. AMFI Registered.",
  keywords: [
    "SIP investment",
    "mutual fund India",
    "10 crore goal",
    "wealth building India",
    "SIP calculator",
    "retirement planning India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ten Crore Club",
    title: "Ten Crore Club — Let Your Investments Fly Higher",
    description:
      "A private wealth community for India's serious investors. Build ₹10 Crore with discipline, the right system, and behavioral coaching.",
    images: [{ url: "/logo/logo-mark.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tencroreclub",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-ink text-cream antialiased">
        {/* Apply persisted theme before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('tc-theme')==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <ComplianceFooter />
        <Footer />
      </body>
    </html>
  );
}
