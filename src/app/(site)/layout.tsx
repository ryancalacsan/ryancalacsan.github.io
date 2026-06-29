import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/lenis-provider'
import { SkipLink, BackToTop } from '@ryancalacsan/caliper-ui'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
// Caliper UI first so the portfolio's globals can still override it. Caliper
// also supplies (and inlines) the type system — Hanken Grotesk + Geist Mono —
// so the site no longer loads its own fonts.
import '@ryancalacsan/caliper-ui/styles.css'
import '../globals.scss'

import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ryancalacsan.dev'),
  title: {
    default: 'Ryan Calacsan',
    template: '%s | Ryan Calacsan',
  },
  description:
    'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ryan Calacsan',
    description:
      'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
    url: 'https://www.ryancalacsan.dev',
    siteName: 'Ryan Calacsan',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Calacsan',
    description:
      'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={['class', 'data-theme']}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <SkipLink href="#main-content">Skip to content</SkipLink>
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <BackToTop label="Back to top" />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
