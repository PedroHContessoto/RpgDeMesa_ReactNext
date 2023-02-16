/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/forasteiro/landing-page',
        permanent: true,
        basePath:false
      },
    ]
  },
}

module.exports = nextConfig;