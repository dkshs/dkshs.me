import { withContentlayer } from "next-contentlayer2";

import "./src/env.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
    turbo: {},
  },
};

export default withContentlayer(nextConfig);
