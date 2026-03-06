'use client'

import { useEffect, useRef, useState } from 'react'

export function RevealStagger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return <div ref={ref} className={`reveal-stagger ${visible ? 'revealed' : ''} ${className ?? ''}`}>{children}</div>
}

export function RevealStaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal-stagger-item ${className ?? ''}`}>{children}</div>
}
