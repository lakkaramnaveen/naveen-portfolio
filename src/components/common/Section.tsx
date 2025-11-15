// src/components/common/Section.tsx
import React, { ReactNode } from "react";

export interface SectionProps {
  /** Unique section id, also used to generate the heading's id */
  id: string;
  /** Main heading text for the section */
  title: string;
  /** Optional small label displayed above the title */
  kicker?: string;
  /** Section body content */
  children: ReactNode;
}

/**
 * Layout wrapper for top-level sections.
 *
 * Responsibilities:
 * - Provide a consistent section layout (padding, max-width).
 * - Expose a stable id for in-page anchor navigation (#about, #projects, etc.).
 * - Wire up proper heading semantics and aria-labelledby for accessibility.
 */
const Section: React.FC<SectionProps> = ({ id, title, kicker, children }) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="py-12 sm:py-16 px-4 sm:px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {kicker && (
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-2">
            {kicker}
          </p>
        )}

        <h2
          id={headingId}
          className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6"
        >
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
