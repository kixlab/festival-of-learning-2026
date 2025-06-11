/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/festival-of-learning-2026' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/festival-of-learning-2026/' : '',
};

module.exports = nextConfig; 