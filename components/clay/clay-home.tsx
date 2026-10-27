"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, Code2, Database, Eye, Github, Linkedin, Mail, Network } from "lucide-react";
import { type ReactNode, useState } from "react";
import { identity, research, withBasePath } from "@/data/portfolio";
import { featuredProjects, projects } from "@/data/projects";
import { useExperience } from "@/components/experience/experience-provider";
import { ClayIllustration } from "./clay-illustration";
import { ProjectArtwork } from "./project-artwork";

const toolkit = [
  { name: "Python", mark: "Py", color: "#3776ab" },
  { name: "TensorFlow", mark: "TF", color: "#ed8b24" },
  { name: "PyTorch", mark: "PT", color: "#e75c44" },
  { name: "OpenCV", icon: Eye, color: "#4cba7d" },
  { name: "Pandas", icon: Database, color: "#7867bb" },
  { name: "NumPy", icon: Network, color: "#3996b9" },
  { name: "SQL", mark: "SQL", color: "#3a81b9" },
  { name: "Git", icon: Code2, color: "#e66c55" },
  { name: "Streamlit", icon: BrainCircuit, color: "#ed5c76" },
  { name: "FastAPI", mark: "ϟ", color: "#179b8b" },
];
const homeProjects = [...featuredProjects, ...projects.filter((project) => !featuredProjects.includes(project))].slice(0, 6);

export function ClayReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { motionEnabled } = useExperience();
  return <motion.div className={className} initial={motionEnabled ? { opacity: 0, y: 40 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function ClayHome() {
  const [tab, setTab] = useState<"projects" | "research">("projects");
  return <>
    <section className="clay-hero clay-shell" id="top" aria-labelledby="clay-title">
      <div className="clay-hero__copy">
        <p className="clay-greeting">Welcome to Shihab’s Portfolio</p>
        <h1 id="clay-title" tabIndex={-1}>AI Researcher &amp;<br />Computer Vision<br />Developer</h1>
        <p className="clay-introduction">I’m <strong>Shihab Bin Kader.</strong> An aspiring AI researcher and computer vision developer based in <strong>Chattogram, Bangladesh.</strong></p>
        <div className="clay-actions"><Link className="clay-button" href="/work/">Explore my work <ArrowUpRight size={18} /></Link><Link className="clay-text-link" href="/about/">More about me <ArrowRight size={17} /></Link></div>
      </div><ClayIllustration />
    </section>

    <section className="clay-section clay-shell clay-toolkit" aria-labelledby="toolkit-title">
      <ClayReveal><h2 id="toolkit-title" className="clay-heading">Technology Stack</h2><p className="clay-section-copy">From visual data to useful software. These are the tools I use to explore ideas, train models, and bring experiments to life.</p></ClayReveal>
      <div className="clay-tools">{toolkit.map((tool, index) => <ClayReveal key={tool.name} delay={index * 0.055}><Link href="/about/#skills" className="clay-tool" style={{ color: tool.color }}>{tool.icon ? <tool.icon size={65} strokeWidth={1.7} aria-hidden="true" /> : <b aria-hidden="true">{tool.mark}</b>}<span>{tool.name}</span></Link></ClayReveal>)}</div>
    </section>

    <section className="clay-section clay-shell" aria-labelledby="latest-title">
      <ClayReveal><h2 id="latest-title" className="clay-heading">My Latest Projects</h2><p className="clay-section-copy">A little curiosity. A lot of building. Explore my work in computer vision, research tools, and practical AI.</p></ClayReveal>
      <div className="clay-tabs" role="tablist" aria-label="Featured work"><button id="projects-tab" type="button" role="tab" aria-controls="featured-panel" aria-selected={tab === "projects"} tabIndex={tab === "projects" ? 0 : -1} onClick={() => setTab("projects")} onKeyDown={(event) => { if (event.key === "ArrowRight") { setTab("research"); document.getElementById("research-tab")?.focus(); } }}><Code2 size={20} />Projects</button><button id="research-tab" type="button" role="tab" aria-controls="featured-panel" aria-selected={tab === "research"} tabIndex={tab === "research" ? 0 : -1} onClick={() => setTab("research")} onKeyDown={(event) => { if (event.key === "ArrowLeft") { setTab("projects"); document.getElementById("projects-tab")?.focus(); } }}><BookOpen size={20} />Research</button></div>
      <div id="featured-panel" role="tabpanel" aria-labelledby={`${tab}-tab`}>
        {tab === "projects" ? <div className="clay-projects">{homeProjects.map((project, index) => <ClayReveal key={project.id} delay={(index % 3) * 0.1}><Link href={`/work/${project.id}/`} className="clay-project"><ProjectArtwork project={project} /><div className="clay-project__info"><span>{project.category}</span><h3>{project.title}<ArrowUpRight size={20} /></h3><p>{project.focus}</p></div></Link></ClayReveal>)}</div> : <ClayReveal className="clay-research-preview"><span className="clay-kicker">IEEE PUBLICATION / 2025</span><h3>{research.title}</h3><p>{research.summary}</p><p><strong>My contribution:</strong> {research.contribution}</p><Link className="clay-text-link" href="/research/">Explore the research <ArrowUpRight size={18} /></Link></ClayReveal>}
      </div>
      <div className="clay-center"><Link href="/work/" className="clay-button">View all {projects.length} projects <ArrowRight size={18} /></Link></div>
    </section>

    <section className="clay-section clay-shell clay-connect" aria-labelledby="connect-title">
      <ClayReveal><h2 id="connect-title" className="clay-heading">Let’s Connect</h2><p className="clay-section-copy">Have a research opportunity, a question, or an idea in mind? I’d love to hear from you. Let’s make something meaningful together.</p></ClayReveal>
      <div className="clay-connect__scene"><div className="clay-connect__halo" aria-hidden="true" /><ClayIllustration happy />
        <a className="clay-social clay-social--github" href={identity.github} target="_blank" rel="noreferrer" aria-label="Shihab on GitHub"><Image src={withBasePath("/clay/github.webp")} alt="" width={168} height={168} /></a>
        <a className="clay-social clay-social--email" href={`mailto:${identity.email}`} aria-label="Email Shihab"><Image src={withBasePath("/clay/gmail.webp")} alt="" width={168} height={168} /></a>
        <a className="clay-social clay-social--research" href={identity.researchgate} target="_blank" rel="noreferrer" aria-label="Shihab on ResearchGate"><span className="clay-researchgate-mark" aria-hidden="true">R<sup>G</sup></span></a>
        <a className="clay-social clay-social--work" href={identity.linkedin} target="_blank" rel="noreferrer" aria-label="Shihab on LinkedIn"><Linkedin size={66} /></a>
      </div>
      <div className="clay-actions clay-center"><Link className="clay-button" href="/contact/">Say hello <Mail size={17} /></Link><a className="clay-text-link" href={identity.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub</a><a className="clay-text-link" href={identity.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a><a className="clay-text-link" href={identity.researchgate} target="_blank" rel="noreferrer"><BookOpen size={18} />ResearchGate</a></div>
    </section>

    <section className="clay-section clay-shell clay-note"><Image src={withBasePath("/clay/bulb.webp")} alt="" width={100} height={100} /><ClayReveal><p>I’m curious about how machines see, how we can understand their decisions, and how those ideas can become useful tools. This portfolio brings those experiments, questions, and projects together.</p><span>Shihab Bin Kader</span></ClayReveal><Image src={withBasePath("/clay/heart.webp")} alt="" width={100} height={100} /></section>
  </>;
}
