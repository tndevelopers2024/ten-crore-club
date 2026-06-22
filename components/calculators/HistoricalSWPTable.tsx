"use client";

import { useMemo, useState } from "react";
import { Search, ArrowUpDown, ArrowUp, ArrowDown, Info } from "lucide-react";
import { historicalSWPData } from "@/data/historical-swp";
import { formatINR, formatPct } from "@/lib/formatters";
import { cn } from "@/lib/utils";

type HorizonKey = "5" | "10" | "15";

interface PeriodMeta {
  investmentDate: string;
  swpStartDate: string;
  instalments: number;
  withdrawn: number;
  label: string;
}

const horizonMeta: Record<HorizonKey, PeriodMeta> = {
  "5": {
    label: "5 Years",
    investmentDate: "21-Jun-2021",
    swpStartDate: "01-Jul-2021",
    instalments: 60,
    withdrawn: 36000000,
  },
  "10": {
    label: "10 Years",
    investmentDate: "21-Jun-2016",
    swpStartDate: "01-Jul-2016",
    instalments: 120,
    withdrawn: 72000000,
  },
  "15": {
    label: "15 Years",
    investmentDate: "21-Jun-2011",
    swpStartDate: "01-Jul-2011",
    instalments: 180,
    withdrawn: 108000000,
  },
};

type SortField = "schemeName" | "xirr" | "remainingValue" | "totalWealth";

