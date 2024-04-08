/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  basePath: process.env.NODE_ENV === 'production' ? '/work-career-site' : '',
  images: {
    unoptimized: true
  }
}

export default nextConfig
