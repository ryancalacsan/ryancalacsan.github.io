import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react'
import { Container, Eyebrow, Heading, Text } from '@ryancalacsan/caliper-ui'
import { RevealSection } from '../reveal-section'

const emailAddress = 'calacsancode@gmail.com'

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
]

export function Contact() {
  return (
    <RevealSection
      animation="fadeIn"
      className="contact"
      id="contact"
    >
      <Container size="xl" className="contact__inner">
        <header className="section-head section-head--center">
          <Eyebrow tone="accent" className="section-head__index">
            05 / Contact
          </Eyebrow>
          <Heading level={2} size="3xl" className="section-head__title">
            Get in Touch
          </Heading>
        </header>
        <Text as="p" size="lg" tone="muted" className="contact__lead">
          I&apos;m currently looking for full-stack or frontend engineering roles.
          Feel free to reach out. I&apos;d love to hear from you.
        </Text>

        <a
          href={`mailto:${emailAddress}`}
          className="contact__email"
        >
          <Mail className="contact__icon" />
          <span>{emailAddress}</span>
          <ArrowRight className="contact__icon" />
        </a>

        <div className="contact__socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
            >
              <link.icon className="contact__icon" />
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
