'use client'

import { useEffect, useState } from 'react'

export function HeaderNav({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`transition-all duration-normal ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {children}
    </div>
  )
}
