//next.config.js
module.exports = {
  // Do NOT include output: 'export'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.material-tailwind.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

