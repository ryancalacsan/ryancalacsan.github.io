import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HeaderNav } from './header-nav'
import { MobileMenu } from './mobile-menu'
import { navLinks } from './nav-links'

export function Header() {
  return (
    <header className="header">
      <HeaderNav>
        <div className="wrapper header__inner">
          <Link href="/" className="header__logo">
            RC
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </a>
            ))}
            <div className="header__nav-actions">
              <ThemeToggle />
              <a
                href="/ryan-calacsan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="header__resume"
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="header__mobile-controls">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </HeaderNav>
    </header>
  )
}
