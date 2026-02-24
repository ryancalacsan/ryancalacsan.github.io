const projectsData = [
  {
    id: 0,
    title: "QuoteCraft",
    featured: true,
    badge: "Live Demo",
    image: "QuoteCraft-dashboard.png",
    description:
      "Quote builder for freelancers and contractors. Create quotes with real-time pricing, share via unique links, accept Stripe payments, and track revenue from a dashboard with analytics. Features PDF export, quote templates, drag-and-drop, and dark mode.",
    githubLink: "https://github.com/ryancalacsan/quotecraft",
    livePreviewLink: "https://quotecraft-taupe.vercel.app",
    tags: ["Next.js", "TypeScript", "Supabase", "Drizzle", "Stripe", "Clerk"],
  },
  {
    id: 1,
    title: "Minimal Motion Gallery",
    subtitle: "FRONTEND SHOWCASE",
    featured: true,
    badge: "Frontend Showcase",
    image: "minimal-motion.jpg",
    description:
      "A typography-focused single-page experience with sophisticated micro-interactions. Demonstrates restraint, taste, and CSS mastery through variable font animations, magnetic hover effects, and smooth scroll-triggered reveals.",
    githubLink: "https://github.com/ryancalacsan/minimal-motion",
    livePreviewLink: "https://minimal-motion-gray.vercel.app/",
    tags: ["Next.js 15", "TypeScript", "Framer Motion", "Lenis", "Tailwind CSS", "Variable Fonts"],
  },
  {
    id: 2,
    title: "print-check",
    featured: true,
    badge: "Published on npm",
    image: "print-check.gif",
    description:
      "CLI tool that validates print-ready PDF files for prepress requirements. Runs 8 automated checks (bleed, fonts, color space, resolution, ink coverage, transparency, PDF/X compliance, page size). Features built-in profiles, config file support, and JSON output for CI pipelines. Published to npm.",
    githubLink: "https://github.com/ryancalacsan/print-check-cli",
    npmLink: "https://www.npmjs.com/package/print-check-cli",
    tags: ["Node.js", "TypeScript", "Commander.js", "mupdf", "Vitest"],
  },
]

export default projectsData
