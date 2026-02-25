'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-text-secondary"
        aria-label="Toggle theme"
      >
        <span className="h-[1.125rem] w-[1.125rem]" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors duration-normal hover:text-text hover:bg-bg-secondary"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-[1.125rem] w-[1.125rem]" />
      ) : (
        <Moon className="h-[1.125rem] w-[1.125rem]" />
      )}
    </button>
  )
}
