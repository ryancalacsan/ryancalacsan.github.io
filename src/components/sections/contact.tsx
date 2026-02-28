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
      className="relative py-[length:var(--spacing-section)]"
      id="contact"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px] dark:bg-accent/[0.03]" />
      </div>

      <div className="wrapper relative text-center">
        <h2 className="font-display text-[length:var(--text-h1)] font-medium tracking-tight">
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

        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text no-underline transition-colors duration-normal hover:bg-bg-secondary"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
