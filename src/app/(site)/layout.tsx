import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/lenis-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import '../globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const clashGrotesk = localFont({
  src: '../../fonts/ClashGrotesk-Variable.woff2',
  variable: '--font-clash-grotesk',
  display: 'swap',
  weight: '200 700',
})

import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ryancalacsan.dev'),
  title: {
    default: 'Ryan Calacsan',
    template: '%s | Ryan Calacsan',
  },
  description:
    'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
  openGraph: {
    title: 'Ryan Calacsan',
    description:
      'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
    url: 'https://ryancalacsan.dev',
    siteName: 'Ryan Calacsan',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clashGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
