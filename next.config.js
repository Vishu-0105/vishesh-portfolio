/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["github.com", "avatars.githubusercontent.com"] },
  experimental: { optimizeCss: true },
};
module.exports = nextConfig;
