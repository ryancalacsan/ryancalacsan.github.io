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
