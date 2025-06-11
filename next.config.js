/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: '/festival-of-learning-2026',
  assetPrefix: '/festival-of-learning-2026/',
};

module.exports = nextConfig; 