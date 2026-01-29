import { useState, useEffect } from "react"

export default function Menu() {
  const [isOpen, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#about-me", label: "About" },
    { href: "#toolkit", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      role="navigation"
    >
      <div className="nav__inner wrapper">
        <a href="#" className="nav__logo">
          Ryan Calacsan
        </a>

        {/* Desktop links */}
        <ul className="nav__desktop-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__desktop-link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/ryan-calacsan-resume.pdf"
              download
              className="nav__resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className={`nav__toggle ${isOpen ? "nav__toggle--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
          <span className="nav__toggle-line" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`nav__overlay ${isOpen ? "nav__overlay--active" : ""}`}>
        <ul className="nav__mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="nav__mobile-link"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/ryan-calacsan-resume.pdf"
              download
              onClick={closeMenu}
              className="nav__mobile-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
