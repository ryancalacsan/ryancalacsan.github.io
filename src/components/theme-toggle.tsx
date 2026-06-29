'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Intentional mount guard: defer theme-dependent UI until after hydration to
  // avoid a server/client mismatch (resolvedTheme is unknown during SSR).
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="site-theme-toggle" aria-label="Toggle theme">
        <span className="site-theme-toggle__icon" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="site-theme-toggle"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="site-theme-toggle__icon" />
      ) : (
        <Moon className="site-theme-toggle__icon" />
      )}
    </button>
  )
}
