import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mushanghai.huevsite.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
