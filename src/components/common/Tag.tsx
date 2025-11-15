import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="tag">{label}</span>
);

export default Tag;
