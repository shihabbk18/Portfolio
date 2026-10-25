import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about/", "/work/", "/research/", "/contact/", ...projects.map((project) => `/work/${project.id}/`)].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }));
}
