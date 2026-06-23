import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react'
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
      {/* Ambient gradient */}
      <div className="contact__glow">
        <div className="contact__glow-blob" />
      </div>

      <div className="wrapper contact__inner">
        <h2 className="contact__heading">
          Get in Touch
        </h2>
        <p className="contact__lead">
          I&apos;m currently looking for full-stack or frontend engineering roles.
          Feel free to reach out — I&apos;d love to hear from you.
        </p>

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
      </div>
    </RevealSection>
  )
}
