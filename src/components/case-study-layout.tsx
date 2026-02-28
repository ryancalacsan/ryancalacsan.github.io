import Image from 'next/image'
import { ExternalLink, Github, Package } from 'lucide-react'
import type { Project, Media } from '@/payload-types'
import { RichText } from './rich-text'
import { ProjectNav } from './project-nav'
import { MotionSection } from './motion-section'

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
    <article className="pt-24 pb-16">
      <div className="wrapper">
        {/* Hero */}
        <MotionSection animation="fadeUp" className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              {typeLabels[project.type] || project.type}
            </span>
            {project.role && (
              <span className="text-sm text-text-secondary">{project.role}</span>
            )}
            <span className="text-sm text-text-secondary">{project.year}</span>
          </div>

          <h1 className="mt-4 font-display text-[length:var(--text-h1)] font-semibold tracking-tight">
            {project.title}
          </h1>

          {project.badge && (
            <p className="mt-2 text-sm font-medium text-accent">{project.badge}</p>
          )}
        </MotionSection>

        {/* Outcome */}
        {project.outcome && (
          <MotionSection animation="fadeUp" className="mt-8 max-w-3xl" delay={0.1}>
            <div className="rounded-xl border border-accent/20 border-l-4 border-l-accent bg-accent/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Key Outcome
              </h2>
              <p className="mt-2 text-lg text-text">{project.outcome}</p>
            </div>
          </MotionSection>
        )}

        {/* Featured Image */}
        {featuredImage && featuredImage.url && (
          <MotionSection animation="fadeUp" className="mt-10" delay={0.15}>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-bg-secondary">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || project.title}
                fill
                className={featuredImage.mimeType === 'image/svg+xml' ? 'object-contain' : `object-cover ${featuredImage.filename?.includes('minimal-motion') ? 'object-center' : 'object-top'}`}
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
                {...(featuredImage.mimeType === 'image/svg+xml' && { unoptimized: true })}
              />
            </div>
          </MotionSection>
        )}

        {/* Content */}
        <div className="mt-12 max-w-3xl">
          {/* Challenge */}
          {project.challenge && (
            <MotionSection animation="fadeUp" className="mt-14">
              <h2 className="font-display text-[length:var(--text-h3)] font-semibold tracking-tight">
                The Challenge
              </h2>
              <RichText
                data={project.challenge as unknown as Record<string, unknown>}
                className="mt-4 prose-custom"
              />
            </MotionSection>
          )}

          {/* What I Built */}
          {project.whatIBuilt && (
            <>
              <hr className="mt-14 border-border" />
              <MotionSection animation="fadeUp" className="mt-14">
                <h2 className="font-display text-[length:var(--text-h3)] font-semibold tracking-tight">
                  What I Built
                </h2>
                <RichText
                  data={project.whatIBuilt as unknown as Record<string, unknown>}
                  className="mt-4 prose-custom"
                />
              </MotionSection>
            </>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <>
              <hr className="mt-14 border-border" />
              <MotionSection animation="fadeUp" className="mt-14">
                <h2 className="font-display text-[length:var(--text-h3)] font-semibold tracking-tight">
                  Tech Stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      key={item.id}
                      className="rounded-md bg-bg-secondary px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {item.technology}
                    </span>
                  ))}
                </div>
              </MotionSection>
            </>
          )}

          {/* Links */}
          {(project.liveUrl || project.githubUrl || project.npmUrl) && (
            <>
              <hr className="mt-14 border-border" />
              <MotionSection animation="fadeUp" className="mt-14">
                <h2 className="font-display text-[length:var(--text-h3)] font-semibold tracking-tight">
                  Links
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text no-underline transition-colors duration-normal hover:bg-bg-secondary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text no-underline transition-colors duration-normal hover:bg-bg-secondary"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                  {project.npmUrl && (
                    <a
                      href={project.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text no-underline transition-colors duration-normal hover:bg-bg-secondary"
                    >
                      <Package className="h-4 w-4" />
                      npm Package
                    </a>
                  )}
                </div>
              </MotionSection>
            </>
          )}
        </div>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <MotionSection animation="fadeUp" className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2">
              {project.galleryImages.map((item) => {
                const img =
                  typeof item.image === 'object' && item.image !== null
                    ? (item.image as Media)
                    : null
                if (!img || !img.url) return null
                return (
                  <figure key={item.id} className="overflow-hidden rounded-xl">
                    <div className="relative aspect-video bg-bg-secondary">
                      <Image
                        src={img.url}
                        alt={img.alt || ''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    {item.caption && (
                      <figcaption className="mt-2 text-center text-sm text-text-secondary">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              })}
            </div>
          </MotionSection>
        )}

        {/* Navigation */}
        <div className="max-w-3xl">
          <ProjectNav previous={previous} next={next} />
        </div>
      </div>
    </article>
  )
}
