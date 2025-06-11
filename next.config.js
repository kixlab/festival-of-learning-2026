/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  basePath: '/festival-of-learning-2026',
  assetPrefix: '/festival-of-learning-2026',
};

module.exports = nextConfig; 