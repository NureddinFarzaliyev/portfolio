/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // new URL("https://skillicons.dev/**"),
      // new URL("https://skills.syvixor.com/api/**")
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'skills.syvixor.com',
        port: '',
        pathname: '/api/**',
      }
    ],
  }
};

export default nextConfig;
