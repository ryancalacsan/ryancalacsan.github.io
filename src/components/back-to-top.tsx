'use client'

export function BackToTop({ children }: { children: React.ReactNode }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="back-to-top"
      aria-label="Back to top"
    >
      {children}
    </button>
  )
}
