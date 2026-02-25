import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react'
import { MotionSection } from '../motion-section'

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
    <MotionSection
      animation="fadeIn"
      className="py-[length:var(--spacing-section)]"
      id="contact"
    >
      <div className="wrapper text-center">
        <h2 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          I&apos;m currently looking for full-stack or frontend engineering roles.
          Feel free to reach out — I&apos;d love to hear from you.
        </p>

        <a
          href={`mailto:${emailAddress}`}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white no-underline transition-colors duration-normal hover:bg-accent-hover"
        >
          <Mail className="h-4 w-4" />
          <span>{emailAddress}</span>
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary no-underline transition-colors duration-normal hover:text-text hover:bg-bg-secondary"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
