import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Doe – Full-Stack Developer Portfolio",
    short_name: "John Doe",
    description:
      "Full-stack developer passionate about building beautiful, performant web applications with React, Next.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#18181b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
