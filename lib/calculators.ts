/**
 * Core financial math — sourced from the uploaded Excel models
 * (MF Investment Calculator + SIP-SWP Cash Flow Model Ver. 5).
 *
 * Convention: returns are entered as annual CAGR percentages (e.g. 12 = 12%).
 * SIPs are modelled as annuity-due (invested at the start of each month).
 */

/** Monthly rate from annual CAGR. */
export const monthlyRate = (annualRate: number): number =>
  Math.pow(1 + annualRate / 100, 1 / 12) - 1;

/** Standard SIP Future Value (no top-up). */
export function sipFV(
  monthly: number,
  years: number,
  annualCAGR: number,
): number {
  const r = monthlyRate(annualCAGR);
  const n = years * 12;
  if (r === 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
}

/** Growing SIP Future Value (with annual % top-up). */
export function growingSIPFV(
  monthly: number,
  years: number,
  annualCAGR: number,
  annualTopUpPct: number,
): number {
  const r = monthlyRate(annualCAGR);
  const g = monthlyRate(annualTopUpPct);
  const n = years * 12;
  if (Math.abs(r - g) < 1e-9) return monthly * n * Math.pow(1 + r, n);
  return (
    (monthly * (Math.pow(1 + r, n) - Math.pow(1 + g, n))) / (r - g) * (1 + r)
  );
}

/** Approximate total invested when stepping up the SIP each year. */
export function growingSIPInvested(
  monthly: number,
  years: number,
  annualTopUpPct: number,
): number {
  if (annualTopUpPct === 0) return monthly * years * 12;
  const t = annualTopUpPct / 100;
  return monthly * 12 * ((Math.pow(1 + t, years) - 1) / t);
}

export interface SIPResult {
  futureValue: number;
  totalInvested: number;
  wealthCreated: number;
  wealthMultiple: number;
}

/** Full SIP result, with optional annual top-up. */
export function calcSIP(
  monthly: number,
  years: number,
  annualCAGR: number,
  annualTopUpPct = 0,
): SIPResult {
  const futureValue =
    annualTopUpPct === 0
      ? sipFV(monthly, years, annualCAGR)
      : growingSIPFV(monthly, years, annualCAGR, annualTopUpPct);
  const totalInvested =
    annualTopUpPct === 0
      ? monthly * years * 12
      : growingSIPInvested(monthly, years, annualTopUpPct);
  return {
    futureValue,
    totalInvested,
    wealthCreated: futureValue - totalInvested,
    wealthMultiple: totalInvested > 0 ? futureValue / totalInvested : 0,
  };
}

/** SIP monthly amount needed to reach a target corpus. */
export function sipRequired(
  target: number,
  years: number,
  annualCAGR: number,
): number {
  const r = monthlyRate(annualCAGR);
  const n = years * 12;
  if (r === 0) return target / n;
  return target / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
}

export interface SWPDuration {
  months: number;
  years: number;
  extraMonths: number;
  totalWithdrawn: number;
  lastsForever: boolean;
}

/**
 * SWP: how long a corpus lasts under a fixed monthly withdrawal
 * (withdrawal taken at month start, growth applied through the month).
 */
export function swpDuration(
  corpus: number,
  monthlyWithdrawal: number,
  annualReturn: number,
): SWPDuration {
  const r = monthlyRate(annualReturn);
  let balance = corpus;
  let months = 0;
  const cap = 75 * 12; // 75 years — treat as effectively perpetual
  while (balance >= monthlyWithdrawal && months < cap) {
    balance = (balance - monthlyWithdrawal) * (1 + r);
    months++;
  }
  return {
    months,
    years: Math.floor(months / 12),
    extraMonths: months % 12,
    totalWithdrawn: monthlyWithdrawal * months,
    lastsForever: months >= cap,
  };
}

/** SWP: corpus needed to sustain a monthly income for a number of years (PV of annuity due). */
export function swpCorpusNeeded(
  monthly: number,
  years: number,
  annualReturn: number,
): number {
  const r = monthlyRate(annualReturn);
  const n = years * 12;
  if (r === 0) return monthly * n;
  return (monthly * (1 - Math.pow(1 + r, -n))) / r * (1 + r);
}

export interface DelayResult {
  valueToday: number;
  valueNextYear: number;
  delayCost: number;
  delayCostLabel: string;
}

/** Delay cost: difference between starting now vs one year later. */
export function calcDelayCost(
  monthlySIP: number,
  totalYears: number,
  returnRate: number,
): DelayResult {
  const valueToday = sipFV(monthlySIP, totalYears, returnRate);
  const valueNextYear = sipFV(monthlySIP, totalYears - 1, returnRate);
  const delayCost = valueToday - valueNextYear;

  let delayCostLabel = "generational wealth for your entire family";
  if (delayCost < 500000) delayCostLabel = "a premium car downpayment";
  else if (delayCost < 1500000)
    delayCostLabel = "your child's complete school education";
  else if (delayCost < 3000000)
    delayCostLabel = "a foreign holiday every year for a decade";
  else if (delayCost < 10000000)
    delayCostLabel = "a luxury apartment downpayment";
  else if (delayCost < 50000000)
    delayCostLabel = "a premium villa in a tier-1 city";
  else if (delayCost < 200000000)
    delayCostLabel = "a luxury beachfront estate";

  return { valueToday, valueNextYear, delayCost, delayCostLabel };
}

export interface TimelinePoint {
  year: number;
  value: number;
  invested: number;
}

/** Year-by-year growth data for charts. */
export function growthTimeline(
  monthly: number,
  maxYears: number,
  annualCAGR: number,
  annualTopUpPct = 0,
): TimelinePoint[] {
  return Array.from({ length: maxYears + 1 }, (_, yr) => ({
    year: yr,
    value:
      yr === 0
        ? 0
        : annualTopUpPct === 0
          ? sipFV(monthly, yr, annualCAGR)
          : growingSIPFV(monthly, yr, annualCAGR, annualTopUpPct),
    invested:
      annualTopUpPct === 0
        ? monthly * yr * 12
        : growingSIPInvested(monthly, yr, annualTopUpPct),
  }));
}

/** Two-series timeline (start today vs start next year) for the delay visualizer. */
export function delayTimeline(
  monthly: number,
  maxYears: number,
  annualCAGR: number,
): { year: number; today: number; delayed: number }[] {
  return Array.from({ length: maxYears + 1 }, (_, yr) => ({
    year: yr,
    today: yr === 0 ? 0 : sipFV(monthly, yr, annualCAGR),
    delayed: yr <= 1 ? 0 : sipFV(monthly, yr - 1, annualCAGR),
  }));
}

export interface LumpsumResult {
  futureValue: number;
  totalInvested: number;
  wealthCreated: number;
  wealthMultiple: number;
}

/** Lumpsum Compound Growth calculation. */
export function calcLumpsum(
  initial: number,
  years: number,
  annualCAGR: number,
): LumpsumResult {
  const futureValue = initial * Math.pow(1 + annualCAGR / 100, years);
  const totalInvested = initial;
  return {
    futureValue,
    totalInvested,
    wealthCreated: futureValue - totalInvested,
    wealthMultiple: totalInvested > 0 ? futureValue / totalInvested : 0,
  };
}

/** Year-by-year lumpsum growth data for charts. */
export function lumpsumTimeline(
  initial: number,
  maxYears: number,
  annualCAGR: number,
): TimelinePoint[] {
  return Array.from({ length: maxYears + 1 }, (_, yr) => ({
    year: yr,
    value: initial * Math.pow(1 + annualCAGR / 100, yr),
    invested: initial,
  }));
}
