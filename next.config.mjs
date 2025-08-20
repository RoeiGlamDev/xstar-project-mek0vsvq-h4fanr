import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Custom webpack configurations can be added here
    return config;
  },
  env: {
    // Environment variables can be added here
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;