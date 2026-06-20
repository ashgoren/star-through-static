import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  headers: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'star-through-static.vercel.app' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }]
    }
  ]
};

export default nextConfig;
