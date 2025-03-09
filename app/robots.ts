import { Metadata, MetadataRoute } from "next";
import { userAgent } from "next/server";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
       
          "/unauthorized",
          "/denied",
          "/not-found",
          "/api/",
        ],
      },
    ],

    sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
  };
}
