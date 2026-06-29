import { Container, Eyebrow, Heading, Badge } from '@ryancalacsan/caliper-ui'
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
      <Container size="xl" className="skills__inner">
        <header className="section-head">
          <Eyebrow tone="accent" className="section-head__index">
            04 / Skills
          </Eyebrow>
          <Heading level={2} size="3xl" className="section-head__title">
            Technical Skills
          </Heading>
        </header>

        <RevealStagger className="skills__grid">
          {skillCategories.map((category) => (
            <RevealStaggerItem key={category.name}>
              <div className="skills__card">
                <h3 className="skills__category">
                  {category.name}
                </h3>
                <div className="skills__pills">
                  {category.skills.map((skill) => (
                    <Badge key={skill} tone="neutral">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </RevealStaggerItem>
          ))}
        </RevealStagger>
      </Container>
    </RevealSection>
  )
}
