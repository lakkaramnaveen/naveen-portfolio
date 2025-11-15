import React from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  bullets,
}) => {
  return (
    <article className="rounded-2xl bg-slate-900/80 border border-slate-700/70 hover:border-indigo-500/70 transition-colors p-4 sm:p-5 shadow-soft-lg">
      <header className="flex flex-wrap justify-between gap-2 items-baseline mb-2">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-50">
            {title}
          </h3>
          <p className="text-sm text-slate-400">
            {company}
            {location ? ` · ${location}` : ""}
          </p>
        </div>
        <span className="text-[11px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-700/70">
          {period}
        </span>
      </header>
      <ul className="mt-2 pl-4 space-y-1.5 text-sm text-slate-200 list-disc">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
};

export default TimelineItem;
