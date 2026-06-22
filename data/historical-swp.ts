export interface FundSWPPerformance {
  schemeName: string;
  fiveYears: {
    instalments: number;
    withdrawn: number;
    remainingValue: number;
    xirr: number;
  };
  tenYears: {
    instalments: number;
    withdrawn: number;
    remainingValue: number | null;
    xirr: number | null;
  } | null;
  fifteenYears: {
    instalments: number;
    withdrawn: number;
    remainingValue: number | null;
    xirr: number | null;
  } | null;
}

export const historicalSWPData: FundSWPPerformance[] = [
  {
    schemeName: "ICICI Prudential Multi-Asset Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 167790295.78, xirr: 17.58 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 258355886.11, xirr: 15.47 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 389928202.52, xirr: 14.24 },
  },
  {
    schemeName: "ICICI Prudential Equity & Debt Fund - Regular Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 161780270.05, xirr: 16.83 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 250383281.25, xirr: 15.17 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 472651323.45, xirr: 15.39 },
  },
  {
    schemeName: "ICICI Prudential Retirement Fund - Hybrid Aggressive Plan - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 152301903.23, xirr: 15.59 },
    tenYears: null,
    fifteenYears: null,
  },
  {
    schemeName: "Bank of India Mid & Small Cap Equity & Debt Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 149928273.13, xirr: 15.28 },
    tenYears: null,
    fifteenYears: null,
  },
  {
    schemeName: "Nippon India Multi Asset Allocation Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 149160015.02, xirr: 15.17 },
    tenYears: null,
    fifteenYears: null,
  },
  {
    schemeName: "HDFC Balanced Advantage Fund Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 148737913.91, xirr: 15.12 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 224627613.13, xirr: 14.17 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 274257641.96, xirr: 12.25 },
  },
  {
    schemeName: "SBI Multi Asset Allocation Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 136337775.84, xirr: 13.38 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 153837764.38, xirr: 10.88 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 210376300.20, xirr: 10.86 },
  },
  {
    schemeName: "Edelweiss Aggressive Hybrid Fund - Plan B - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 136197138.72, xirr: 13.36 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 180419700.93, xirr: 12.23 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 220534388.33, xirr: 11.10 },
  },
  {
    schemeName: "ICICI Prudential Childrens Fund",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 135948484.69, xirr: 13.33 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 167971621.94, xirr: 11.62 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 295429156.56, xirr: 12.66 },
  },
  {
    schemeName: "Edelweiss Aggressive Hybrid Fund - Regular Plan - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 135768051.37, xirr: 13.30 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 179839922.81, xirr: 12.20 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 219580003.70, xirr: 11.08 },
  },
  {
    schemeName: "TATA Multi Asset Allocation Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 128865536.85, xirr: 12.28 },
    tenYears: null,
    fifteenYears: null,
  },
  {
    schemeName: "SBI Retirement Benefit Fund Aggressive Hybrid Plan - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 126410639.25, xirr: 11.91 },
    tenYears: null,
    fifteenYears: null,
  },
  {
    schemeName: "Kotak Aggressive Hybrid Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 124877863.85, xirr: 11.68 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 182590394.71, xirr: 12.33 },
    fifteenYears: null,
  },
  {
    schemeName: "Nippon India Aggressive Hybrid Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 122330450.65, xirr: 11.28 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 127538547.26, xirr: 9.36 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 232204030.02, xirr: 11.37 },
  },
  {
    schemeName: "HDFC Multi-Asset Allocation Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 120982338.09, xirr: 11.07 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 145534660.68, xirr: 10.42 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 182035882.63, xirr: 10.14 },
  },
  {
    schemeName: "SBI Equity Hybrid Fund - Gr",
    fiveYears: { instalments: 60, withdrawn: 36000000, remainingValue: 120469218.19, xirr: 10.99 },
    tenYears: { instalments: 120, withdrawn: 72000000, remainingValue: 176296821.93, xirr: 12.03 },
    fifteenYears: { instalments: 180, withdrawn: 108000000, remainingValue: 332625439.98, xirr: 13.33 },
  },
];
