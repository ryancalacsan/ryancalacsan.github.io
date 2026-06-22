import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ryancalacsan.dev',
      },
      {
        protocol: 'https',
        hostname: 'www.ryancalacsan.dev',
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  webpack: (webpackConfig, { isServer }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Payload's Vercel Blob client upload handler imports `getFileKey` from the
    // `@payloadcms/plugin-cloud-storage/utilities` barrel, which also re-exports
    // `resolveSignedURLKey` — a server-only helper that pulls in `payload/internal`
    // (and transitively undici, node:os, async_hooks, …). That code never runs in
    // the browser, so stub `payload/internal` out of the client bundle to keep the
    // server graph from leaking client-side.
    if (!isServer) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'payload/internal': false,
      }
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
