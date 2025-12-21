import type { NextConfig } from "next";

// Allow GitHub Pages to serve assets from a sub-path (e.g. /new_msu_hspc)
// while keeping local dev and custom domains at the root. Override the env
// var in the deploy workflow when publishing to Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
