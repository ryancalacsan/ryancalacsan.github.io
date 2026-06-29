import Image from 'next/image'
import NextLink from 'next/link'
import { ExternalLink, Github, Package } from 'lucide-react'
import { Card, AspectRatio, Heading, Text, Eyebrow, Badge, Inline, Link } from '@ryancalacsan/caliper-ui'
import type { Project, Media } from '@/payload-types'

const typeLabels: Record<string, string> = {
  fullstack: 'Full-Stack',
  frontend: 'Frontend',
  cli: 'CLI Tool',
  professional: 'Professional',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image =
    typeof project.featuredImage === 'object' && project.featuredImage !== null
      ? (project.featuredImage as Media)
      : null

  const isSvg = image?.mimeType === 'image/svg+xml'
  const isCenter = image?.filename?.includes('minimal-motion')
  const hasLinks = project.liveUrl || project.githubUrl || project.npmUrl

  return (
    <Card
      fill
      interactive
      className="project-card"
      media={
        image?.url ? (
          <AspectRatio
            ratio={16 / 9}
            fit={isSvg ? 'contain' : 'cover'}
            className={`project-card__shot${isSvg ? ' project-card__shot--contain' : isCenter ? ' project-card__shot--center' : ''}`}
          >
            <Image
              src={image.url}
              alt={image.alt || project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              {...(isSvg && { unoptimized: true })}
            />
          </AspectRatio>
        ) : undefined
      }
      header={
        <Inline gap="sm" align="center" justify="between" wrap>
          <Eyebrow tone="muted">
            {typeLabels[project.type] || project.type} · {project.year}
          </Eyebrow>
          {project.badge && (
            <Badge tone="accent" shape="square">
              {project.badge}
            </Badge>
          )}
        </Inline>
      }
      footer={
        hasLinks ? (
          <Inline gap="md" wrap className="project-card__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action project-card__action--accent"
              >
                <ExternalLink className="project-card__action-icon" aria-hidden="true" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action"
              >
                <Github className="project-card__action-icon" aria-hidden="true" />
                Source
              </a>
            )}
            {project.npmUrl && (
              <a
                href={project.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action"
              >
                <Package className="project-card__action-icon" aria-hidden="true" />
                npm
              </a>
            )}
          </Inline>
        ) : undefined
      }
    >
      <Heading level={3} size="lg" className="project-card__title">
        {/* Caliper interactive Card + stretched Link makes the whole card open the case study */}
        <Link asChild stretch tone="inherit" underline="none" className="project-card__link">
          <NextLink href={`/projects/${project.slug}`}>{project.title}</NextLink>
        </Link>
      </Heading>

      <Text tone="muted" className="project-card__desc">
        {project.description}
      </Text>

      {project.techStack && project.techStack.length > 0 && (
        <Inline gap="2xs" wrap className="project-card__tags">
          {project.techStack.map((item) => (
            <Badge key={item.id} tone="neutral" shape="square">
              {item.technology}
            </Badge>
          ))}
        </Inline>
      )}
    </Card>
  )
}
