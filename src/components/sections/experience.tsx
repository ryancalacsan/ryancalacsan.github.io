import { Container, Eyebrow, Heading, Badge } from '@ryancalacsan/caliper-ui'
import { RevealSection } from '../reveal-section'
import { RevealStagger, RevealStaggerItem } from '../reveal-stagger'

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Drizzle ORM',
  'Supabase',
  'Docker',
  'Stripe',
  'Salesforce',
  'Clerk Auth',
  'Turborepo',
]

const achievements = [
  "Built the platform's React, Next.js, and TypeScript front-end, from the CPQ dashboard to the quoting and configuration workflows",
  'Real-time pricing engine handling 500+ variables across 4 product lines with LRU caching',
  'Stripe payment integration with webhook processing',
  'Salesforce CRM sync with 80+ custom field mappings across 10 modules',
  'Multi-carrier shipping integration (ShipStation, UPS, TForce Freight)',
  'Self-hosted Docker infrastructure with zero-downtime releases with scripted rollback and automated backups',
]

export function Experience() {
  return (
    <RevealSection
      animation="slideLeft"
      className="experience"
      id="experience"
    >
      <Container size="xl" className="experience__inner">
        <header className="section-head">
          <Eyebrow tone="accent" className="section-head__index">
            01 / Experience
          </Eyebrow>
          <Heading level={2} size="3xl" className="section-head__title">
            Professional Experience
          </Heading>
        </header>

        <div className="experience__card">
          <div className="experience__card-header">
            <div>
              <h3 className="experience__role">
                PrintNinja
              </h3>
              <p className="experience__subtitle">Principal Engineer</p>
            </div>
            <span className="experience__year">
              2025
            </span>
          </div>

          <p className="experience__intro">
            Built the company&apos;s entire modern technology stack from scratch as the
            sole engineer. PrintNinja is a custom printing company serving
            self-publishers and game makers.
          </p>

          <div className="experience__group">
            <h4 className="experience__group-title">
              The Challenge
            </h4>
            <p className="experience__group-text">
              Inherited an environment with no version control, fragmented
              contractor code, and significant technical debt. Needed to build a
              Configure-Price-Quote (CPQ) platform to replace manual quoting
              processes while migrating critical business logic from legacy PHP
              systems.
            </p>
          </div>

          <div className="experience__group">
            <h4 className="experience__group-title">
              What I Built
            </h4>
            <RevealStagger className="experience__achievements">
              {achievements.map((achievement, index) => (
                <RevealStaggerItem key={index}>
                  <div className="experience__achievement">
                    <span className="experience__dot" />
                    <span>{achievement}</span>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </div>

          <div className="experience__group">
            <h4 className="experience__group-title">
              Tech Stack
            </h4>
            <div className="experience__tags">
              {techStack.map((tech) => (
                <Badge key={tech} tone="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </RevealSection>
  )
}
