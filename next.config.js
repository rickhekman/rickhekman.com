const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    cssModules: true,
  },
  images: {       
    remotePatterns: [
      {
        protocol: 'https',
        hostname: ['scontent-ams4-1.cdninstagram.com','scontent-ams2-1.cdninstagram.com'],
        port: '',
        pathname: '/v/**',    
      },
    ],
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
