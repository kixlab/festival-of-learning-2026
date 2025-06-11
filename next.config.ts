// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 중요: 프로젝트 이름으로 base path 설정
  basePath: process.env.NODE_ENV === 'production' ? '/my-static-site' : '', // 'my-static-site'를 여러분의 레포지토리 이름으로 변경하세요.
};
module.exports = nextConfig;