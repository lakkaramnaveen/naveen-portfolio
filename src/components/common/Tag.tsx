// src/components/common/Tag.tsx
import React from "react";

export interface TagProps {
  /** Text label for the tag */
  label: string;
}

/**
 * Small UI badge component used to highlight skills, technologies,
 * categories, or statuses.
 *
 * Accessible, lightweight, and fully reusable.
 */
const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span
      role="status"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-slate-600/60 text-[11px] font-medium text-slate-200 bg-slate-900/70 backdrop-blur-sm"
    >
      {label}
    </span>
  );
};

export default Tag;
