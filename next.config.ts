import type { NextConfig } from "next";

module.exports = {
  reactStrictMode: false,
};


const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  lint:false,
};

export default nextConfig;
