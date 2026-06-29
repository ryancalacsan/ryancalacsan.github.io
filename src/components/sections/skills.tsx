import { Container, Eyebrow, Heading, Badge } from '@ryancalacsan/caliper-ui'
import { RevealSection } from '../reveal-section'
import { RevealStagger, RevealStaggerItem } from '../reveal-stagger'

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Semantic HTML', 'CSS', 'SCSS', 'BEM', 'Accessibility (WCAG 2.2 AA)', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    name: 'Design Systems',
    skills: ['Design Tokens', 'Component Libraries', 'Storybook', 'Theming', 'Figma (Dev Mode)'],
  },
  {
    name: 'Backend & CMS',
    skills: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'Payload CMS', 'REST APIs', 'Server Actions', 'Zod', 'Redis'],
  },
  {
    name: 'Tooling & Testing',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Vitest', 'Playwright', 'Turborepo', 'AI-Assisted Development'],
  },
  {
    name: 'Integrations',
    skills: ['Stripe', 'Salesforce', 'Clerk Auth', 'ShipStation', 'UPS'],
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
                    <Badge key={skill} tone="neutral" shape="square">
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
