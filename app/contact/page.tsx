import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Contact } from "@/components/contact";
import { siteUrl } from "@/data/portfolio";
export const metadata: Metadata = { title: "Contact | Shihab Bin Kader", alternates: { canonical: `${siteUrl}/contact/` } };
export default function ContactPage() { return <main id="main-content"><PageIntro index="04" label="OPEN A CHANNEL" title="Good work starts with a conversation." description="Exploring a research opportunity, an AI internship, or a project that could use a fresh perspective? Let’s talk." sceneLabel="COMMUNICATION TERMINAL / ONLINE" /><div className="route-body"><Contact /></div></main>; }
