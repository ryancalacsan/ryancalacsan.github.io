import Image from 'next/image'
import Link from 'next/link'
import type { Project, Media } from '@/payload-types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image =
    typeof project.featuredImage === 'object' && project.featuredImage !== null
      ? (project.featuredImage as Media)
      : null

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-border bg-surface p-6 no-underline transition-all duration-normal hover:border-accent/30 hover:shadow-lg sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {image && image.url && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-bg-secondary lg:w-1/2">
            <Image
              src={image.url}
              alt={image.alt || project.title}
              fill
              className="object-cover transition-transform duration-slow group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[length:var(--text-h3)] font-semibold text-text">
              {project.title}
            </h3>
            {project.badge && (
              <span className="rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {project.badge}
              </span>
            )}
          </div>

          <p className="mt-3 text-text-secondary">{project.description}</p>

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span
                  key={item.id}
                  className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary"
                >
                  {item.technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
