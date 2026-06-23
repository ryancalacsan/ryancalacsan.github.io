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
    <footer className="footer">
      <div className="wrapper footer__inner">
        <div className="footer__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="footer__social-link"
              aria-label={link.label}
            >
              <link.icon className="footer__social-icon" />
            </a>
          ))}
        </div>

        <div className="footer__meta">
          <p>&copy; {new Date().getFullYear()} Ryan Calacsan</p>
          <p className="footer__credit">
            Built with Next.js &amp; Payload CMS
          </p>
        </div>

        <BackToTop>
          <ArrowUp className="footer__top-icon" />
        </BackToTop>
      </div>
    </footer>
  )
}
