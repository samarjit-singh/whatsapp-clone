/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1060982161,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "d51f4a680a12151a7bca7f20646b1ee1",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
