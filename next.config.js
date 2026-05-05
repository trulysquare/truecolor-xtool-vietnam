/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: 'www.xtool.com',
        pathname: '/cdn/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig