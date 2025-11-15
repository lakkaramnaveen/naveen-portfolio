import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer, { currentYear } from "./Footer";

describe("Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("displays the correct current year", () => {
    render(<Footer />);
    expect(
      screen.getByText(`© ${currentYear} Naveen Kumar Lakkaram`)
    ).toBeInTheDocument();
  });

  it("renders tech stack information", () => {
    render(<Footer />);
    expect(
      screen.getByText(/built with react, tailwind css & three\.js/i)
    ).toBeInTheDocument();
  });
});
