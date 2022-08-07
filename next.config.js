require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_GOOGLE_KEY: process.env.REACT_APP_GOOGLE_KEY
  }
}

module.exports = nextConfig
