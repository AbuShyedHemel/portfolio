const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.hdnux.com',
      },
    ],
  },
};

module.exports = nextConfig;
