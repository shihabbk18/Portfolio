import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Research } from "@/components/research";
import { siteUrl } from "@/data/portfolio";
export const metadata: Metadata = { title: "Research & Publications | Shihab Bin Kader", alternates: { canonical: `${siteUrl}/research/` } };
export default function ResearchPage() { return <main id="main-content"><PageIntro index="03" label="RESEARCH & PUBLICATIONS" title="Evidence behind the intelligence." description="Explainable computer vision, research collaboration, and a closer look at the work behind the results." sceneLabel="EXPLAINABILITY CORE / XAI" /><div className="route-body"><Research /></div></main>; }
