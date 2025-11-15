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
    <article className="timeline-item">
      <header className="timeline-item__header">
        <div>
          <h3>{title}</h3>
          <p className="timeline-item__company">
            {company}
            {location ? ` · ${location}` : ""}
          </p>
        </div>
        <span className="timeline-item__period">{period}</span>
      </header>
      <ul className="timeline-item__list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
};

export default TimelineItem;
