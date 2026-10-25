"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { projects, additionalProjects } from "@/data/projects";
import { useExperience } from "@/components/experience/experience-provider";

export function ProjectSceneSelection({ index }: { index: number }) {
  const { selectProject } = useExperience();
  useEffect(() => { selectProject(index); }, [index, selectProject]);
  return null;
}

export function WorkGallery() {
  const { selectedProject, selectProject } = useExperience();
  const selected = projects[selectedProject];
  const step = (direction: number) => selectProject((selectedProject + direction + projects.length) % projects.length);
  return <>
    <section className="route-intro gallery-intro" id="top" aria-labelledby="page-title">
      <div className="shell route-intro__layout"><div className="route-intro__copy"><span className="digital-eyebrow">02 / THE PROJECT GALLERY</span><h1 id="page-title" tabIndex={-1}>Ideas made<br /><em>interactive.</em></h1><p>Computer vision, explainable AI, and useful software. Choose a project to rotate the gallery and explore its story.</p>
        <div className="gallery-controls" role="region" aria-label="3D project gallery" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); step(event.key === "ArrowLeft" ? -1 : 1); } }}>
          <div className="gallery-controls__top"><span aria-live="polite">{String(selectedProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><div><button type="button" onClick={() => step(-1)} aria-label="Previous gallery project"><ArrowLeft size={17} /></button><button type="button" onClick={() => step(1)} aria-label="Next gallery project"><ArrowRight size={17} /></button></div></div>
          <div className="gallery-dots">{projects.map((project, index) => <button key={project.id} type="button" aria-label={`Select ${project.title}`} aria-pressed={index === selectedProject} onClick={() => selectProject(index)}>{project.number}</button>)}</div>
        </div>
      </div><div className="route-intro__space" aria-hidden="true"><span>PROJECT ARRAY / INTERACTIVE</span><small>USE THE ARROWS TO ROTATE</small></div></div>
    </section>
    <section className="gallery-detail shell" aria-live="polite" aria-atomic="true"><div><span className="digital-eyebrow">{selected.category}</span><h2>{selected.title}</h2><p>{selected.description}</p><div className="technology-tags">{selected.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div><h3>The outcome</h3><p>{selected.outcome}</p><Link className="button button--primary" href={`/work/${selected.id}/`}>Read case study <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
    <section className="project-index shell" aria-labelledby="project-index-heading"><span className="digital-eyebrow">EXPLORE EVERY PROJECT</span><h2 id="project-index-heading">Built around a question.</h2><div className="project-index__grid">{projects.map((project) => <Link href={`/work/${project.id}/`} key={project.id} className="project-index__card"><span>{project.number} / {project.focus}</span><h3>{project.title}</h3><p>{project.problem}</p><strong>Explore case study <ArrowUpRight size={15} aria-hidden="true" /></strong></Link>)}</div></section>
    <section className="additional-projects shell"><h2>More technical projects</h2><div className="additional-projects__grid">{additionalProjects.map((project) => <article key={project.title}><h3>{project.title}</h3><p>{project.description}</p></article>)}</div></section>
  </>;
}
