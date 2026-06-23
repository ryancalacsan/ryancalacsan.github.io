'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)
  const pathname = usePathname()

  useEffect(() => {
    let rafId: number
    let cancelled = false

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true })
      lenisRef.current = lenis
      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reset scroll to the top on route change. Lenis maintains its own scroll
  // position, so Next's native scroll-to-top is overridden on the next frame
  // (opening a project from far down the home page would land at the bottom).
  // Skip when navigating to an in-page anchor so hash links still reach their target.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) return
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
