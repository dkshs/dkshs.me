import { withContentlayer } from "next-contentlayer";

await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

export default withContentlayer(nextConfig);
