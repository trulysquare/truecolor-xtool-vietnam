/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
            {
                    protocol: 'https',
                            hostname: 'cdn.shopify.com',
                                    port: '',
                                            pathname: '/s/files/**',
                                                  },
                                                        {
                                                                protocol: 'https',
                                                                        hostname: 'www.xtool.com',
                                                                              },
                                                                                  ],
                                                                                    },
                                                                                    };
                                                                                    
                                                                                    module.exports = nextConfig;