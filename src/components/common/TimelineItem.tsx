// src/components/common/TimelineItem.tsx
import React from "react";

export interface TimelineItemProps {
  /** Job title or position */
  title: string;
  /** Company or organization name */
  company: string;
  /** Optional location (City, State, or Remote) */
  location?: string;
  /** Period of employment (e.g., 2022–2024) */
  period: string;
  /** Bullet points describing responsibilities or achievements */
  bullets: string[];
}

/**
 * A resume/experience timeline card used in the Experience section.
 *
 * Provides:
 * - Accessible headings
 * - Semantic article/header structure
 * - Clean bullet list
 * - Smooth hover styling for UX polish
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  bullets,
}) => {
  const headingId = `${title.replace(/\s+/g, "-").toLowerCase()}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="rounded-2xl bg-slate-900/80 border border-slate-700/70 hover:border-indigo-500/70 transition-colors p-4 sm:p-5 shadow-soft-lg"
    >
      <header className="flex flex-wrap justify-between gap-2 items-baseline mb-2">
        <div>
          <h3
            id={headingId}
            className="text-base sm:text-lg font-semibold text-slate-50"
          >
            {title}
          </h3>

          <p className="text-sm text-slate-400">
            {company}
            {location ? ` · ${location}` : ""}
          </p>
        </div>

        <span className="text-[11px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-700/70 whitespace-nowrap">
          {period}
        </span>
      </header>

      <ul className="mt-2 pl-4 space-y-1.5 text-sm text-slate-200 list-disc">
        {bullets.map((bullet, index) => (
          <li key={`${index}-${bullet.substring(0, 15)}`}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
};

export default TimelineItem;
