import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for better static hosting
  images: {
    unoptimized: true, // Required for static export
  },
};
