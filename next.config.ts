import type { NextConfig } from "next";
import { previewHost } from "./site.config";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["static-site-kit"],
  headers: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: previewHost }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }]
    }
  ]
};

export default nextConfig;
