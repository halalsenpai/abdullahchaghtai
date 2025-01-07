/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This ensures consistent rendering
    optimizeFonts: true,
    optimizeImages: true,
  },
};

module.exports = nextConfig;
