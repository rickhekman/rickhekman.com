const path = require('path');
const nextTranslate = require('next-translate');

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
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = nextTranslate();