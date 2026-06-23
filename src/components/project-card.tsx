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
    <div className="project-card">
      {/* Hover arrow indicator */}
      <div className="project-card__arrow">
        <ArrowUpRight className="project-card__arrow-icon" />
      </div>

      <div className="project-card__body">
        {image && image.url && (
          <div className="project-card__media">
            <Image
              src={image.url}
              alt={image.alt || project.title}
              fill
              className={`${image.mimeType === 'image/svg+xml' ? 'project-card__image--contain' : image.filename?.includes('minimal-motion') ? 'project-card__image--cover-center' : 'project-card__image--cover-top'} project-card__image`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              {...(image.mimeType === 'image/svg+xml' && { unoptimized: true })}
            />
            {/* Subtle gradient overlay on hover */}
            <div className="project-card__overlay" />
          </div>
        )}

        <div className="project-card__content">
          <div className="project-card__header">
            <h3 className="project-card__title">
              {/* Stretched link — makes entire card clickable */}
              <Link
                href={`/projects/${project.slug}`}
                className="project-card__link"
              >
                {project.title}
              </Link>
            </h3>
            {project.badge && (
              <span className="project-card__badge">
                {project.badge}
              </span>
            )}
          </div>

          <p className="project-card__description">{project.description}</p>

          {project.techStack && project.techStack.length > 0 && (
            <div className="project-card__tags">
              {project.techStack.map((item) => (
                <span
                  key={item.id}
                  className="project-card__tag"
                >
                  {item.technology}
                </span>
              ))}
            </div>
          )}

          {/* Action links — sit above the stretched link */}
          {hasLinks && (
            <div className="project-card__actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__action project-card__action--accent"
                >
                  <ExternalLink className="project-card__action-icon" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__action"
                >
                  <Github className="project-card__action-icon" />
                  GitHub
                </a>
              )}
              {project.npmUrl && (
                <a
                  href={project.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__action"
                >
                  <Package className="project-card__action-icon" />
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
