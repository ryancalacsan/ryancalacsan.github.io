import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { MotionSection } from '../motion-section'
import { ProjectCard } from '../project-card'

export async function Projects() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { featured: { equals: true } },
    sort: 'order',
  })

  return (
    <MotionSection
      animation="fadeUp"
      className="py-[length:var(--spacing-section)]"
      id="projects"
    >
      <div className="wrapper">
        <h2 className="font-display text-[length:var(--text-h2)] font-medium tracking-tight">
          Featured Projects
        </h2>

        <div className="mt-10 grid gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-text-secondary">
              Projects coming soon. Add them via the{' '}
              <Link href="/admin" className="text-accent hover:text-accent-hover">
                admin panel
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </MotionSection>
  )
}
