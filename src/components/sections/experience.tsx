import { RevealSection } from '../reveal-section'
import { RevealStagger, RevealStaggerItem } from '../reveal-stagger'

const techStack = [
  'Next.js 15',
  'React 19',
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
  '200,000+ line full-stack platform using Next.js, React, TypeScript, and PostgreSQL',
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
      {/* Ambient gradient */}
      <div className="experience__glow">
        <div className="experience__glow-blob" />
      </div>

      <div className="wrapper experience__inner">
        <h2 className="experience__heading">
          Professional Experience
        </h2>

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
                <span
                  key={tech}
                  className="experience__tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
