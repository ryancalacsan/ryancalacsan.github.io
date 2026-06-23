import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
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
    <RevealSection
      animation="fadeUp"
      className="projects"
      id="projects"
    >
      <div className="wrapper">
        <h2 className="projects__heading">
          Featured Projects
        </h2>

        <div className="projects__grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="projects__empty">
              Projects coming soon. Add them via the{' '}
              <Link href="/admin" className="projects__empty-link">
                admin panel
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </RevealSection>
  )
}
