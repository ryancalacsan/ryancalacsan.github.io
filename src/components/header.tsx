import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HeaderNav } from './header-nav'
import { MobileMenu } from './mobile-menu'
import { navLinks } from './nav-links'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <HeaderNav>
        <div className="wrapper flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text no-underline transition-colors duration-normal hover:text-accent"
          >
            RC
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-text-secondary no-underline transition-colors duration-normal hover:text-text hover:bg-bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 flex items-center gap-1 border-l border-border pl-3">
              <ThemeToggle />
              <a
                href="/ryan-calacsan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-accent no-underline transition-colors duration-normal hover:text-accent-hover"
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </HeaderNav>
    </header>
  )
}
