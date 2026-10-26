import { about, additionalResearch, education, identity, languages, research } from "@/data/portfolio";
import { additionalProjects, projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export type Answer = { text: string; link?: { label: string; href: string }; projectId?: string };
const internal = (label: string, path: string) => ({ label, href: path });
const aliases: Record<string, string[]> = {
  "gesturecam-fx": ["gesturecam", "gesture cam", "gesturecam fx"],
  "startup-pilot-ai": ["startuppilot", "startup pilot", "startup-pilot"],
  "model-dna": ["modeldna", "model dna", "model-dna"],
  "sign-sense": ["sign sense", "sign-sense", "asl", "sign language"],
  "medsafe-lens": ["medsafe", "medicine safety", "medsafe lens"],
};

export function answerQuestion(question: string, previousProject?: string): Answer {
  const q = question.toLowerCase().replace(/[’']/g, "").trim().slice(0, 600);
  const unknown = { text: "I don’t have verified information about that. I can help with Shihab’s education, research, skills, projects, CV, and contact details.", link: internal("Contact Shihab", "/contact/") };
  if (/\b(cgpa|gpa|grades?|marks?|academic scores?)\b/.test(q)) return { text: "Academic grades aren’t shared on this portfolio. I can tell you about Shihab’s education, research, and projects.", link: internal("Education & background", "/about/") };
  if (/\b(salary|age|birthday|married|password|secret|phone|address|employer|visa)\b/.test(q)) return unknown;
  if (/\b(hello|hi|hey|help)\b/.test(q) && q.split(/\s+/).length < 5) return { text: "Hi! I’m Orbit, Shihab’s portfolio guide. Ask about his research, education, skills, or a project such as GestureCam FX or ModelDNA." };
  const namedProject = projects.find((project) => (aliases[project.id] ?? [project.title.toLowerCase()]).some((alias) => q.includes(alias)));
  const followUp = /\b(it|its|that|this|technologies|stack|tools|built|outcome|result)\b/.test(q);
  const project = namedProject ?? (followUp ? projects.find((item) => item.id === previousProject) : undefined);
  if (project) return {
    text: /\b(stack|tools|technologies|framework|built|software)\b/.test(q)
      ? `${project.title} uses ${project.technologies.join(", ")}. ${project.approach}`
      : `${project.title}: ${project.description}\n\n${project.outcome}${project.disclaimer ? `\n\n${project.disclaimer}` : ""}`,
    link: internal("Read the case study", `/work/${project.id}/`), projectId: project.id,
  };
  const extraProject = additionalProjects.find((item) => q.includes(item.title.toLowerCase()) || (q.includes("flags") && item.title === "Fun with Flags"));
  if (extraProject) return { text: `${extraProject.title}: ${extraProject.description}`, link: internal("Explore the work", "/work/") };
  if (/hyptis|phytochemical|pharmacological|in review/.test(q)) return { text: `${additionalResearch.title}. Status: ${additionalResearch.status}; role: ${additionalResearch.role}. ${additionalResearch.contribution}`, link: internal("Research record", "/research/") };
  if (/\b(research|publication|paper|mango|thesis|grad-cam)\b/.test(q)) return { text: `${research.title}. ${research.summary}\n\nHis contribution: ${research.contribution}`, link: internal("Explore research", "/research/") };
  if (/\b(education|degree|university|graduat\w*|study|studied)\b/.test(q)) return { text: `${education.degree}, ${education.university} (${education.period}). ${education.credits} credits completed. Thesis: ${education.thesis}.`, link: internal("Education & background", "/about/") };
  if (/\b(ielts|english|bengali|languages|language score)\b/.test(q)) return { text: `${languages.ielts}. ${languages.scores}. ${languages.proficiency}.` };
  if (/\b(skills|skill|software|tools|programming|stack|frameworks|python|pytorch|tensorflow)\b/.test(q)) return { text: skillGroups.map((group) => `${group.title}: ${group.skills.join(", ")}.`).join("\n\n"), link: internal("View skills", "/about/#skills") };
  if (/\b(contact|email|hire|collaborat|opportunit)\w*/.test(q)) return { text: `Shihab is open to graduate research opportunities, AI internships, and collaborative projects. Email: ${identity.email}.`, link: internal("Start a conversation", "/contact/") };
  if (/\b(cv|resume|download)\b/.test(q)) return { text: "You can download Shihab’s CV below.", link: { label: "Download CV", href: identity.cv } };
  if (/\b(projects|portfolio|work|built)\b/.test(q)) return { text: `Featured projects: ${projects.map((item) => item.title).join(", ")}. Ask about any one for its approach and technologies.`, link: internal("Explore projects", "/work/") };
  if (/\b(who|bio|background|about|introduce|experience|profession|role)\b/.test(q)) return { text: about.copy, link: internal("Meet Shihab", "/about/") };
  return unknown;
}
