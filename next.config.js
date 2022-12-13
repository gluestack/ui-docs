/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = { nextConfig };
