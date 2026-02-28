import { getPayload } from 'payload'
import config from '@payload-config'
import path from 'path'

// ---------------------------------------------------------------------------
// Lexical Rich Text Helpers
// ---------------------------------------------------------------------------

function textNode(text: string, bold = false) {
  return {
    mode: 'normal' as const,
    text,
    type: 'text',
    style: '',
    detail: 0,
    format: bold ? 1 : 0,
    version: 1,
  }
}

function paragraph(text: string) {
  return {
    type: 'paragraph',
    children: [textNode(text)],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
    textFormat: 0,
    textStyle: '',
  }
}

function bulletList(items: string[]) {
  return {
    type: 'list',
    children: items.map((item, i) => ({
      type: 'listitem',
      children: [textNode(item)],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
      value: i + 1,
    })),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
    listType: 'bullet' as const,
    start: 1,
    tag: 'ul' as const,
  }
}

function richText(children: ReturnType<typeof paragraph | typeof bulletList>[]) {
  return {
    root: {
      type: 'root',
      format: '' as const,
      indent: 0,
      version: 1,
      children,
      direction: 'ltr' as const,
    },
  }
}

// ---------------------------------------------------------------------------
// Image Upload Helper
// ---------------------------------------------------------------------------

async function uploadImage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  filename: string,
  altText: string,
) {
  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: altText } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    console.log(`  [skip] Media "${altText}" already exists`)
    return existing.docs[0]
  }

  const filePath = path.resolve(process.cwd(), 'public', filename)
  const doc = await payload.create({
    collection: 'media',
    data: { alt: altText },
    filePath,
  })
  console.log(`  [created] Media "${altText}"`)
  return doc
}

// ---------------------------------------------------------------------------
// Project Data
// ---------------------------------------------------------------------------

