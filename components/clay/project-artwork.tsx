import { BookOpen, BrainCircuit, Eye, Flag, Hand, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";

/** Editorial project covers, not screenshots or measured model results. */
export function ProjectArtwork({ project }: { project: Project }) {
  const kind = project.id === "fun-with-flags" ? "flags" : project.id === "litweaver-ai" ? "books" : project.id === "gesturecam-fx" ? "hand" : project.id.includes("med") ? "health" : project.id.includes("model") ? "brain" : "vision";
  const Icon = { flags: Flag, books: BookOpen, hand: Hand, health: ShieldCheck, brain: BrainCircuit, vision: Eye }[kind];
  return <div className={`clay-artwork clay-artwork--${kind}`} aria-hidden="true"><div className="clay-artwork__browser"><div className="clay-artwork__bar"><i /><i /><i /><span>{project.title}</span></div><div className="clay-artwork__canvas"><div className="clay-artwork__orb" /><div className="clay-artwork__icon"><Icon size={72} strokeWidth={1.4} /></div><div className="clay-artwork__lines"><i /><i /><i /></div><div className="clay-artwork__chip">{project.technologies[0]}</div></div></div><span className="clay-artwork__caption">{kind === "flags" ? "LEARN • PLAY • EXPLORE" : kind === "books" ? "CONNECTING RESEARCH" : kind === "hand" ? "MOVE. CREATE. INTERACT." : "IDEAS INTO PRACTICE"}</span></div>;
}
