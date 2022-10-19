const path = require('path')
    
    module.exports = {
        sassOptions: {
          includePaths: [path.join(__dirname, 'styles')],          
        }
    }

// module.exports = (phase, {defaultConfig}) => {
//   if ('sassOptions' in defaultConfig) {
//       defaultConfig['sassOptions'] = {
//           includePaths: ['/styles'],
//           prependData: `@import "~@styles/main.scss";`,
//       }
//   }
//   return defaultConfig;
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
