/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // OO: Allow images from this domain
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    /*
    OO:
    The topLevelAwait option transforms a module into an async module when an await is used at the top level. Starting from webpack version 5.83.0, this feature is enabled by default. 
    */
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
