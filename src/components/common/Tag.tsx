import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-slate-600/60 text-[11px] font-medium text-slate-200 bg-slate-900/70 backdrop-blur-sm">
    {label}
  </span>
);

export default Tag;
