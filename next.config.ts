import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add this to ensure clean URLs for dynamic routes
  distDir: 'dist',
};

export default nextConfig;