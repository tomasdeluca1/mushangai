import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mushanghai.xyz",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
