import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Project } from '@/payload-types'

interface ProjectNavProps {
  previous: Project | null
  next: Project | null
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav className="project-nav">
      <div className="project-nav__row">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="project-nav__link project-nav__link--prev"
          >
            <ArrowLeft className="project-nav__arrow project-nav__arrow--prev" />
            <span>{previous.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="project-nav__link project-nav__link--next"
          >
            <span>{next.title}</span>
            <ArrowRight className="project-nav__arrow project-nav__arrow--next" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="project-nav__back">
        <Link href="/#projects" className="project-nav__back-link">
          Back to all projects
        </Link>
      </div>
    </nav>
  )
}
