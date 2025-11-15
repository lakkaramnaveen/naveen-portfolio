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
    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.title} className="project-card">
          <header>
            <h3>{project.title}</h3>
          </header>
          <p>{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          {project.link && (
            <a href={project.link} className="project-card__link">
              View details
            </a>
          )}
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
