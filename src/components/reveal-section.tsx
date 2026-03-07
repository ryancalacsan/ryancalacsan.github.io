'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealSectionProps {
  children: React.ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'scaleUp'
  className?: string
  id?: string
  delay?: number
}

export function RevealSection({ children, animation = 'fadeUp', className, id, delay = 0 }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal-section ${animation} ${visible ? 'revealed' : ''} ${className ?? ''}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </section>
  )
}
