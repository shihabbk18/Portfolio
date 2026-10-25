import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { projects } from "@/data/projects";

export default function Home() {
  return <main id="main-content"><Hero />
    <section className="home-explore shell" id="explore" aria-labelledby="explore-heading"><span className="digital-eyebrow">A CONNECTED RESEARCH PRACTICE</span><h2 id="explore-heading">See. Understand. Build.</h2>
      <div className="home-destinations">{[{ number: "01", title: "The background", copy: "Education, research interests, and the toolkit behind the work.", href: "/about/" }, { number: "02", title: "The experiments", copy: "Practical systems in computer vision, explainability, and software.", href: "/work/" }, { number: "03", title: "The evidence", copy: "Published work, research contributions, and ongoing studies.", href: "/research/" }].map((item) => <Link href={item.href} key={item.number}><span>{item.number} / EXPLORE</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div>
    </section>
    <section className="home-featured shell" aria-labelledby="featured-heading"><div><span className="digital-eyebrow">SELECTED WORK</span><h2 id="featured-heading">Intelligence in practice.</h2><Link href="/work/" className="text-link">Enter the 3D gallery <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      <div className="home-project-list">{projects.slice(0, 3).map((project) => <Link href={`/work/${project.id}/`} key={project.id}><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.focus}</p></div><ArrowUpRight aria-hidden="true" /></Link>)}</div>
    </section>
    <section className="home-invitation shell"><span className="digital-eyebrow">HAVE A QUESTION?</span><h2>Let’s explore it together.</h2><p>Open to graduate research, AI internships, and meaningful collaboration.</p><Link className="button button--primary" href="/contact/">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></Link></section>
  </main>;
}
