/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed: output: 'export'
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
