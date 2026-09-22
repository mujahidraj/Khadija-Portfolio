import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow placeholder images from local paths that may not exist yet.
  // When you add real images to /public/assets/, they'll be served automatically.
  images: {
    // Disable image optimization during development to avoid errors with missing placeholder images
    unoptimized: true,
  },
};

export default nextConfig;
