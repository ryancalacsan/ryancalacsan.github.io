import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, ExternalLink, Package } from 'lucide-react'
import type { Project, Media } from '@/payload-types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image =
    typeof project.featuredImage === 'object' && project.featuredImage !== null
      ? (project.featuredImage as Media)
      : null

  const hasLinks = project.liveUrl || project.githubUrl || project.npmUrl

  return (
    <div className="group relative rounded-xl border border-border bg-surface p-6 transition-all duration-normal hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-accent/10 sm:p-8">
      {/* Hover arrow indicator */}
      <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-bg-secondary text-text-secondary opacity-0 transition-all duration-normal group-hover:opacity-100 group-hover:text-accent sm:right-8 sm:top-8">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {image && image.url && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-bg-secondary lg:w-1/2">
            <Image
              src={image.url}
              alt={image.alt || project.title}
              fill
              className={`${image.mimeType === 'image/svg+xml' ? 'object-contain' : image.filename?.includes('minimal-motion') ? 'object-cover object-center' : 'object-cover object-top'} transition-transform duration-slow group-hover:scale-[1.03]`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              {...(image.mimeType === 'image/svg+xml' && { unoptimized: true })}
            />
            {/* Subtle gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-normal group-hover:opacity-100" />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[length:var(--text-h3)] font-semibold text-text">
              {/* Stretched link — makes entire card clickable */}
              <Link
                href={`/projects/${project.slug}`}
                className="no-underline text-inherit after:absolute after:inset-0"
              >
                {project.title}
              </Link>
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
                  className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary transition-colors duration-normal group-hover:bg-accent/5 group-hover:text-text-secondary"
                >
                  {item.technology}
                </span>
              ))}
            </div>
          )}

          {/* Action links — sit above the stretched link */}
          {hasLinks && (
            <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent no-underline transition-colors duration-normal hover:bg-accent/20"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary no-underline transition-colors duration-normal hover:text-text hover:bg-border"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              )}
              {project.npmUrl && (
                <a
                  href={project.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary no-underline transition-colors duration-normal hover:text-text hover:bg-border"
                >
                  <Package className="h-3 w-3" />
                  npm
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
