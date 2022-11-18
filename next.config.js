const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`,
    prependData: `@import "mixins.scss";`,
    prependData: `@import "themes.scss";`,
    cssModules: true,
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
