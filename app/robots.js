// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/unauthorized", "/denied", "/not-found", "/api/"],
      },
    ],

    sitemap: `${process.env.NEXTAUTH_URL}/sitemap.xml`,
  };
}
