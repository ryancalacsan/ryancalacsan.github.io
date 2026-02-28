import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'year', 'featured', 'order'],
    description: 'Portfolio projects displayed on the site',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      validate: (val: string | null | undefined) => {
        if (!val) return 'Slug is required'
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val)) {
          return 'Slug must be lowercase letters, numbers, and hyphens only'
        }
        return true
      },
      admin: {
        description: 'URL-friendly identifier (e.g., "quotecraft")',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Full-Stack Application', value: 'fullstack' },
        { label: 'Frontend Showcase', value: 'frontend' },
        { label: 'CLI Tool', value: 'cli' },
        { label: 'Professional Work', value: 'professional' },
      ],
    },
    {
      name: 'badge',
      type: 'text',
      admin: {
        description: 'Short label for the card (e.g., "Live Demo", "Published on npm")',
      },
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Your role on this project (e.g., "Solo Developer", "Principal Engineer")',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      min: 2020,
      max: 2030,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this project on the homepage',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Brief project description for the card (1-2 sentences)',
      },
    },
    {
      name: 'challenge',
      type: 'richText',
      admin: {
        description: 'The problem or challenge — displayed on case study page',
      },
    },
    {
      name: 'whatIBuilt',
      type: 'richText',
      admin: {
        description: 'Features, approach, and accomplishments — displayed on case study page',
      },
    },
    {
      name: 'outcome',
      type: 'textarea',
      admin: {
        description: 'Key result or metric (displayed prominently at top of case study)',
      },
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Technologies used (e.g., "Next.js 15", "TypeScript")',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
      admin: {
        description: 'Live demo URL',
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: {
        description: 'GitHub repository URL',
      },
    },
    {
      name: 'npmUrl',
      type: 'text',
      admin: {
        description: 'npm package URL (for CLI tools)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Main project image/screenshot',
      },
    },
    {
      name: 'galleryImages',
      type: 'array',
      admin: {
        description: 'Additional screenshots for the case study page',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}
