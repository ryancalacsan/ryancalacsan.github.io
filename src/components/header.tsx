import Link from 'next/link'
import { AppHeader, Container, NavLink, Button } from '@ryancalacsan/caliper-ui'
import { ThemeToggle } from './theme-toggle'
import { MobileMenu } from './mobile-menu'
import { navLinks } from './nav-links'

export function Header() {
  return (
    <AppHeader sticky condenseAfter={20}>
      <Container size="xl" className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Ryan Calacsan — home">
          <span aria-hidden="true">RC</span>
          <span className="site-header__logo-mark">/</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} asChild>
              <a href={link.href}>{link.label}</a>
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <Button asChild variant="secondary" size="sm" className="site-header__resume">
            <a href="/ryan-calacsan-resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <div className="site-header__mobile">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </AppHeader>
  )
}
