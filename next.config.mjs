import { withContentlayer } from "next-contentlayer";
await import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

export default withContentlayer(nextConfig);
