/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/product/:id",
        destination: "/items/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
