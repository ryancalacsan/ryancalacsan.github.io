import { useRef, useEffect, useCallback } from "react"

export default function useMagneticEffect({ strength = 0.3, radius = 150 } = {}) {
  const ref = useRef(null)

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      if (distance < radius) {
        const pull = (1 - distance / radius) * strength
        el.style.transform = `translate(${distX * pull}px, ${distY * pull}px)`
      } else {
        el.style.transform = ""
      }
    },
    [strength, radius]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.4s ease"
    el.style.transform = ""
    const cleanup = () => {
      el.style.transition = ""
    }
    el.addEventListener("transitionend", cleanup, { once: true })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return { ref, onMouseLeave: handleMouseLeave }
}
