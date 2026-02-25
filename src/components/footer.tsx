import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { BackToTop } from './back-to-top'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ryancalacsan',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryancalacsan/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:calacsancode@gmail.com',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="wrapper flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-secondary no-underline transition-colors duration-normal hover:text-text hover:bg-bg-secondary"
              aria-label={link.label}
            >
              <link.icon className="h-[1.125rem] w-[1.125rem]" />
            </a>
          ))}
        </div>

        <p className="text-sm text-text-secondary">
          Designed and built by Ryan Calacsan
        </p>

        <BackToTop>
          <ArrowUp className="h-4 w-4" />
        </BackToTop>
      </div>
    </footer>
  )
}
