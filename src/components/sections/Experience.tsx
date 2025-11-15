// src/components/sections/Experience.tsx
import React from "react";
import Section from "../common/Section";
import TimelineItem from "../common/TimelineItem";

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const experiences: ExperienceEntry[] = [
  {
    title: "Software Engineer 3",
    company: "Walmart · AdTech",
    location: "Sunnyvale, CA",
    period: "Jan 2024 – Present",
    bullets: [
      "Optimized Cosmos DB network calls, reducing infrastructure cost by $9M annually.",
      "Handled latency-critical reads/writes for 900M+ user accounts with high reliability.",
      "Built scalable microservices with Spring Boot, Kafka, and Cosmos DB.",
      "Improved ad-targeting UI using React and Node.js, increasing engagement by 25%.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    company: "Infosys",
    location: "India",
    period: "Jul 2020 – Nov 2022",
    bullets: [
      "Developed scalable services with Spring Boot, React, and Node.js.",
      "Implemented microservices that reduced processing time for key flows by 40%.",
      "Designed REST APIs and improved data retrieval times by 25%.",
      "Led migration from monolith to microservices, boosting maintainability and scalability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "HCL Technologies",
    location: "India",
    period: "Feb 2018 – Mar 2020",
    bullets: [
      "Built full-stack apps using Java Spring MVC and AngularJS.",
      "Created real-time analytics dashboards in React and JSP.",
      "Optimized database queries, improving performance by 20% on high-traffic apps.",
      "Standardized reusable modules, cutting future development time.",
    ],
  },
];

/**
 * Experience section: shows work history using reusable TimelineItem cards.
 *
 * Content is data-driven via the `experiences` array, making it easy to
 * update roles, add new entries, or consume this data elsewhere (e.g. resume export).
 */
const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" kicker="Where I’ve been">
      <div className="space-y-5">
        {experiences.map((exp) => (
          <TimelineItem
            key={`${exp.title}-${exp.company}-${exp.period}`}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
