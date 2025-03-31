import type { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(env.SITE_BASEURL).toString();
  const toUrl = (path: string) => new URL(path, baseUrl).toString();

  return [
    {
      url: baseUrl,
      lastModified: "2025-03-31",
      priority: 1,
    },
    {
      url: toUrl("/projects/"),
      lastModified: "2025-03-31",
      priority: 0.8,
    },
    ...allProjects
      .sort((a, b) => b.lastModified.localeCompare(a.lastModified))
      .map((project) => ({
        url: toUrl(`/projects/${project.slug}/`),
        lastModified: project.lastModified,
      })),
  ];
}
