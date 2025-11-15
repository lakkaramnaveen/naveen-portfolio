import React from "react";

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, kicker, children }) => {
  return (
    <section id={id} className="section">
      <div className="section__inner">
        {kicker && <p className="section__kicker">{kicker}</p>}
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
