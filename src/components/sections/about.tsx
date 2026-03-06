import Image from 'next/image'
import { RevealSection } from '../reveal-section'

export function About() {
  return (
    <RevealSection
      animation="fadeUp"
      className="py-[length:var(--spacing-section)]"
      id="about"
    >
      <div className="wrapper">
        <h2 className="font-display text-[length:var(--text-h2)] font-medium tracking-tight">
          About Me
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div className="space-y-4 text-text-secondary">
            <p>
              I&apos;m a full-stack engineer based in Chicago who builds web
              applications with a focus on clean architecture and delivering real
              business value.
            </p>

            {/* Photo inline on mobile only */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xl lg:hidden">
              <Image
                src="/profile.jpg"
                alt="Ryan Calacsan"
                fill
                className="object-cover object-[center_70%]"
                sizes="320px"
              />
            </div>

            <p>
              Most recently, I served as Principal Engineer at PrintNinja, where I
              built a 230,000+ line Configure-Price-Quote platform from scratch as
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
            <p className="font-medium text-text">
              Currently open to full-stack or frontend roles, preferably remote.
            </p>
          </div>

          {/* Photo on desktop only */}
          <div className="relative hidden aspect-[3/4] overflow-hidden rounded-xl lg:block">
            <Image
              src="/profile.jpg"
              alt="Ryan Calacsan"
              fill
              className="object-cover object-[center_70%]"
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
