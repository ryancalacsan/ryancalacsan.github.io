import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Ryan Calacsan',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      admin: {
        description: 'Used for SEO meta description',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      admin: {
        description: 'Short bio for about section',
      },
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'github', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'email', type: 'email' },
      ],
    },
  ],
}
