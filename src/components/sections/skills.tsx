import { MotionSection } from '../motion-section'
import { StaggerContainer, StaggerItem } from '../stagger-children'

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'Drizzle ORM', 'Server Actions'],
  },
  {
    name: 'Infrastructure',
    skills: ['Docker', 'Supabase', 'Nginx', 'Git', 'GitHub Actions', 'CI/CD'],
  },
  {
    name: 'Integrations',
    skills: ['Stripe', 'Salesforce', 'Clerk Auth'],
  },
]

export function Skills() {
  return (
    <MotionSection
      animation="fadeUp"
      className="py-[length:var(--spacing-section)]"
      id="skills"
    >
      <div className="wrapper">
        <h2 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight">
          Technical Skills
        </h2>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                  {category.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="block h-1 w-1 rounded-full bg-border" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}
