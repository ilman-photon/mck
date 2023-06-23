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
    API_URL:process.env.API_URL,
    TOKEN_KEY_VALUE:process.env.TOKEN_KEY_VALUE,
    TOKEN_KEY_NAME:process.env.TOKEN_KEY_NAME,
    TOKEN_KEY_CLI_SEC:process.env.TOKEN_KEY_CLI_SEC,
    MAPSAPIKEY:process.env.MAPSAPIKEY,
    HEARTMAPAPIKEY:process.env.HEARTMAPAPIKEY,
  },
};

module.exports = nextConfig;
