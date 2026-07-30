import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { FileText, ShieldAlert, Award, AlertCircle, Scale, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions governing the use of Ten Crore Club's website, tools, and mutual fund distribution services.",
};

const sections = [
  { id: "terms-agreement", label: "1. Agreement of Terms", icon: FileText },
  { id: "service-description", label: "2. Services & Distributor Status", icon: Award },
  { id: "no-advice-disclaimer", label: "3. No Financial Advice", icon: AlertCircle },
  { id: "risk-disclaimer", label: "4. Investment Risks", icon: ShieldAlert },
  { id: "user-obligations", label: "5. User Obligations & KYC", icon: Hammer },
  { id: "liability-limit", label: "6. Limitation of Liability", icon: Scale },
  { id: "governing-law", label: "7. Governing Law", icon: Scale },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            Terms & <span className="gold-text">Conditions</span>
          </>
        }
        subtitle="Last updated: July 9, 2026. Please read these terms carefully before accessing our website, financial calculators, or using our mutual fund distribution services."
      />

      <SectionWrapper width="wide" className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-line bg-ink-card/50 p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <Link
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-gold-light/65 transition-all hover:bg-gold/5 hover:text-gold"
                    >
                      <Icon className="size-3.5 text-gold-light/40 group-hover:text-gold" />
                      {sec.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Policy content */}
          <div className="space-y-12">
            <Reveal>
              <div id="terms-agreement" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">1.</span> Agreement of Terms
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    These Terms &amp; Conditions govern your access to and use of the website `tencroreclub.in` and all associated subdomains, tools, calculators, newsletters, and services offered by Ten Crore Club (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
                  </p>
                  <p>
                    By accessing, browsing, or using this website, or by submitting information to book strategy calls, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree to these terms, you must discontinue your use of this site immediately.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={50}>
              <div id="service-description" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">2.</span> Description of Services & MFD Status
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    Ten Crore Club is an AMFI-registered Mutual Fund Distributor (ARN: 245537). We provide a platform for:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Facilitating the purchase, redemption, and switch of mutual fund schemes of various Asset Management Companies (AMCs).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Providing analytical tools, mathematical frameworks (like the Ten Crore Method™), and calculators to assist users in planning their financial goals.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Sending regular educational content, wealth-building guides, and newsletter publications.</span>
                    </li>
                  </ul>
                  <p>
                    We operate strictly under the regulatory purview of the Association of Mutual Funds in India (AMFI) and the Securities and Exchange Board of India (SEBI).
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div id="no-advice-disclaimer" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">3.</span> No Financial or Investment Advice
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    The tools, calculations, newsletter editions, and text content published on this website are for educational and informational purposes only. 
                  </p>
                  <p>
                    <strong className="text-cream text-sm">Calculators and projections (including the ₹10 Crore goal models) represent mathematical simulations based on historical returns or specific user assumptions. They do not constitute guaranteed returns or personalized financial advice.</strong>
                  </p>
                  <p>
                    Mutual fund distribution services are non-discretionary. All investment decisions are made solely by you. We recommend that you perform your own research and consult with a registered Investment Adviser (RIA) or tax counsel before taking any action.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div id="risk-disclaimer" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">4.</span> Mutual Fund Risk Disclaimers
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p className="border-l-2 border-gold/50 pl-4 py-1 text-gold-light/90 italic bg-gold/5 rounded-r-lg">
                    &ldquo;Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.&rdquo;
                  </p>
                  <p>
                    Investment portfolios fluctuate based on market movements. Net Asset Values (NAVs) may rise or fall depending on market factors, interest rates, and currency values. Ten Crore Club is not responsible or liable for any capital erosion or financial loss incurred as a result of investments made through our platform.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div id="user-obligations" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">5.</span> User Obligations & KYC
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    To use our transaction facilitation services, you must be a resident of India, a Non-Resident Indian (NRI), or a legal entity eligible under Indian laws to invest in mutual funds. You agree to:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Provide accurate, complete, and updated information, including PAN, KYC data, address proof, and bank accounts.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Ensure that funds used for investments are from legitimate bank accounts in your name, and do not violate the Prevention of Money Laundering Act (PMLA).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Refrain from using our website, intellectual property (such as the Ten Crore Method™ framework), or calculators for unauthorized commercial purposes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div id="liability-limit" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">6.</span> Limitation of Liability
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    Ten Crore Club, its partners, employees, and affiliates will not be liable for any direct, indirect, incidental, or consequential damages resulting from:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>The use or inability to use our website, tools, or calculators.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Any delay, failure, or rejection of transactions by the AMC, RTAs (CAMS/KFintech), or payment gateway providers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Losses resulting from security breaches, internet disruptions, or system maintenance outages.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div id="governing-law" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">7.</span> Governing Law & Jurisdiction
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms, website access, or our distribution services shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India.
                  </p>
                  <p>
                    If you have questions about these Terms &amp; Conditions, please reach out to us at <strong className="text-cream">contact@tencroreclub.com</strong>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
