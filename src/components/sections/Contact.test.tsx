import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact, { contactLinks } from "./Contact";

describe("Contact Section", () => {
  it("renders the section heading and kicker", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Contact" })
    ).toBeInTheDocument();
    expect(screen.getByText("Let’s work together")).toBeInTheDocument();
  });

  it("renders introductory text", () => {
    render(<Contact />);
    expect(
      screen.getByText(/full-time roles and collaborations/i)
    ).toBeInTheDocument();
  });

  it("renders all contact links defined in contactLinks", () => {
    render(<Contact />);

    contactLinks.forEach(({ label }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
    });
  });

  it("applies external link attributes correctly", () => {
    render(<Contact />);

    contactLinks
      .filter((l) => l.external)
      .forEach((l) => {
        const link = screen.getByRole("link", { name: l.label });
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noreferrer noopener");
      });
  });

  it("does not apply external attributes to non-external links", () => {
    render(<Contact />);

    contactLinks
      .filter((l) => !l.external)
      .forEach((l) => {
        const link = screen.getByRole("link", { name: l.label });
        expect(link).not.toHaveAttribute("target");
        expect(link).not.toHaveAttribute("rel");
      });
  });
});
