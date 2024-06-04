import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export' };

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
