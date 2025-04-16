// next.config.js
module.exports = {
  output: 'export',
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
