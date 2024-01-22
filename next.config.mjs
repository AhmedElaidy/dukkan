// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "dukan.s3.me-south-1.amazonaws.com",
      "i.ibb.co",
      "assets-global.website-files.com",
    ],
  },
};

export default nextConfig;