const projectsData = [
  {
    title: 'PrintNinja',
    slug: 'printninja',
    type: 'professional' as const,
    badge: 'Professional Work',
    role: 'Principal Engineer',
    year: 2025,
    featured: true,
    order: 1,
    description:
      "Built the company's entire modern technology stack from scratch as the sole engineer. PrintNinja is a custom printing company serving self-publishers and game makers.",
    outcome:
      'Built a 230,000+ line Configure-Price-Quote platform from scratch as the sole engineer, replacing manual quoting processes and legacy PHP systems.',
    challenge: richText([
      paragraph(
        'Inherited an environment with no version control, fragmented contractor code, and significant technical debt. Needed to build a Configure-Price-Quote (CPQ) platform to replace manual quoting processes while migrating critical business logic from legacy PHP systems.',
      ),
      paragraph(
        'The platform needed to handle complex pricing with 500+ variables across 4 product lines, integrate with Stripe for payment processing, sync with Salesforce CRM, and support file uploads with PDF validation.',
      ),
    ]),
    whatIBuilt: richText([
      paragraph(
        'As the sole engineer, I designed, built, and deployed the entire platform from the ground up:',
      ),
      bulletList([
        '230,000+ line full-stack platform using Next.js, React, TypeScript, and PostgreSQL',
        'Real-time pricing engine handling 500+ variables across 4 product lines with LRU caching',
        'Stripe payment integration with webhook processing',
        'Salesforce CRM sync with 80+ custom field mappings across 10 modules',
        'Multi-carrier shipping integration (ShipStation, UPS, TForce Freight)',
        'Self-hosted Docker infrastructure with blue-green deployment and automated backups',
      ]),
    ]),
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Drizzle ORM',
      'Supabase',
      'Docker',
      'Stripe',
      'Salesforce',
      'Clerk Auth',
      'Turborepo',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    npmUrl: undefined,
    image: { filename: 'printninja-architecture.svg', alt: 'PrintNinja system architecture diagram' },
  },
  {
    title: 'QuoteCraft',
    slug: 'quotecraft',
    type: 'fullstack' as const,
    badge: 'Live Demo',
    role: 'Solo Developer',
    year: 2025,
    featured: true,
    order: 2,
    description:
      'Quote builder for freelancers and contractors. Create quotes with real-time pricing, share via unique links, accept Stripe payments, and track revenue from a dashboard with analytics.',
    outcome:
      'Full-stack SaaS application with real-time pricing, Stripe payment processing, and an analytics dashboard — built as a solo developer.',
    challenge: richText([
      paragraph(
        'Freelancers and contractors often rely on spreadsheets, email threads, or manual invoicing to manage client quotes. This process is error-prone, looks unprofessional, and makes it difficult to track revenue or follow up on pending quotes.',
      ),
      paragraph(
        'I wanted to build a purpose-built tool that lets freelancers create professional quotes quickly, share them with clients via unique links, and get paid — all from a single dashboard.',
      ),
    ]),
    whatIBuilt: richText([
      paragraph(
        'A full-stack SaaS application with a complete quoting workflow:',
      ),
      bulletList([
        'Quote builder with real-time pricing calculations and line item management',
        'Shareable quote links that clients can view and accept without creating an account',
        'Stripe payment integration for accepting payments directly from quotes',
        'Revenue dashboard with analytics, filtering, and status tracking',
        'PDF export for offline sharing and record-keeping',
        'Reusable quote templates with drag-and-drop reordering',
        'Dark mode with full theme persistence',
      ]),
    ]),
    techStack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Drizzle',
      'Stripe',
      'Clerk',
    ],
    liveUrl: 'https://quotecraft-taupe.vercel.app',
    githubUrl: 'https://github.com/ryancalacsan/quotecraft',
    npmUrl: undefined,
    image: { filename: 'QuoteCraft-dashboard.png', alt: 'QuoteCraft dashboard showing quote builder and analytics' },
  },
  {
    title: 'Chicago Current',
    slug: 'chicago-current',
    type: 'frontend' as const,
    badge: 'Photo Essay',
    role: 'Solo Developer',
    year: 2026,
    featured: true,
    order: 3,
    description:
      'An immersive, scroll-driven photo essay documenting a 9-mile kayak journey down the Chicago River. Originally published in Mountain Gazette (2024), reimagined as an interactive web experience.',
    outcome:
      'Immersive scroll-driven photo essay that transforms a print editorial into an engaging digital experience with parallax animations and optimized image loading.',
    challenge: richText([
      paragraph(
        'Transform a print editorial originally published in Mountain Gazette into an engaging digital experience that showcases both photography and frontend craft.',
      ),
      paragraph(
        'Needed to create smooth scroll-driven animations while maintaining performance despite heavy imagery, and tell a compelling story that keeps viewers scrolling through the entire 9-mile journey from River Park to downtown Chicago.',
      ),
    ]),
    whatIBuilt: richText([
      paragraph(
        'An immersive scroll-driven photo essay with modern frontend techniques:',
      ),
      bulletList([
        'Immersive scroll-driven photo essay with 6 narrative sections',
        'Parallax image reveals and scroll-triggered animations using Framer Motion',
        'Smooth scrolling with Lenis for a premium, natural feel',
        'Optimized image loading with blur-up placeholders and lazy loading',
        'Responsive design adapting from desktop parallax to mobile-optimized layouts',
        'Reduced motion support for accessibility (prefers-reduced-motion)',
        'Performance optimized — Lighthouse 90+ despite image-heavy content',
      ]),
    ]),
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Framer Motion',
      'Lenis',
      'Tailwind CSS',
      'Next/Image',
    ],
    liveUrl: 'https://chicago-current.vercel.app',
    githubUrl: 'https://github.com/ryancalacsan/chicago-current',
    npmUrl: undefined,
    image: { filename: 'chicago-current.png', alt: 'Chicago Current — scroll-driven photo essay of a kayak journey down the Chicago River' },
  },
  {
    title: 'Minimal Motion Gallery',
    slug: 'minimal-motion-gallery',
    type: 'frontend' as const,
    badge: 'Frontend Showcase',
    role: 'Solo Developer',
    year: 2025,
    featured: true,
    order: 4,
    description:
      'A typography-focused single-page experience with sophisticated micro-interactions. Demonstrates restraint, taste, and CSS mastery through variable font animations, magnetic hover effects, and smooth scroll-triggered reveals.',
    outcome:
      'A typography-focused frontend showcase demonstrating CSS mastery, variable font animations, and sophisticated motion design.',
    challenge: richText([
      paragraph(
        'Most portfolio projects focus on functionality. I wanted to build something that demonstrates a different kind of skill — an eye for design, restraint, and the ability to craft polished micro-interactions that feel intentional rather than decorative.',
      ),
      paragraph(
        'The challenge was to create a single-page experience where every animation serves a purpose, typography is the primary design element, and the overall feel communicates craft and taste.',
      ),
    ]),
    whatIBuilt: richText([
      paragraph(
        'A single-page gallery experience built with modern frontend techniques:',
      ),
      bulletList([
        'Variable font weight animations that respond to scroll position',
        'Magnetic hover effects on interactive elements using custom physics',
        'Smooth scroll-triggered section reveals with staggered timing',
        'Fluid typography scaling with CSS clamp() for responsive design',
        'Lenis smooth scrolling for inertial, natural-feeling navigation',
        'Full accessibility support with prefers-reduced-motion media query',
      ]),
    ]),
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Framer Motion',
      'Lenis',
      'Tailwind CSS',
      'Variable Fonts',
    ],
    liveUrl: 'https://minimal-motion-gray.vercel.app/',
    githubUrl: 'https://github.com/ryancalacsan/minimal-motion',
    npmUrl: undefined,
    image: { filename: 'minimal-motion.jpg', alt: 'Minimal Motion Gallery showing typography and scroll animations' },
  },
  {
    title: 'print-check',
    slug: 'print-check',
    type: 'cli' as const,
    badge: 'Published on npm',
    role: 'Solo Developer',
    year: 2025,
    featured: true,
    order: 5,
    description:
      'CLI tool that validates print-ready PDF files for prepress requirements. Runs 8 automated checks including bleed, fonts, color space, resolution, and PDF/X compliance. Published to npm.',
    outcome:
      'Open-source CLI tool published on npm that automates prepress PDF validation with 8 automated checks and CI pipeline support.',
    challenge: richText([
      paragraph(
        'Print professionals and self-publishers frequently submit PDF files that fail prepress requirements — missing bleed, wrong color space, low resolution images, or non-embedded fonts. These issues cause costly reprints and production delays.',
      ),
      paragraph(
        'Existing prepress tools are expensive desktop applications. I wanted to build a fast, free, command-line tool that could validate print-ready PDFs and integrate into CI pipelines for automated checking.',
      ),
    ]),
    whatIBuilt: richText([
      paragraph('A Node.js CLI tool with comprehensive prepress validation:'),
      bulletList([
        '8 automated checks: bleed, fonts, color space, resolution, ink coverage, transparency, PDF/X compliance, and page size',
        'Built-in prepress profiles for common print specifications',
        'Configuration file support for custom validation rules',
        'JSON output mode for CI/CD pipeline integration',
        'Clear, actionable error messages with fix suggestions',
        'Published to npm with full documentation and test coverage',
      ]),
    ]),
    techStack: [
      'Node.js',
      'TypeScript',
      'Commander.js',
      'mupdf',
      'Vitest',
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/ryancalacsan/print-check-cli',
    npmUrl: 'https://www.npmjs.com/package/print-check-cli',
    image: { filename: 'print-check.gif', alt: 'print-check CLI tool running prepress validation on a PDF file' },
  },
]

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

