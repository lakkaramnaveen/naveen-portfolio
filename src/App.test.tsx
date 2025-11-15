// src/App.test.tsx
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock child sections so tests are focused on composition, not each section's internals.
// Adjust text to match your real components if needed.
vi.mock("./components/layout/Navbar", () => ({
  __esModule: true,
  default: () => <header>Navbar</header>,
}));

vi.mock("./components/layout/Footer", () => ({
  __esModule: true,
  default: () => <footer>Footer</footer>,
}));

vi.mock("./components/sections/Hero", () => ({
  __esModule: true,
  default: () => <section>Hero Section</section>,
}));

vi.mock("./components/sections/About", () => ({
  __esModule: true,
  default: () => <section>About Section</section>,
}));

vi.mock("./components/sections/Experience", () => ({
  __esModule: true,
  default: () => <section>Experience Section</section>,
}));

vi.mock("./components/sections/Skills", () => ({
  __esModule: true,
  default: () => <section>Skills Section</section>,
}));

vi.mock("./components/sections/Projects", () => ({
  __esModule: true,
  default: () => <section>Projects Section</section>,
}));

vi.mock("./components/sections/Contact", () => ({
  __esModule: true,
  default: () => <section>Contact Section</section>,
}));

// Mock the lazy-loaded 3D scene so we don't pull in three.js or WebGL in tests.
vi.mock("./three/PortfolioScene", () => ({
  __esModule: true,
  default: () => <div data-testid="portfolio-scene">3D Scene Mock</div>,
}));

// Import AFTER mocks
import App, { ThreeExperienceSection } from "./App";

describe("App", () => {
  beforeEach(() => {
    // Clean up DOM between tests if needed
    document.body.innerHTML = "";
  });

  it("renders the main layout with navbar, sections, and footer", () => {
    render(<App />);

    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Hero Section")).toBeInTheDocument();
    expect(screen.getByText("About Section")).toBeInTheDocument();
    expect(screen.getByText("Experience Section")).toBeInTheDocument();
    expect(screen.getByText("Skills Section")).toBeInTheDocument();
    expect(screen.getByText("Projects Section")).toBeInTheDocument();
    expect(screen.getByText("Contact Section")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("includes the 3D experience section in the DOM", () => {
    render(<App />);

    const threeSection =
      screen.getByRole("region", { hidden: true }) ||
      document.querySelector("#three");
    const byId = document.getElementById("three");
    expect(threeSection || byId).not.toBeNull();
  });

  it("renders the lazy-loaded PortfolioScene within the 3D section", async () => {
    render(<App />);

    // Because PortfolioScene is lazy-loaded, we should wait for it.
    const scene = await screen.findByTestId("portfolio-scene");
    expect(scene).toBeInTheDocument();
    expect(scene).toHaveTextContent("3D Scene Mock");
  });
});

describe("ThreeExperienceSection", () => {
  it("renders loading fallback while suspense is resolving", async () => {
    // To test the fallback, we temporarily mock PortfolioScene as a never-resolving lazy component.
    const OriginalMock = (await vi.importMock("./three/PortfolioScene")) as any;

    // Re-mock with a Promise that never resolves to simulate a still-loading state.
    vi.doMock("./three/PortfolioScene", () => ({
      __esModule: true,
      default: React.lazy(
        () =>
          new Promise(() => {
            // never resolve
          })
      ),
    }));

    const { ThreeExperienceSection: FreshSection } = await import("./App");

    render(<FreshSection />);

    // Fallback should be visible while lazy component is unresolved
    const fallback = screen.getByLabelText("3D experience loading");
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent(/loading 3d experience/i);

    // Restore original mock so we don't affect other tests
    vi.doMock("./three/PortfolioScene", () => OriginalMock);
  });
});
