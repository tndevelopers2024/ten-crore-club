"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-display-md text-gold mb-4 font-display">Something went wrong</h2>
      <p className="text-gold-light/70 mb-8 max-w-md">
        We apologize for the inconvenience. Our team has been notified, and we are working to fix it.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:scale-105 active:scale-95"
      >
        Try again
      </button>
    </div>
  );
}
