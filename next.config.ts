import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webpackBuildWorker: false,
  },
  async rewrites() {
    return [
      {
        source: '/lp/seminar0828',
        destination: '/lp/seminar0828.html',
      },
      {
        source: '/lp/seminar0828/',
        destination: '/lp/seminar0828.html',
      },
    ]
  },
};

export default nextConfig;
