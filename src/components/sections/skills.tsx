import { RevealSection } from '../reveal-section'
import { RevealStagger, RevealStaggerItem } from '../reveal-stagger'

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'Payload CMS', 'REST APIs', 'Server Actions', 'Zod', 'Redis'],
  },
  {
    name: 'Infrastructure',
    skills: ['Docker', 'Vercel', 'Supabase', 'Nginx', 'Turborepo', 'Git', 'GitHub Actions', 'Vitest'],
  },
  {
    name: 'Integrations',
    skills: ['Stripe', 'Salesforce', 'Clerk Auth', 'ShipStation', 'UPS', 'Rackspace Cloud Files'],
  },
]

export function Skills() {
  return (
    <RevealSection
      animation="fadeUp"
      className="relative py-[length:var(--spacing-section)]"
      id="skills"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 bottom-0 h-[50vh] w-[50vw] rounded-full bg-accent/[0.06] blur-[100px] dark:bg-accent/[0.02]" />
      </div>
      <div className="wrapper relative">
        <h2 className="font-display text-[length:var(--text-h2)] font-medium tracking-tight">
          Technical Skills
        </h2>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <RevealStaggerItem key={category.name}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <h3 className="font-display text-sm font-medium uppercase tracking-wider text-accent">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-bg-secondary px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </div>
    </RevealSection>
  )
}
