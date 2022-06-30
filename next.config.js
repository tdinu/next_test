/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'amazon.com',
      'm.media-amazon.com',
      'www.pexels.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
