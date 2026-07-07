"use client";

import { useEffect } from "react";

// In Next.js 15 (React 19), rendering a script tag for FOUC prevention (like theme initialization)
// causes a development-only console warning. This component suppresses that specific warning 
// so the Next.js dev overlay doesn't block the screen.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag while rendering React component")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeScriptWarningSuppressor() {
  return null;
}
