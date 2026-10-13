"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { additionalProjects, projects } from "@/data/projects";
import { easeOut, projectSpring } from "@/lib/animations";

export function ProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % projects.length);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const getCardState = (index: number) => {
    const position = (index - activeIndex + projects.length) % projects.length;
    const desktop = [
      { x: 0, y: -5, rotate: 0, scale: 1, opacity: 1 },
      { x: 34, y: 27, rotate: 1.8, scale: 0.97, opacity: 0.88 },
      { x: -25, y: 52, rotate: -1.6, scale: 0.94, opacity: 0.75 },
      { x: 46, y: 77, rotate: 2.4, scale: 0.91, opacity: 0.62 },
      { x: -38, y: 102, rotate: -2.2, scale: 0.88, opacity: 0.49 },
    ];
    const mobile = [
      { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
      { x: 10, y: 20, rotate: 0.5, scale: 0.985, opacity: 0.88 },
      { x: -7, y: 40, rotate: -0.55, scale: 0.97, opacity: 0.76 },
      { x: 11, y: 60, rotate: 0.7, scale: 0.955, opacity: 0.64 },
      { x: -8, y: 80, rotate: -0.75, scale: 0.94, opacity: 0.52 },
    ];
    return {
      ...(isMobile ? mobile[position] : desktop[position]),
      zIndex: projects.length - position,
    };
  };

  return (
    <section className="work section-shell" id="work" aria-labelledby="work-heading">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Featured projects"
          title="Selected work, stacked by intent."
          description="Choose a card to bring it forward. The deck preserves context while the active project’s evidence comes into focus."
        />
        <h3 id="work-heading" className="sr-only">Featured project deck</h3>

        <div className="project-showcase">
          <div>
            <div
              className="project-deck"
              role="region"
              aria-label="Featured projects"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {projects.map((project, index) => {
                const position = (index - activeIndex + projects.length) % projects.length;
                const active = position === 0;
                return (
                  <motion.div
                    className="project-deck__item"
                    key={project.id}
                    animate={getCardState(index)}
                    transition={reduceMotion ? { duration: 0 } : projectSpring}
                    aria-hidden={false}
                  >
                    <ProjectCard
                      project={project}
                      active={active}
                      onActivate={() => setActiveIndex(index)}
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="project-controls">
              <span aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <div>
                <button type="button" onClick={previous} aria-label="Show previous project">
                  <ArrowLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={next} aria-label="Show next project">
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="project-details" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: easeOut }}
              >
                <div className="project-details__title">
                  <span>Active study / {activeProject.number}</span>
                  <h3>{activeProject.title}</h3>
                </div>

                <dl>
                  <div>
                    <dt>Problem</dt>
                    <dd>{activeProject.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{activeProject.approach}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{activeProject.outcome}</dd>
                  </div>
                </dl>

                <div className="project-details__tech">
                  <span>Technologies</span>
                  <div>
                    {activeProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <ul className="project-details__facts" aria-label="Key features and facts">
                  {activeProject.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>

                {activeProject.disclaimer ? (
                  <p className="project-details__disclaimer">
                    <span>Important</span>
                    {activeProject.disclaimer}
                  </p>
                ) : null}

                <div className="project-details__links" aria-label={`${activeProject.title} links`}>
                  {activeProject.links.map((link) => (
                    <a
                      className="text-link"
                      href={link.href}
                      key={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
        <div className="additional-projects" aria-labelledby="additional-projects-heading">
          <h3 id="additional-projects-heading">More technical projects</h3>
          <div className="additional-projects__grid">
            {additionalProjects.map((project) => (
              <article key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
