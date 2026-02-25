import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import { CaseStudyLayout } from '@/components/case-study-layout'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 100,
  })

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  // Get all projects for prev/next navigation
  const { docs: allProjects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })

  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const previous = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const next = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return <CaseStudyLayout project={project} previous={previous} next={next} />
}
