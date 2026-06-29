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
              I&apos;m a full-stack engineer based in Chicago who builds web
              applications with a focus on clean architecture and delivering real
              business value.
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
              Most recently, I served as Principal Engineer at PrintNinja, where I
              built a 200,000+ line Configure-Price-Quote platform from scratch as
              the sole engineer. I joined as their first in-house engineer,
              inheriting an environment with no version control and significant
              technical debt from previous contractors. I introduced modern
              engineering practices, migrated critical business logic from legacy
              PHP systems, and built a platform handling complex pricing with 500+
              variables, payment processing, and CRM integration.
            </p>
            <p>
              Before transitioning to software engineering, I spent 15 years in
              photography and studio management — experience that gave me strong
              project ownership skills and an eye for user experience.
            </p>
            <p>
              This site is hand-built. The styles are hand-written SCSS with
              BEM naming, not a utility framework.
            </p>
            <p className="about__cta">
              Currently open to full-stack or frontend roles, preferably remote.
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
