import React from "react";
import Section from "../common/Section";
import Tag from "../common/Tag";

const skillGroups = [
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

const Skills: React.FC = () => (
  <Section id="skills" title="Skills" kicker="What I work with">
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <div key={group.title} className="skills-group">
          <h3>{group.title}</h3>
          <div className="skills-group__tags">
            {group.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
