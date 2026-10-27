"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, featuredProjects, projectTrack } from "@/data/projects";
import { useExperience } from "@/components/experience/experience-provider";
import { ProjectArtwork } from "@/components/clay/project-artwork";

export function ProjectSceneSelection({ index }: { index: number }) {
  const { selectProject } = useExperience();
  useEffect(() => { selectProject(index); }, [index, selectProject]);
  return null;
}

export function WorkGallery() {
  const { selectedProject, selectProject } = useExperience();
  const selected = projects[selectedProject];
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState("All projects");
  const tracks = ["All projects", ...new Set(projects.map(projectTrack))];
  const ordered = [...featuredProjects, ...projects.filter((project) => !featuredProjects.includes(project))];
  const matching = ordered.filter((project) => (track === "All projects" || projectTrack(project) === track) && `${project.title} ${project.category} ${project.description} ${project.technologies.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  const step = (direction: number) => selectProject((selectedProject + direction + projects.length) % projects.length);
  return <>
    <section className="route-intro gallery-intro" id="top" aria-labelledby="page-title">
      <div className="shell route-intro__layout"><div className="route-intro__copy"><span className="digital-eyebrow">02 / THE PROJECT GALLERY</span><h1 id="page-title" tabIndex={-1}>Ideas made<br /><em>interactive.</em></h1><p>Computer vision, explainable AI, and useful software. Choose a project to explore its story, or search the full collection below.</p>
        <div className="gallery-controls" role="region" aria-label="Project gallery" tabIndex={0} onKeyDown={(event) => { if ((event.target as HTMLElement).closest("select,input")) return; if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); step(event.key === "ArrowLeft" ? -1 : 1); } }}>
          <div className="gallery-controls__top"><span aria-live="polite">{String(selectedProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><div><button type="button" onClick={() => step(-1)} aria-label="Previous gallery project"><ArrowLeft size={17} /></button><button type="button" onClick={() => step(1)} aria-label="Next gallery project"><ArrowRight size={17} /></button></div></div>
          <label className="gallery-picker" htmlFor="gallery-project">Choose a project<select id="gallery-project" value={selectedProject} onChange={(event) => selectProject(Number(event.target.value))}>{projects.map((project, index) => <option key={project.id} value={index}>{project.number} — {project.title}</option>)}</select></label>
        </div>
      </div><div className="route-intro__space clay-gallery-preview" key={selected.id}><ProjectArtwork project={selected} /><span>{selected.title}</span></div></div>
    </section>
    <section className="gallery-detail shell" aria-live="polite" aria-atomic="true"><div><span className="digital-eyebrow">{selected.category}</span><h2>{selected.title}</h2><p>{selected.description}</p><div className="technology-tags">{selected.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div><h3>The outcome</h3><p>{selected.outcome}</p><Link className="button button--primary" href={`/work/${selected.id}/`}>Read case study <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
    <section className="project-index shell" aria-labelledby="project-index-heading"><span className="digital-eyebrow">THE COMPLETE PROJECT COLLECTION / {projects.length} CASE STUDIES</span><h2 id="project-index-heading">Built around a question.</h2>
      <div className="project-search"><label htmlFor="project-search">Search projects<input id="project-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try computer vision, Android, research, Python…" /></label><div className="project-filters" role="group" aria-label="Filter projects by field">{tracks.map((item) => <button type="button" key={item} aria-pressed={track === item} onClick={() => setTrack(item)}>{item}</button>)}</div><p role="status">Showing {matching.length} of {projects.length} projects</p></div>
      <div className="project-index__grid">{matching.map((project) => <Link href={`/work/${project.id}/`} key={project.id} className="project-index__card"><ProjectArtwork project={project} /><span>{projectTrack(project)}{featuredProjects.includes(project) ? " / FEATURED" : ""}</span><h3>{project.title}</h3><p>{project.problem}</p><strong>Explore case study <ArrowUpRight size={15} aria-hidden="true" /></strong></Link>)}</div>
      {!matching.length && <div className="project-empty"><p>No matching projects. Try another term or browse the full collection.</p><button type="button" className="button button--secondary" onClick={() => { setQuery(""); setTrack("All projects"); }}>Show all projects</button></div>}
    </section>
  </>;
}
