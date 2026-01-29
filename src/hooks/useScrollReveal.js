import { useEffect, useRef } from "react"

export default function useScrollReveal({ stagger = false } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) {
      el.classList.remove("scroll-reveal")
      return
    }

    el.classList.add("scroll-reveal")
    if (stagger) {
      el.classList.add("scroll-reveal--stagger")
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-reveal--visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [stagger])

  return ref
}