export function HistoricalSWPTable() {
  const [horizon, setHorizon] = useState<HorizonKey>("5");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("xirr");
  const [sortAsc, setSortAsc] = useState(false);

  const activeMeta = horizonMeta[horizon];

  // Process raw data for the active horizon
  const rows = useMemo(() => {
    return historicalSWPData.map((fund) => {
      const dataForPeriod =
        horizon === "5"
          ? fund.fiveYears
          : horizon === "10"
            ? fund.tenYears
            : fund.fifteenYears;

      if (!dataForPeriod || dataForPeriod.remainingValue === null || dataForPeriod.xirr === null) {
        return {
          schemeName: fund.schemeName,
          withdrawn: null,
          remainingValue: null,
          xirr: null,
          totalWealth: null,
          isNA: true,
        };
      }

      return {
        schemeName: fund.schemeName,
        withdrawn: dataForPeriod.withdrawn,
        remainingValue: dataForPeriod.remainingValue,
        xirr: dataForPeriod.xirr,
        totalWealth: dataForPeriod.remainingValue + dataForPeriod.withdrawn,
        isNA: false,
      };
    });
  }, [horizon]);

  // Filter and sort rows
  const sortedAndFilteredRows = useMemo(() => {
    const filtered = rows.filter((r) =>
      r.schemeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      // NA values always go to the bottom
      if (a.isNA && !b.isNA) return 1;
      if (!a.isNA && b.isNA) return -1;
      if (a.isNA && b.isNA) return a.schemeName.localeCompare(b.schemeName);

      if (sortField === "schemeName") {
        return sortAsc
          ? a.schemeName.localeCompare(b.schemeName)
          : b.schemeName.localeCompare(a.schemeName);
      }

      const valA = a[sortField] as number;
      const valB = b[sortField] as number;

      return sortAsc ? valA - valB : valB - valA;
    });

    return filtered;
  }, [rows, searchQuery, sortField, sortAsc]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // Default to desc for values, asc for text
    }
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="ml-1 size-3.5 opacity-40 group-hover:opacity-100" />;
    return sortAsc ? (
      <ArrowUp className="ml-1 size-3.5 text-gold" />
    ) : (
      <ArrowDown className="ml-1 size-3.5 text-gold" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Upper Meta-Information & Controls */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-line bg-ink-card p-5">
          <p className="text-xs font-medium text-gold-light/60">Initial Lumpsum Capital</p>
          <p className="mt-1.5 font-mono text-3xl font-bold text-cream">₹10.00 Crore</p>
          <p className="mt-1 text-xs text-gold-light/45">Invested on {activeMeta.investmentDate}</p>
        </div>

        <div className="rounded-lg border border-line bg-ink-card p-5">
          <p className="text-xs font-medium text-gold-light/60">Monthly Payout (SWP)</p>
          <p className="mt-1.5 font-mono text-3xl font-bold text-gold">₹6.00 Lakhs</p>
          <p className="mt-1 text-xs text-gold-light/45">7.2% Initial annual withdrawal rate</p>
        </div>

        <div className="rounded-lg border border-line bg-ink-card p-5">
          <p className="text-xs font-medium text-gold-light/60">Total Cash Paid Out</p>
          <p className="mt-1.5 font-mono text-3xl font-bold text-cream">
            {formatINR(activeMeta.withdrawn, false)}
          </p>
          <p className="mt-1 text-xs text-gold-light/45">
            {activeMeta.instalments} monthly withdrawals since {activeMeta.swpStartDate}
          </p>
        </div>
      </div>

      {/* Control bar: Horizon picker and search input */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Horizon Picker */}
        <div className="flex rounded-md border border-line bg-ink p-1 self-start">
          {(["5", "10", "15"] as HorizonKey[]).map((h) => (
            <button
              key={h}
              onClick={() => setHorizon(h)}
              className={cn(
                "rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                horizon === h
                  ? "bg-gold text-on-accent shadow"
                  : "text-gold-light/60 hover:text-gold"
              )}
            >
              {horizonMeta[h].label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full max-w-sm">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="size-4 text-gold-light/40" />
          </span>
          <input
            type="text"
            placeholder="Search mutual funds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-line bg-ink py-2 pl-9 pr-4 text-sm text-cream placeholder:text-gold-light/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/40"
          />
        </div>
      </div>

      {/* Interactive Table Container */}
      <div className="relative overflow-hidden rounded-xl border border-line bg-ink-card">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full border-collapse text-left text-sm text-gold-light">
            <thead>
              <tr className="border-b border-line bg-ink/40 text-xs font-medium uppercase tracking-wider text-gold-light/50">
                <th className="py-4 pl-6 pr-4">
                  <button
                    onClick={() => handleSort("schemeName")}
                    className="group flex items-center hover:text-gold font-semibold cursor-pointer"
                  >
                    Mutual Fund Scheme {renderSortIcon("schemeName")}
                  </button>
                </th>
                <th className="px-4 py-4 text-right">
                  <button
                    onClick={() => handleSort("xirr")}
                    className="group ml-auto flex items-center hover:text-gold font-semibold cursor-pointer"
                  >
                    XIRR (%) {renderSortIcon("xirr")}
                  </button>
                </th>
                <th className="px-4 py-4 text-right">
                  <span className="font-semibold">Withdrawn (Total)</span>
                </th>
                <th className="px-4 py-4 text-right">
                  <button
                    onClick={() => handleSort("remainingValue")}
                    className="group ml-auto flex items-center hover:text-gold font-semibold cursor-pointer"
                  >
                    Remaining Value {renderSortIcon("remainingValue")}
                  </button>
                </th>
                <th className="py-4 pl-4 pr-6 text-right">
                  <button
                    onClick={() => handleSort("totalWealth")}
                    className="group ml-auto flex items-center hover:text-gold font-semibold cursor-pointer"
                  >
                    Total Wealth {renderSortIcon("totalWealth")}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/75">
              {sortedAndFilteredRows.length > 0 ? (
                sortedAndFilteredRows.map((row) => (
                  <tr
                    key={row.schemeName}
                    className={cn(
                      "transition-colors hover:bg-gold/[0.02]",
                      row.isNA && "opacity-40 hover:bg-transparent"
                    )}
                  >
                    <td className="py-4.5 pl-6 pr-4 font-medium text-cream sm:max-w-xs md:max-w-sm xl:max-w-md truncate">
                      {row.schemeName}
                    </td>

                    {row.isNA ? (
                      <>
                        <td className="px-4 py-4.5 text-right font-mono">—</td>
                        <td className="px-4 py-4.5 text-right font-mono">—</td>
                        <td className="px-4 py-4.5 text-right font-mono">—</td>
                        <td className="py-4.5 pl-4 pr-6 text-right font-mono text-xs italic text-gold-light/40">
                          Not Launched
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-4 py-4.5 text-right">
                          <span
                            className={cn(
                              "inline-flex items-center rounded px-2 py-0.5 font-mono font-semibold tnum",
                              (row.xirr ?? 0) >= 12
                                ? "bg-gold/10 text-gold"
                                : "bg-ink-elevated text-gold-light/80"
                            )}
                          >
                            {row.xirr !== null && formatPct(row.xirr)}
                          </span>
                        </td>
                        <td className="px-4 py-4.5 text-right font-mono text-cream/70 tnum">
                          {row.withdrawn !== null && formatINR(row.withdrawn)}
                        </td>
                        <td className="px-4 py-4.5 text-right font-mono font-semibold text-cream tnum">
                          {row.remainingValue !== null && formatINR(row.remainingValue)}
                        </td>
                        <td className="py-4.5 pl-4 pr-6 text-right">
                          <div className="flex flex-col items-end">
                            <span className="font-mono font-bold text-gold tnum">
                              {row.totalWealth !== null && formatINR(row.totalWealth)}
                            </span>
                            <span className="text-[11px] text-gold-light/40">
                              {row.totalWealth !== null &&
                                `${(row.totalWealth / 100000000).toFixed(2)}x principal`}
                            </span>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gold-light/45">
                    No mutual funds matched your query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Safety / educational message callout */}
      <div className="flex gap-3 rounded-lg border border-gold/20 bg-gold/[0.02] p-4 text-xs text-gold-light/70 sm:p-5">
        <Info className="size-5 shrink-0 text-gold/80" />
        <div className="space-y-1">
          <p className="font-semibold text-gold">Why do these funds sustain ₹6 Lakhs/month SWP?</p>
          <p className="leading-relaxed">
            By deploying capital into <strong>Hybrid and Multi-Asset classes</strong>, the portfolio is
            structurally protected from <strong>Sequence of Returns Risk</strong>. Active rebalancing across
            equity, debt, gold, and arbitrage prevents excessive unit redemption during market downturns, allowing the remaining units to compound perpetually.
          </p>
        </div>
      </div>
    </div>
  );
}
