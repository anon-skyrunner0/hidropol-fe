/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        forceSwcTransforms: true
    },
    reactStrictMode: true,
    images: {
        domains: ['hidropol-frontend.vercel.app']
    }
}

module.exports = nextConfig
