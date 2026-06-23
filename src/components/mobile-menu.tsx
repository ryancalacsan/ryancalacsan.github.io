'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from './nav-links'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu__toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
      >
        {open ? (
          <X className="mobile-menu__icon" />
        ) : (
          <Menu className="mobile-menu__icon" />
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-menu__backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        inert={!open || undefined}
        className={`mobile-menu__drawer ${
          open ? 'mobile-menu__drawer--open' : 'mobile-menu__drawer--closed'
        }`}
      >
        <nav className="wrapper mobile-menu__nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mobile-menu__link"
            >
              {link.label}
            </a>
          ))}
          <hr className="mobile-menu__divider" />
          <a
            href="/ryan-calacsan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mobile-menu__link mobile-menu__link--resume"
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  )
}
