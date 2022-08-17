/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
};