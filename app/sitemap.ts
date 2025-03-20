import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXTAUTH_URL}`,
      lastModified: "2025-03-20T16:37:15.677Z",
      changeFrequency: "yearly",
    },
    {
      url: `${process.env.NEXTAUTH_URL}/about-me`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXTAUTH_URL}/services`,
      lastModified: "2025-03-20T16:37:15.677Z",
    },
    {
      url: `${process.env.NEXTAUTH_URL}/coaching`,
      lastModified: "2025-03-20T16:37:15.677Z",
    },

    {
      url: `${process.env.NEXTAUTH_URL}/contact`,
      lastModified: "2025-03-20T16:37:15.677Z",
    },
    {
      url: `${process.env.NEXTAUTH_URL}/testimonials`,
      lastModified: "2025-03-20T16:37:15.677Z",
    },
    {
      url: `${process.env.NEXTAUTH_URL}/policy`,
      lastModified: "2025-03-20T16:37:15.677Z",
    },
  ];
}
