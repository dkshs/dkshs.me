import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME: process.env.SITE_NAME || "DKSHS",
    SITE_LOCALE: process.env.SITE_LOCALE || "en_US",
    SITE_BASEURL: process.env.SITE_BASEURL || "http://localhost:3000",
  },
  images: {
    remotePatterns: [{ hostname: "github.com" }],
  },
  experimental: {
    webpackBuildWorker: true,
  },
};

export default withContentlayer(nextConfig);
