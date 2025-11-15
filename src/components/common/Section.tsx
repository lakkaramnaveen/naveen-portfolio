// src/components/common/Section.tsx
import React from "react";

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, kicker, children }) => {
  return (
    <section id={id} className="py-12 sm:py-16 px-4 sm:px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {kicker && (
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-2">
            {kicker}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
