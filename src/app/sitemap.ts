import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 100,
    sort: 'order',
    overrideAccess: false,
  })

  const projectUrls: MetadataRoute.Sitemap = projects
    .filter((project) => Boolean(project.slug))
    .map((project) => ({
      url: `https://ryancalacsan.dev/projects/${project.slug}`,
      lastModified: project.updatedAt,
    }))

  return [
    {
      url: 'https://ryancalacsan.dev',
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}
