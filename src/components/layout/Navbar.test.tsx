// src/components/layout/Navbar.test.tsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar, { NAV_LINKS } from "./Navbar";

describe("Navbar", () => {
  it("renders the header with back-to-top brand link", () => {
    render(<Navbar />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const brandLink = screen.getByRole("link", { name: /back to top/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "#top");
    expect(screen.getByText("Naveen Kumar Lakkaram")).toBeInTheDocument();
  });

  it("renders desktop and mobile navigation landmarks", () => {
    render(<Navbar />);

    const desktopNav = screen.getByRole("navigation", {
      name: /main navigation/i,
    });
    const mobileNav = screen.getByRole("navigation", {
      name: /main navigation mobile/i,
    });

    expect(desktopNav).toBeInTheDocument();
    expect(mobileNav).toBeInTheDocument();
  });

  it("renders all configured navigation links (by label)", () => {
    render(<Navbar />);

    NAV_LINKS.forEach(({ label }) => {
      // Each label appears at least once (desktop and/or mobile).
      const link = screen.getAllByText(label)[0];
      expect(link).toBeInTheDocument();
    });
  });

  it("each navigation link points to the correct href", () => {
    render(<Navbar />);

    NAV_LINKS.forEach(({ label, href }) => {
      // Use getAllByRole to avoid desktop/mobile duplicates ambiguity.
      const links = screen.getAllByRole("link", { name: label });
      expect(links.length).toBeGreaterThan(0);
      links.forEach((link) => {
        expect(link).toHaveAttribute("href", href);
      });
    });
  });
});
