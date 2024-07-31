/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [{ source: '/', destination: '/dashboard', permanent: true }];
  },
};

export default nextConfig;
