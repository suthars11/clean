import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old nested detail URLs keep working by redirecting to the flat ones.
  async redirects() {
    return [
      { source: "/blog-detail", destination: "/blogdetail", permanent: true },
      { source: "/service-detail", destination: "/servicedetail", permanent: true },
      { source: "/team-detail", destination: "/teamdetail", permanent: true },
      { source: "/blog/detail", destination: "/blogdetail", permanent: true },
      { source: "/service/detail", destination: "/servicedetail", permanent: true },
      { source: "/our-team/detail", destination: "/teamdetail", permanent: true },
    ];
  },
};

export default nextConfig;
