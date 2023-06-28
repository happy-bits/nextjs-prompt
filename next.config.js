/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // Tillåt även bilder från denna domän
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    /*
    topLevelAwait:true för senare versioner av webpack (efter 5.83.0). Så flaggan kanske inte behövs

    Om 'await' används i toppen på en modul (fil) så transformeras modulen till en 'async'-modul
    */
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
