import Image from 'next/image'
import { ExternalLink, Github, Package, Target } from 'lucide-react'
import {
  Container,
  Heading,
  Eyebrow,
  Text,
  Badge,
  Prose,
  Callout,
  Frame,
  AspectRatio,
  Divider,
  Inline,
  Button,
} from '@ryancalacsan/caliper-ui'
import type { Project, Media } from '@/payload-types'
import { RichText } from './rich-text'
import { ProjectNav } from './project-nav'
import { RevealSection } from './reveal-section'

const typeLabels: Record<string, string> = {
  fullstack: 'Full-Stack Application',
  frontend: 'Frontend Showcase',
  cli: 'CLI Tool',
  professional: 'Professional Work',
}

interface CaseStudyLayoutProps {
  project: Project
  previous: Project | null
  next: Project | null
}

export function CaseStudyLayout({ project, previous, next }: CaseStudyLayoutProps) {
  const featuredImage =
    typeof project.featuredImage === 'object' && project.featuredImage !== null
      ? (project.featuredImage as Media)
      : null
  const isSvg = featuredImage?.mimeType === 'image/svg+xml'
  const isCenter = featuredImage?.filename?.includes('minimal-motion')

  return (
    <article className="case-study">
      <div className="dot-grid" aria-hidden="true" />
      <Container size="lg">
        {/* Hero */}
        <RevealSection animation="fadeUp" className="case-study__hero">
          <Eyebrow tone="muted" className="case-study__meta">
            {typeLabels[project.type] || project.type}
            {project.role ? ` · ${project.role}` : ''} · {project.year}
          </Eyebrow>

          <Heading level={1} size="4xl" className="case-study__title">
            {project.title}
          </Heading>

          {project.badge && (
            <Badge tone="accent" className="case-study__badge">
              {project.badge}
            </Badge>
          )}
        </RevealSection>

        {/* Outcome */}
        {project.outcome && (
          <RevealSection animation="fadeUp" className="case-study__outcome" delay={0.1}>
            <Callout
              tone="accent"
              title="Key Outcome"
              icon={<Target size={18} aria-hidden="true" />}
            >
              <Text as="p" size="md">
                {project.outcome}
              </Text>
            </Callout>
          </RevealSection>
        )}

        {/* Featured image */}
        {featuredImage?.url && (
          <RevealSection animation="fadeUp" className="case-study__featured" delay={0.15}>
            <Frame className="case-study__featured-frame">
              <AspectRatio
                ratio={16 / 9}
                fit={isSvg ? 'contain' : 'cover'}
                className={`case-study__shot${isSvg ? ' case-study__shot--contain' : isCenter ? ' case-study__shot--center' : ''}`}
              >
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.alt || project.title}
                  fill
                  sizes="(max-width: 960px) 100vw, 960px"
                  priority
                  {...(isSvg && { unoptimized: true })}
                />
              </AspectRatio>
            </Frame>
          </RevealSection>
        )}

        {/* Content */}
        <div className="case-study__content">
          {project.challenge && (
            <RevealSection animation="fadeUp" className="case-study__section">
              <Heading level={2} size="xl" className="case-study__section-heading">
                The Challenge
              </Heading>
              <Prose>
                <RichText data={project.challenge as unknown as Record<string, unknown>} />
              </Prose>
            </RevealSection>
          )}

          {project.whatIBuilt && (
            <>
              <Divider className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <Heading level={2} size="xl" className="case-study__section-heading">
                  What I Built
                </Heading>
                <Prose>
                  <RichText data={project.whatIBuilt as unknown as Record<string, unknown>} />
                </Prose>
              </RevealSection>
            </>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <>
              <Divider className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <Heading level={2} size="xl" className="case-study__section-heading">
                  Tech Stack
                </Heading>
                <Inline gap="2xs" wrap className="case-study__tags">
                  {project.techStack.map((item) => (
                    <Badge key={item.id} tone="neutral">
                      {item.technology}
                    </Badge>
                  ))}
                </Inline>
              </RevealSection>
            </>
          )}

          {(project.liveUrl || project.githubUrl || project.npmUrl) && (
            <>
              <Divider className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <Heading level={2} size="xl" className="case-study__section-heading">
                  Links
                </Heading>
                <Inline gap="sm" wrap>
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="primary"
                      size="sm"
                      leadingIcon={<ExternalLink size={15} aria-hidden="true" />}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      leadingIcon={<Github size={15} aria-hidden="true" />}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Source Code
                      </a>
                    </Button>
                  )}
                  {project.npmUrl && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      leadingIcon={<Package size={15} aria-hidden="true" />}
                    >
                      <a href={project.npmUrl} target="_blank" rel="noopener noreferrer">
                        npm Package
                      </a>
                    </Button>
                  )}
                </Inline>
              </RevealSection>
            </>
          )}
        </div>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <RevealSection animation="fadeUp" className="case-study__gallery-reveal">
            <div className="case-study__gallery">
              {project.galleryImages.map((item) => {
                const img =
                  typeof item.image === 'object' && item.image !== null
                    ? (item.image as Media)
                    : null
                if (!img?.url) return null
                return (
                  <figure key={item.id} className="case-study__figure">
                    <Frame>
                      <AspectRatio ratio={16 / 9} className="case-study__shot">
                        <Image
                          src={img.url}
                          alt={img.alt || ''}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </AspectRatio>
                    </Frame>
                    {item.caption && (
                      <Text as="figcaption" size="sm" tone="muted" className="case-study__figcaption">
                        {item.caption}
                      </Text>
                    )}
                  </figure>
                )
              })}
            </div>
          </RevealSection>
        )}

        {/* Navigation */}
        <div className="case-study__nav">
          <ProjectNav previous={previous} next={next} />
        </div>
      </Container>
    </article>
  )
}
