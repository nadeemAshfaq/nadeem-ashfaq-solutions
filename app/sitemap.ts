import type { MetadataRoute } from "next";

import { projectsData } from "@/data/projects-data";
import { servicePagesData } from "@/data/service-pages-data";
import { siteUrl } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicePagesData.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const projectRoutes = projectsData
    .filter((project) => project.caseStudyUrl)
    .map((project) => ({
      url: `${siteUrl}${project.caseStudyUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
