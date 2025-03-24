/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https'
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      },
      {
        hostname: 'portafolio-ynoacamino.vercel.app',
        protocol: 'https'
      }
    ]
  },
};

export default nextConfig;
