/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production'
    ? '/festival-of-learning-2026' // This MUST match your GitHub repository name
    : '', // Empty string for local development
};

module.exports = nextConfig;