// src/components/common/Section.test.tsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  it("renders a section with the given id", () => {
    render(
      <Section id="about" title="About Me">
        <p>Content</p>
      </Section>
    );

    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "about");
  });

  it("uses aria-labelledby to associate the heading with the section", () => {
    render(
      <Section id="skills" title="Skills">
        <p>Skills content</p>
      </Section>
    );

    const section = screen.getByRole("region");
    const heading = screen.getByRole("heading", { name: "Skills" });

    // aria-labelledby should reference the heading's id
    expect(heading).toBeInTheDocument();
    expect(heading.id).toBe("skills-heading");
    expect(section).toHaveAttribute("aria-labelledby", "skills-heading");
  });

  it("renders the title text as an h2", () => {
    render(
      <Section id="projects" title="Projects">
        <p>Projects content</p>
      </Section>
    );

    const heading = screen.getByRole("heading", { level: 2, name: "Projects" });
    expect(heading).toBeInTheDocument();
  });

  it("renders the kicker when provided", () => {
    render(
      <Section id="experience" title="Experience" kicker="Professional Journey">
        <p>Experience content</p>
      </Section>
    );

    const kicker = screen.getByText("Professional Journey");
    expect(kicker).toBeInTheDocument();
  });

  it("does not render a kicker element when kicker is not provided", () => {
    const { container } = render(
      <Section id="contact" title="Contact">
        <p>Contact content</p>
      </Section>
    );

    // No <p> with kicker-specific class when kicker is absent
    const kickerElement = container.querySelector(
      "p.text-[11px].uppercase.tracking-[0.24em].text-slate-400"
    );
    expect(kickerElement).toBeNull();
  });

  it("renders children inside the section body", () => {
    render(
      <Section id="demo" title="Demo">
        <div data-testid="child">Child content</div>
      </Section>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Child content");
  });
});
