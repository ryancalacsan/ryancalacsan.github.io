import { useState, useEffect, useRef, useCallback } from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import useActiveSection from "../hooks/useActiveSection"
import useTheme from "../hooks/useTheme"

export default function Menu() {
  const [isOpen, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection()
  const { theme, toggleTheme } = useTheme()
  const indicatorRef = useRef(null)
  const navLinksRef = useRef(null)

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

  const updateIndicator = useCallback(() => {
    const container = navLinksRef.current
    const indicator = indicatorRef.current
    if (!container || !indicator || !activeId) {
      if (indicator) indicator.style.opacity = "0"
      return
    }

    const activeLink = container.querySelector(`a[href="#${activeId}"]`)
    if (!activeLink) {
      indicator.style.opacity = "0"
      return
    }

    const containerRect = container.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    indicator.style.left = `${linkRect.left - containerRect.left}px`
    indicator.style.width = `${linkRect.width}px`
    indicator.style.top = `${linkRect.bottom - containerRect.top + 2}px`
    indicator.style.opacity = "1"
  }, [activeId])

  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

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
        <ul className="nav__desktop-links" ref={navLinksRef}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__desktop-link${activeId && `#${activeId}` === link.href ? " nav__desktop-link--active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="nav__theme-toggle"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </li>
          <li>
            <a
              href="/ryan-calacsan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__resume-btn"
            >
              Resume
            </a>
          </li>
          <span className="nav__indicator" ref={indicatorRef} />
        </ul>

        {/* Mobile toggle + theme */}
        <div className="nav__mobile-actions">
          <button
            onClick={toggleTheme}
            className="nav__theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
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
              target="_blank"
              rel="noopener noreferrer"
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
