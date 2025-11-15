// src/components/ErrorBoundary.tsx
import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  /**
   * Optional custom fallback node. Defaults to a generic message.
   */
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * A simple reusable error boundary.
 *
 * We keep it focused: catch errors, show fallback, and log.
 * Any advanced logging/telemetry can be injected later.
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown): void {
    // Intentionally simple. Replace with logging/monitoring (Sentry, Datadog, etc.)
    // in production environments.
    console.error("[ErrorBoundary] Caught error:", error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return (
        fallback ?? (
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              color: "#b00020",
            }}
          >
            <h1>Something went wrong.</h1>
            <p>Please refresh the page or try again later.</p>
          </div>
        )
      );
    }

    return children;
  }
}
