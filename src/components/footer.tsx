import { Github, Linkedin, Mail } from 'lucide-react'
import { Container, Inline, Text } from '@ryancalacsan/caliper-ui'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ryancalacsan', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryancalacsan/', icon: Linkedin },
  { label: 'Email', href: 'mailto:calacsancode@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="footer">
      <Container size="xl" className="footer__inner">
        <Inline gap="md" align="center" className="footer__social" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="footer__social-link"
              aria-label={link.label}
            >
              <link.icon className="footer__social-icon" aria-hidden="true" />
            </a>
          ))}
        </Inline>

        <div className="footer__meta">
          <Text as="p" size="sm" tone="muted" className="footer__mono">
            © {new Date().getFullYear()} Ryan Calacsan
          </Text>
          <Text as="p" size="sm" tone="subtle" className="footer__mono">
            Built with Next.js, Payload CMS &amp; Caliper UI
          </Text>
        </div>
      </Container>
    </footer>
  )
}
