'use client'

export function BackToTop({ children }: { children: React.ReactNode }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-secondary transition-colors duration-normal hover:text-text hover:bg-bg-secondary"
      aria-label="Back to top"
    >
      {children}
    </button>
  )
}
