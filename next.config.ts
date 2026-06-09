import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Local images in /public work with no config. For remote images, the host
    // must be allow-listed here (next/image will refuse unknown hosts).
    // Add your CMS/CDN host below as you wire real images in.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      // e.g. { protocol: "https", hostname: "cdn.sanity.io" },
      // e.g. { protocol: "https", hostname: "your-bucket.s3.amazonaws.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
