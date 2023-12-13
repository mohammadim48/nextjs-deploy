/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
}

module.exports = {
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    }
  };