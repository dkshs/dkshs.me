import { withContentlayer } from "next-contentlayer2";

await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
    turbo: {},
  },
};

export default withContentlayer(nextConfig);
