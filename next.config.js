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
      ? "https://mcco02mstrub73kprep.dxcloud.episerver.net"
      : test
      ? "https://mcco02mstrub73kprep.dxcloud.episerver.net"
      : "https://mcco02mstrub73kprep.dxcloud.episerver.net",
      PASSWORD:"P@ssword123$",
    USERNAME:"apiuser",
    CLIENT_SECRET:"SuperSecretPassword",
    MAPSAPIKEY:'AIzaSyCZy8PsqiP202lhDapwxE8r1qUgZtC-Vjk',
    HEARTMAPAPIKEY:'180A0FF6-6659-44EA-8E03-2BE22C2B27A3',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mcco02mstrub73kprod.dxcloud.episerver.net',
        port: '',
        pathname: '/globalassets/**',
      },
      {
        protocol: 'https',
        hostname: 'mcco02mstrub73kprod.dxcloud.episerver.net',
        port: '',
        pathname: '/contentassets/**',
      },
      
    ],
  },
};

module.exports = nextConfig;
