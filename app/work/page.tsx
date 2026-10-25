import type { Metadata } from "next";
import { WorkGallery } from "@/components/work-gallery";
import { siteUrl } from "@/data/portfolio";
export const metadata: Metadata = { title: "Projects & Case Studies | Shihab Bin Kader", alternates: { canonical: `${siteUrl}/work/` } };
export default function WorkPage() { return <main id="main-content"><WorkGallery /></main>; }
