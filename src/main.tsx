// src/main.tsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

/**
 * Top-level render function.
 *
 * Extracted into a function for testability and to make it easy to
 * reuse if we ever need to re-mount the app (e.g., for micro-frontend or HMR logic).
 */
export function bootstrapApp(rootElementId: string = "root"): void {
  const container = document.getElementById(rootElementId);

  if (!container) {
    // We fail fast and clearly if the root node is missing.
    // This is better than a cryptic React error.
    // In production you might report this to observability tooling.
    console.error(
      `[bootstrapApp] Failed to find root element with id "${rootElementId}".`
    );
    return;
  }

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading application...</div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

// Immediately bootstrap when running in a browser.
if (typeof document !== "undefined") {
  bootstrapApp();
}
