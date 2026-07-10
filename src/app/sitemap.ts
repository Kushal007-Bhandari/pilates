import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/classes",
  "/trainers",
  "/memberships",
  "/schedule",
  "/testimonials",
  "/contact",
  "/book",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book" || path === "/schedule" ? 0.9 : 0.7,
  }));
}
