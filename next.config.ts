import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/services/google-workspace-addons",
        destination: "/services/google-workspace-add-on-development",
        permanent: true
      },
      {
        source: "/services/office-addin-development",
        destination: "/services/office-add-in-development",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
