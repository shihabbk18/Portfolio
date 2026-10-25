import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { FocusAreas } from "@/components/focus-areas";
import { siteUrl } from "@/data/portfolio";
export const metadata: Metadata = { title: "About & Experience | Shihab Bin Kader", alternates: { canonical: `${siteUrl}/about/` } };
export default function AboutPage() { return <main id="main-content"><PageIntro index="01" label="THE PERSON BEHIND THE PROJECTS" title="Curiosity is the starting point." description="A Computer Science and Engineering graduate exploring how machines see, how models explain, and how research becomes useful software." sceneLabel="KNOWLEDGE TIMELINE / 2020–2025" /><div className="route-body"><About /><Education /><Skills /><FocusAreas /></div></main>; }
