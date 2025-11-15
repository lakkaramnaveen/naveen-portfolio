// src/components/ErrorBoundary.test.tsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

const Boom: React.FC = () => {
  throw new Error("Boom");
};

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>safe content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("safe content")).toBeInTheDocument();
  });

  it("renders default fallback when a child throws", () => {
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders custom fallback when provided and a child throws", () => {
    render(
      <ErrorBoundary fallback={<div>custom fallback</div>}>
        <Boom />
      </ErrorBoundary>
    );

    expect(screen.getByText("custom fallback")).toBeInTheDocument();
  });
});
