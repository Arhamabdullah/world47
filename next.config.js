/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other configuration (e.g., reactStrictMode: true) goes here
  
  // ADD THIS BLOCK:
  eslint: {
    // !! DANGER: This is temporary. It allows production builds to proceed even 
    // when your project has ESLint warnings/errors. 
    // Only use this if you are sure you want to ignore them for the build.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! DANGER: This is temporary. It allows production builds to proceed even 
    // when your project has TypeScript errors/warnings.
    // Only use this if you are sure you want to ignore them for the build.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;