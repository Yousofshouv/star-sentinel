 /** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This tells Next.js to build even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
