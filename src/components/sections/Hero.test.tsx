// src/components/sections/Hero.test.tsx
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero, { heroCtas } from "./Hero";

// Mock Tag to keep focus on Hero behavior rather than Tag internals
vi.mock("../common/Tag", () => ({
  __esModule: true,
  default: ({ label }: { label: string }) => <div>Tag: {label}</div>,
}));

// Mock profile image asset so Vitest doesn't choke on the import
vi.mock("../../assets/profile.png", () => ({
  __esModule: true,
  default: "profile-mock.png",
}));

describe("Hero Section", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the hero heading and intro text", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /building fast, scalable and secure web experiences\./i,
    });

    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(/full-stack engineer with 6\+ years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders the tag label", () => {
    render(<Hero />);
    expect(
      screen.getByText(/tag: full stack java developer/i)
    ).toBeInTheDocument();
  });

  it("renders all hero CTAs with correct labels and hrefs", () => {
    render(<Hero />);

    heroCtas.forEach((cta) => {
      const link = screen.getByRole("link", { name: cta.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", cta.href);
    });
  });

  it("applies external link attributes only to external CTAs", () => {
    render(<Hero />);

    heroCtas.forEach((cta) => {
      const link = screen.getByRole("link", { name: cta.label });

      if (cta.external) {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noreferrer noopener");
      } else {
        expect(link).not.toHaveAttribute("target");
        expect(link).not.toHaveAttribute("rel");
      }
    });
  });

  it("renders the location line", () => {
    render(<Hero />);

    expect(screen.getByText(/based in sunnyvale, ca/i)).toBeInTheDocument();
  });

  it("renders the profile image with correct alt text", () => {
    render(<Hero />);

    const img = screen.getByAltText("Portrait of Naveen Kumar Lakkaram");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "profile-mock.png");
  });
});
