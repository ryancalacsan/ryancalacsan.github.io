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
      className={`header-nav ${
        scrolled ? 'header-nav--scrolled' : 'header-nav--transparent'
      }`}
    >
      {children}
    </div>
  )
}
