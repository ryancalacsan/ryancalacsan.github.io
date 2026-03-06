'use client'

import { useEffect } from 'react'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true })
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
    return () => lenis?.destroy()
  }, [])

  return <>{children}</>
}