const siteSettingsData = {
  siteTitle: 'Ryan Calacsan',
  siteDescription:
    'Full-Stack Engineer based in Chicago. Building enterprise platforms with Next.js, TypeScript, and PostgreSQL.',
  bio: richText([
    paragraph(
      "I'm a full-stack engineer based in Chicago who builds web applications with a focus on clean architecture and delivering real business value.",
    ),
    paragraph(
      'Most recently, I served as Principal Engineer at PrintNinja, where I built a 200,000+ line Configure-Price-Quote platform from scratch as the sole engineer. I joined as their first in-house engineer, inheriting an environment with no version control and significant technical debt from previous contractors. I introduced modern engineering practices, migrated critical business logic from legacy PHP systems, and built a platform handling complex pricing with 500+ variables, payment processing, and CRM integration.',
    ),
    paragraph(
      'Before transitioning to software engineering, I spent 15 years in photography and studio management — experience that gave me strong project ownership skills and an eye for user experience.',
    ),
    paragraph('Currently open to full-stack or frontend roles, preferably remote.'),
  ]),
  socialLinks: {
    github: 'https://github.com/ryancalacsan',
    linkedin: 'https://www.linkedin.com/in/ryancalacsan/',
    email: 'calacsancode@gmail.com',
  },
}

// ---------------------------------------------------------------------------
// Seed Runner
// ---------------------------------------------------------------------------

async function seed() {
  console.log('\nSeeding database...\n')

  const payload = await getPayload({ config })

  // --- Upload Images ---
  console.log('Uploading images...')
  const mediaMap: Record<string, number> = {}

  for (const project of projectsData) {
    if (project.image) {
      const doc = await uploadImage(payload, project.image.filename, project.image.alt)
      mediaMap[project.image.filename] = doc.id
    }
  }

  // --- Create Projects ---
  console.log('\nCreating projects...')

  for (const project of projectsData) {
    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: project.slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`  [skip] Project "${project.title}" already exists`)
      continue
    }

    await payload.create({
      collection: 'projects',
      data: {
        title: project.title,
        slug: project.slug,
        type: project.type,
        badge: project.badge,
        role: project.role,
        year: project.year,
        featured: project.featured,
        order: project.order,
        description: project.description,
        outcome: project.outcome,
        challenge: project.challenge,
        whatIBuilt: project.whatIBuilt,
        techStack: project.techStack.map((tech) => ({ technology: tech })),
        liveUrl: project.liveUrl || undefined,
        githubUrl: project.githubUrl || undefined,
        npmUrl: project.npmUrl || undefined,
        featuredImage: project.image ? mediaMap[project.image.filename] : undefined,
      },
    })
    console.log(`  [created] Project "${project.title}"`)
  }

  // --- Update Site Settings ---
  console.log('\nUpdating site settings...')

  await payload.updateGlobal({
    slug: 'site-settings',
    data: siteSettingsData,
  })
  console.log('  [updated] Site Settings')

  console.log('\nSeed complete!\n')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
