const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    cssModules: true,
  },
  images: {
    dangerouslyAllowSVG: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ['en', 'es', 'nl'],
    defaultLocale: 'en',
  },
}
