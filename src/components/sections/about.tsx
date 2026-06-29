import Image from 'next/image'
import { Container, Eyebrow, Heading } from '@ryancalacsan/caliper-ui'
import { RevealSection } from '../reveal-section'

export function About() {
  return (
    <RevealSection
      animation="fadeUp"
      className="about"
      id="about"
    >
      <Container size="xl">
        <header className="section-head">
          <Eyebrow tone="accent" className="section-head__index">
            03 / About
          </Eyebrow>
          <Heading level={2} size="3xl" className="section-head__title">
            About Me
          </Heading>
        </header>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I&apos;m a front-end and full-stack engineer based in Chicago. I care
              most about accessible, design-led interfaces and the systems that
              keep them consistent and maintainable.
            </p>

            {/* Photo inline on mobile only */}
            <div className="about__photo about__photo--mobile">
              <Image
                src="/profile.jpg"
                alt="Ryan Calacsan"
                fill
                className="about__image"
                sizes="320px"
              />
            </div>

            <p>
              I design and publish Caliper UI, my own accessible React component
              library and design system. It&apos;s hand-written SCSS and BEM, driven
              by design tokens, ships two themes, and meets WCAG 2.2 AA. This site
              is built with it.
            </p>
            <p>
              Most recently, I served as Principal Engineer at PrintNinja, where I
              built a full Configure-Price-Quote platform from scratch as the sole
              engineer. I joined as their first in-house engineer, inheriting an
              environment with no version control and significant technical debt
              from previous contractors. I introduced modern engineering practices,
              migrated critical business logic from legacy PHP systems, and built
              the platform&apos;s front-end alongside complex pricing with 500+
              variables, payment processing, and CRM integration.
            </p>
            <p>
              Before transitioning to software engineering, I spent 15 years in
              photography and studio management. That experience gave me strong
              project ownership skills and an eye for user experience.
            </p>
            <p className="about__cta">
              Currently open to front-end or full-stack roles, preferably remote.
            </p>
          </div>

          {/* Photo on desktop only */}
          <div className="about__photo about__photo--desktop">
            <Image
              src="/profile.jpg"
              alt="Ryan Calacsan"
              fill
              className="about__image"
              sizes="280px"
            />
          </div>
        </div>
      </Container>
    </RevealSection>
  )
}
