/** @type {import('next').NextConfig} */
const path = require("path");

const dev = process.env.NODE_ENV === "development";
const test = process.env.NODE_ENV === "test";
const prod = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },

  env: {
    API_URL: dev
      ? "https://mcco02mstrub73kprod.dxcloud.episerver.net"
      : test
      ? "https://mcco02mstrub73kprod.dxcloud.episerver.net"
      : "https://mcco02mstrub73kprod.dxcloud.episerver.net",
  },
};

module.exports = nextConfig;
