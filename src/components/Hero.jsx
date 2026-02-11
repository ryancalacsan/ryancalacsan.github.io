import { useEffect, useRef } from "react"
import useMagneticEffect from "../hooks/useMagneticEffect"

function MagneticButton({ children, ...props }) {
  const { ref, onMouseLeave } = useMagneticEffect({ strength: 0.3, radius: 120 })

  return (
    <div ref={ref} onMouseLeave={onMouseLeave} style={{ display: "inline-block" }}>
      {props.href ? (
        <a {...props}>{children}</a>
      ) : (
        <button {...props}>{children}</button>
      )}
    </div>
  )
}

export default function Hero({ scrollToSection }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      el.classList.add("hero--visible")
      return
    }

    requestAnimationFrame(() => {
      el.classList.add("hero--visible")
    })
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__content wrapper">
        <p className="hero__eyebrow">Full-Stack Engineer / Chicago</p>
        <h1 className="hero__name">Ryan Calacsan</h1>
        <p className="hero__description">
          I built a 200,000+ line enterprise platform from scratch as the sole
          engineer — from real-time pricing engines to payment processing and
          CRM integration.
        </p>
        <div className="hero__ctas">
          <MagneticButton
            href="/ryan-calacsan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--primary"
          >
            View Resume
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("experience")}
            className="hero__btn hero__btn--secondary"
          >
            View My Work
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
