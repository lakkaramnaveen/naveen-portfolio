// src/components/sections/Projects.tsx
import React from "react";
import Section from "../common/Section";
import Tag from "../common/Tag";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "AdTech User Insights Platform",
    description:
      "High-throughput microservices and React dashboards to power targeted advertising for 900M+ users at Walmart.",
    tags: ["Java", "Spring Boot", "Kafka", "React", "Cosmos DB", "AWS"],
  },
  {
    title: "Microservices Migration",
    description:
      "Led migration of a monolithic financial system to microservices, improving scalability and reducing processing time by 40%.",
    tags: ["Spring Cloud", "Docker", "Kubernetes", "MySQL"],
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive KPI dashboards enabling business teams to monitor live metrics and act quickly.",
    tags: ["React", "JSP", "REST APIs"],
  },
  {
    title: "3D Portfolio Experience",
    description:
      "A lightweight 3D scene rendered with react-three-fiber, focused on performance and security.",
    tags: ["React", "Three.js", "react-three-fiber"],
    link: "#three",
  },
];

const Projects: React.FC = () => (
  <Section id="projects" title="Selected work" kicker="What I’ve built">
    <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {projects.map((project) => (
        <article
          key={project.title}
          className="rounded-3xl bg-slate-900/70 border border-slate-700/70 hover:border-indigo-500/60 p-5 flex flex-col justify-between transition-colors"
        >
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-50 mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              className="text-xs text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1 mt-1"
            >
              View details <span aria-hidden="true">↗</span>
            </a>
          )}
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
