// src/components/sections/Skills.tsx
import React from "react";
import Section from "../common/Section";
import Tag from "../common/Tag";

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java 8+", "TypeScript", "JavaScript ES6", "C#", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring Cloud", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Cassandra"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "APIs & Security",
    skills: ["REST", "OAuth2", "JWT", "Swagger"],
  },
];

/**
 * Skills section: grouped tech stack chips in a responsive grid.
 */
const Skills: React.FC = () => (
  <Section id="skills" title="Skills" kicker="What I work with">
    <div
      className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Skill groups"
    >
      {skillGroups.map((group) => {
        const headingId = getSkillGroupHeadingId(group.title);

        return (
          <section
            key={group.title}
            aria-labelledby={headingId}
            className="rounded-3xl bg-slate-900/70 border border-slate-700/70 hover:border-indigo-500/60 p-5 transition-colors"
          >
            <h3
              id={headingId}
              className="text-sm font-semibold text-slate-50 mb-3"
            >
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Tag key={`${group.title}-${skill}`} label={skill} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </Section>
);

function getSkillGroupHeadingId(title: string): string {
  return `skills-${title.replace(/\s+/g, "-").toLowerCase()}-heading`;
}

export default Skills;
