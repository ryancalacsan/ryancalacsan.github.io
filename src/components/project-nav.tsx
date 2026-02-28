import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Project } from '@/payload-types'

interface ProjectNavProps {
  previous: Project | null
  next: Project | null
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav className="mt-16 border-t border-border pt-8">
      <div className="flex items-center justify-between">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex items-center gap-2 text-sm text-text-secondary no-underline transition-colors duration-normal hover:text-text"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-normal group-hover:-translate-x-1" />
            <span>{previous.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-text-secondary no-underline transition-colors duration-normal hover:text-text"
          >
            <span>{next.title}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-normal group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/#projects"
          className="text-sm text-text-secondary no-underline transition-colors duration-normal hover:text-accent"
        >
          Back to all projects
        </Link>
      </div>
    </nav>
  )
}
