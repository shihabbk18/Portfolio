import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/portfolio";
import { PageIntro } from "@/components/page-intro";
import { ProjectSceneSelection } from "@/components/work-gallery";
import { ProjectArtwork } from "@/components/clay/project-artwork";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map((project) => ({ slug: project.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  return { title: `${project?.title ?? "Project"} | Shihab Bin Kader`, description: project?.description, alternates: { canonical: `${siteUrl}/work/${slug}/` } };
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.id === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return <main id="main-content"><ProjectSceneSelection index={index} /><PageIntro index={project.number} label={project.category} title={project.title} description={project.description} sceneLabel="PROJECT CASE STUDY" artwork={<ProjectArtwork project={project} />}><Link href="/work/" className="button button--secondary"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link></PageIntro>
    <article className="case-study shell"><div className="case-study__main"><span className="digital-eyebrow">THE CASE STUDY</span>{[{ title: "The problem", text: project.problem }, { title: "The approach", text: project.approach }, { title: "The outcome", text: project.outcome }].map((item, i) => <section key={item.title}><span>0{i + 1}</span><h2>{item.title}</h2><p>{item.text}</p></section>)}{project.disclaimer && <p className="case-study__note">{project.disclaimer}</p>}</div><aside className="case-study__aside"><h2>Project toolkit</h2><div className="technology-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><h2>Key features</h2><ul>{project.keyFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul><div className="case-study__links">{project.links.map((link) => <a key={link.href} className="button button--secondary" href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div></aside></article>
    <div className="shell case-study__next"><span>CONTINUE EXPLORING</span><Link href={`/work/${next.id}/`}>{next.title} <ArrowUpRight aria-hidden="true" /></Link></div></main>;
}
