const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    domains: ['deltarune.io'],
    unoptimized: true, // Vercel 部署时需要
  },

  // 头部配置
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },

  // 重写规则
  async rewrites() {
    return [
      {
        source: '/game-proxy',
        destination: '/api/game-proxy',
      },
    ];
  },

  // 环境变量
  env: {
    CUSTOM_KEY: 'deltarune-arcade-hub',
  },

  // 压缩配置
  compress: true,

  // 性能优化
  poweredByHeader: false,

  // TypeScript 配置
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = withNextIntl(nextConfig); 