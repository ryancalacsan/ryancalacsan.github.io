'use client'

import { useEffect } from 'react'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any
    let rafId: number
    let cancelled = false

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true })
      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
