
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // WARNING: this will produce a production build even when there are TypeScript errors.
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
