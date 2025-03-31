import "./src/env.js";
import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
    turbo: {},
  },
  trailingSlash: true,
};

export default withContentlayer(nextConfig);
