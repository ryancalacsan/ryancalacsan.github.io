import { MotionSection } from '../motion-section'
import { StaggerContainer, StaggerItem } from '../stagger-children'

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
  '230,000+ line full-stack platform using Next.js, React, TypeScript, and PostgreSQL',
  'Real-time pricing engine handling 500+ variables across 4 product lines with LRU caching',
  'Stripe payment integration with webhook processing',
  'Salesforce CRM sync with 80+ custom field mappings across 10 modules',
  'Multi-carrier shipping integration (ShipStation, UPS, TForce Freight)',
  'Self-hosted Docker infrastructure with blue-green deployment and automated backups',
]

export function Experience() {
  return (
    <MotionSection
      animation="slideLeft"
      className="relative py-[length:var(--spacing-section)]"
      id="experience"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-1/4 h-[60vh] w-[50vw] rounded-full bg-accent/[0.06] blur-[100px] dark:bg-accent/[0.02]" />
      </div>

      <div className="wrapper relative">
        <h2 className="font-display text-[length:var(--text-h2)] font-medium tracking-tight">
          Professional Experience
        </h2>

        <div className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-[length:var(--text-h3)] font-semibold">
                PrintNinja
              </h3>
              <p className="text-text-secondary">Principal Engineer</p>
            </div>
            <span className="rounded-md bg-bg-secondary px-3 py-1 text-sm font-medium text-text-secondary">
              2025
            </span>
          </div>

          <p className="mt-6 text-text-secondary">
            Built the company&apos;s entire modern technology stack from scratch as the
            sole engineer. PrintNinja is a custom printing company serving
            self-publishers and game makers.
          </p>

          <div className="mt-8">
            <h4 className="text-sm font-medium uppercase tracking-wider text-text-secondary">
              The Challenge
            </h4>
            <p className="mt-2 text-text-secondary">
              Inherited an environment with no version control, fragmented
              contractor code, and significant technical debt. Needed to build a
              Configure-Price-Quote (CPQ) platform to replace manual quoting
              processes while migrating critical business logic from legacy PHP
              systems.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium uppercase tracking-wider text-text-secondary">
              What I Built
            </h4>
            <StaggerContainer className="mt-3 space-y-2">
              {achievements.map((achievement, index) => (
                <StaggerItem key={index}>
                  <div className="flex gap-3 text-text-secondary">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{achievement}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium uppercase tracking-wider text-text-secondary">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-bg-secondary px-3 py-1 text-sm text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
