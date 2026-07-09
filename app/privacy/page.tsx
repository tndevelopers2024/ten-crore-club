import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Reveal } from "@/components/shared/Reveal";
import { Shield, Lock, FileText, Share2, HelpCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Ten Crore Club collects, protects, and handles your personal and financial data. AMFI and SEBI compliant.",
};

const sections = [
  { id: "introduction", label: "1. Introduction", icon: FileText },
  { id: "information-collected", label: "2. Information We Collect", icon: Lock },
  { id: "use-of-information", label: "3. How We Use Data", icon: Shield },
  { id: "sharing-disclosures", label: "4. Information Sharing", icon: Share2 },
  { id: "security-standards", label: "5. Security Standards", icon: HelpCircle },
  { id: "user-rights", label: "6. Your Rights & Choice", icon: AlertTriangle },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            Privacy <span className="gold-text">Policy</span>
          </>
        }
        subtitle="Last updated: July 9, 2026. Your privacy is paramount. This policy details how we handle, protect, and respect your personal and financial information."
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
              <div id="introduction" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">1.</span> Introduction & Commitment
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    Ten Crore Club (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. As an AMFI-registered Mutual Fund Distributor, we recognize that our relationship with you is built on trust, which is why we hold ourselves to the highest standards of safety, privacy, and data security.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, store, process, and protect personal and financial information when you visit our website, use our tools and calculators, subscribe to our newsletter (&ldquo;The Journal&rdquo;), or register for our community and distribution services.
                  </p>
                  <p>
                    By accessing or using our services, you consent to the practices described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={50}>
              <div id="information-collected" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">2.</span> Information We Collect
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    To facilitate mutual fund transactions and deliver personalized behavioral coaching, we collect several categories of information:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Identity & Contact Data:</strong> Name, professional email address, phone number, physical address, and communication preferences.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Regulatory & KYC Information:</strong> Permanent Account Number (PAN), date of birth, gender, nationality, signature, bank account details, and KYC status verified via KYC Registration Agencies (KRAs).
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Financial Profile:</strong> Investment objectives, risk tolerance, existing portfolio details, SIP preferences, and transaction histories.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Technical & Usage Data:</strong> Internet Protocol (IP) address, browser details, page interactions, device information, and feedback from interactive calculators.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div id="use-of-information" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">3.</span> How We Use Your Information
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    We process your information to deliver on our promise of wealth-building with absolute integrity. Specifically, we use your data to:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Process and submit your mutual fund applications to Asset Management Companies (AMCs) and RTAs (like CAMS or KFintech).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Verify your KYC details and execute statutory checks required by AMFI, SEBI, and PMLA (Prevention of Money Laundering Act).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Provide support, answer queries, schedule your strategy calls, and deliver updates on your portfolio performance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Send you our newsletter (&ldquo;The Journal&rdquo;) or other educational insights regarding long-term investing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>Enhance our website performance, calculators, and client tools.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div id="sharing-disclosures" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">4.</span> Information Sharing & Disclosures
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    <strong className="text-cream text-sm">We do not sell, rent, trade, or distribute your personal or financial data to third-party marketing companies.</strong>
                  </p>
                  <p>
                    To fulfill your investment instructions, we share your data strictly with the following entities:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Asset Management Companies (AMCs) & RTAs:</strong> Mutual fund houses and Registrar & Transfer Agents (e.g., CAMS, KFintech) to execute and update transactions.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Service Providers:</strong> Technology vendors, SMS/email gateway providers, hosting servers, and scheduling platforms operating under strict confidentiality agreements.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <div>
                        <strong className="text-cream">Regulators & Legal Authorities:</strong> Under the instruction of SEBI, AMFI, tax authorities, or when required by law to prevent fraud, financial abuse, or money laundering.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div id="security-standards" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">5.</span> Security Standards & Storage
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    We employ premium-grade administrative, technical, and physical security measures to safeguard your sensitive information. We use industry-standard encryption protocols (SSL/TLS) for data transmission and store all critical records in secure, firewalled servers.
                  </p>
                  <p>
                    We store your transaction and client data as long as you maintain an active relationship with Ten Crore Club, and for the statutory duration mandated by SEBI / AMFI regulations and legal obligations in India.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div id="user-rights" className="scroll-mt-28 rounded-2xl border border-line bg-ink-card p-8">
                <h2 className="font-display text-2xl text-cream mb-4 flex items-center gap-2">
                  <span className="text-gold">6.</span> Your Rights & Grievance Contact
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-gold-light/80">
                  <p>
                    You have control over how your data is handled. You have the right to access, update, correct, or request deletion of your information, except where statutory regulations mandate us to preserve transactional or client record-keeping details.
                  </p>
                  <p>
                    If you have any questions, wish to opt-out of communications, or have a grievance regarding your data usage, you may contact our Grievance Officer directly:
                  </p>
                  <div className="rounded-xl border border-line bg-ink/40 p-5 mt-4">
                    <p className="font-semibold text-cream">Grievance Desk - Ten Crore Club</p>
                    <p className="text-xs text-gold-light/60 mt-1">Email: contact@tencroreclub.in</p>
                    <p className="text-xs text-gold-light/60">Phone: +91 98765 43210</p>
                    <p className="text-xs text-gold-light/60">Address: Mumbai, India (Serving Nationwide & NRIs)</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
