import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const paths = [
  "/",
  "/services",
  "/workloads",
  "/about",
  "/faq",
  "/compliance",
  "/contact",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-09-01"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
