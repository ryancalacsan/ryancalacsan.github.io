import Image from 'next/image'
import { ExternalLink, Github, Package } from 'lucide-react'
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

  return (
    <article className="case-study">
      <div className="wrapper">
        {/* Hero */}
        <RevealSection animation="fadeUp" className="case-study__hero">
          <div className="case-study__meta">
            <span className="case-study__type">
              {typeLabels[project.type] || project.type}
            </span>
            {project.role && (
              <span className="case-study__meta-text">{project.role}</span>
            )}
            <span className="case-study__meta-text">{project.year}</span>
          </div>

          <h1 className="case-study__title">
            {project.title}
          </h1>

          {project.badge && (
            <p className="case-study__badge">{project.badge}</p>
          )}
        </RevealSection>

        {/* Outcome */}
        {project.outcome && (
          <RevealSection animation="fadeUp" className="case-study__outcome" delay={0.1}>
            <div className="case-study__outcome-box">
              <h2 className="case-study__outcome-label">
                Key Outcome
              </h2>
              <p className="case-study__outcome-text">{project.outcome}</p>
            </div>
          </RevealSection>
        )}

        {/* Featured Image */}
        {featuredImage && featuredImage.url && (
          <RevealSection animation="fadeUp" className="case-study__featured" delay={0.15}>
            <div className="case-study__featured-frame">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || project.title}
                fill
                className={featuredImage.mimeType === 'image/svg+xml' ? 'case-study__featured-img case-study__featured-img--contain' : `case-study__featured-img case-study__featured-img--cover ${featuredImage.filename?.includes('minimal-motion') ? 'case-study__featured-img--center' : 'case-study__featured-img--top'}`}
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
                {...(featuredImage.mimeType === 'image/svg+xml' && { unoptimized: true })}
              />
            </div>
          </RevealSection>
        )}

        {/* Content */}
        <div className="case-study__content">
          {/* Challenge */}
          {project.challenge && (
            <RevealSection animation="fadeUp" className="case-study__section">
              <h2 className="case-study__section-heading">
                The Challenge
              </h2>
              <RichText
                data={project.challenge as unknown as Record<string, unknown>}
                className="case-study__prose prose-custom"
              />
            </RevealSection>
          )}

          {/* What I Built */}
          {project.whatIBuilt && (
            <>
              <hr className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <h2 className="case-study__section-heading">
                  What I Built
                </h2>
                <RichText
                  data={project.whatIBuilt as unknown as Record<string, unknown>}
                  className="case-study__prose prose-custom"
                />
              </RevealSection>
            </>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <>
              <hr className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <h2 className="case-study__section-heading">
                  Tech Stack
                </h2>
                <div className="case-study__tags">
                  {project.techStack.map((item) => (
                    <span key={item.id} className="case-study__tag">
                      {item.technology}
                    </span>
                  ))}
                </div>
              </RevealSection>
            </>
          )}

          {/* Links */}
          {(project.liveUrl || project.githubUrl || project.npmUrl) && (
            <>
              <hr className="case-study__divider" />
              <RevealSection animation="fadeUp" className="case-study__section">
                <h2 className="case-study__section-heading">
                  Links
                </h2>
                <div className="case-study__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study__link"
                    >
                      <ExternalLink className="case-study__link-icon" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study__link"
                    >
                      <Github className="case-study__link-icon" />
                      Source Code
                    </a>
                  )}
                  {project.npmUrl && (
                    <a
                      href={project.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study__link"
                    >
                      <Package className="case-study__link-icon" />
                      npm Package
                    </a>
                  )}
                </div>
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
                if (!img || !img.url) return null
                return (
                  <figure key={item.id} className="case-study__figure">
                    <div className="case-study__figure-frame">
                      <Image
                        src={img.url}
                        alt={img.alt || ''}
                        fill
                        className="case-study__figure-img"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    {item.caption && (
                      <figcaption className="case-study__figcaption">
                        {item.caption}
                      </figcaption>
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
      </div>
    </article>
  )
}
