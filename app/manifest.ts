import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nadeem Ashfaq | Full-Stack Developer & Solutions Architect",
    short_name: "Nadeem Ashfaq",
    description:
      "Full-stack development, Microsoft 365, Google Workspace, AI, and business integrations.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }]
  };
}