/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME: process.env.SITE_NAME || "DKSHS",
    SITE_LOCALE: process.env.SITE_LOCALE || "pt-br",
    SITE_BASEURL: process.env.SITE_BASEURL || "http://localhost:3000",
  },
  images: {
    domains: ["github.com"],
  },
};

module.exports = nextConfig;
