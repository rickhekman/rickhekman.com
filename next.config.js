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
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
