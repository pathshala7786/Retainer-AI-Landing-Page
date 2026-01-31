import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  env: {
    NEXT_PUBLIC_VERCEL_ANALYTICS_DEBUG: 'false',
  }
};

export default nextConfig;
