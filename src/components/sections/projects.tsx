import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Container, Grid, Heading, Eyebrow, Text } from '@ryancalacsan/caliper-ui'
import { RevealSection } from '../reveal-section'
import { ProjectCard } from '../project-card'

export async function Projects() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { featured: { equals: true } },
    sort: 'order',
  })

  return (
    <RevealSection animation="fadeUp" id="projects" className="projects">
      <Container size="xl">
        <header className="section-head">
          <Eyebrow tone="accent" className="section-head__index">
            02 / Selected Work
          </Eyebrow>
          <Heading level={2} size="3xl" className="section-head__title">
            Featured Projects
          </Heading>
        </header>

        {projects.length > 0 ? (
          <Grid minItemWidth="340px" gap="lg" className="projects__grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        ) : (
          <Text tone="muted">
            Projects coming soon. Add them via the{' '}
            <Link href="/admin" className="projects__empty-link">
              admin panel
            </Link>
            .
          </Text>
        )}
      </Container>
    </RevealSection>
  )
}
