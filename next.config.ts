import withSerwistInit from '@serwist/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/corporate/ax1',
        destination: '/corporate/ax1-0415',
        permanent: false,
      },
      {
        source: '/corporate/ax1-2',
        destination: '/corporate/ax1-0415',
        permanent: false,
      },
      {
        source: '/corporate/ax1-special',
        destination: '/corporate/ax1-0415',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/lp/seminar0828',
        destination: '/lp/seminar0828.html',
      },
      {
        source: '/lp/seminar0828/',
        destination: '/lp/seminar0828.html',
      },
    ]
  },
}

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
})

export default withSerwist(nextConfig)
