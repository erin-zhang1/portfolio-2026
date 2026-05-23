import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Erin Zhang | Software Developer",
    short_name: "Erin Zhang",
    description:
      "Erin Zhang - Software Developer focused on Python, SQL, Django, automation, actuarial systems, and analytics.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "data analytics",
      "automation",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
