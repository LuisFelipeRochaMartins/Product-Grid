/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gsuplementos.com.br',
        pathname: '/upload/banner/**'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**'
      }
    ]
  }
};

export default nextConfig;
