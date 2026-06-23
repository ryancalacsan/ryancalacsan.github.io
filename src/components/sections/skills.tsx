import { RevealSection } from '../reveal-section'
import { RevealStagger, RevealStaggerItem } from '../reveal-stagger'

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'BEM', 'CSS Animations', 'HTML5', 'CSS3', 'Accessibility (WCAG 2.2 AA)'],
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
      className="skills"
      id="skills"
    >
      {/* Ambient gradient */}
      <div className="skills__glow">
        <div className="skills__glow-blob" />
      </div>
      <div className="wrapper skills__inner">
        <h2 className="skills__heading">
          Technical Skills
        </h2>

        <RevealStagger className="skills__grid">
          {skillCategories.map((category) => (
            <RevealStaggerItem key={category.name}>
              <div className="skills__card">
                <h3 className="skills__category">
                  {category.name}
                </h3>
                <div className="skills__pills">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skills__pill"
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
