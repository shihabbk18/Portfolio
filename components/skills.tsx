"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(1);

  return (
    <section className="skills section-shell" id="skills" aria-labelledby="skills-heading">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="A practical research toolkit."
          description="Tools for model development, data analysis, software delivery, and technical communication."
        />
        <h3 id="skills-heading" className="sr-only">Technical skills</h3>

        <div className="skills-matrix">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`skill-group ${activeGroup === index ? "skill-group--active" : ""}`}
              onMouseEnter={() => setActiveGroup(index)}
              onFocus={() => setActiveGroup(index)}
            >
              <button
                type="button"
                aria-expanded={activeGroup === index}
                onClick={() => setActiveGroup(index)}
              >
                <span>{group.index}</span>
                <h3>{group.title}</h3>
                <i aria-hidden="true" />
              </button>
              <div className="skill-group__tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
