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
    badge: "Published on npm",
    image: "print-check.gif",
    description:
      "CLI tool that validates print-ready PDF files for prepress requirements. Runs 8 automated checks (bleed, fonts, color space, resolution, ink coverage, transparency, PDF/X compliance, page size). Features built-in profiles, config file support, and JSON output for CI pipelines. Published to npm.",
    githubLink: "https://github.com/ryancalacsan/print-check-cli",
    npmLink: "https://www.npmjs.com/package/print-check-cli",
    tags: ["Node.js", "TypeScript", "Commander.js", "mupdf", "Vitest"],
  },
  {
    id: 2,
    title: "GoVan",
    image: "GoVan-mockup.gif",
    description:
      "GoVan is a mock van rental & hosting app where users can explore, filter, and view detailed listings of adventure vans.",
    githubLink: "https://github.com/ryancalacsan/govan",
    livePreviewLink: "https://govan-dev.netlify.app/",
    tags: ["React", "TailwindCSS", "TypeScript", "Firebase"],
  },
  {
    id: 3,
    title: "AI Chef",
    image: "AIChef-mockup.gif",
    description:
      "AI Chef is a web application that allows users to generate AI-crafted recipes by inputting ingredients.",
    githubLink: "https://github.com/ryancalacsan/ai-chef",
    livePreviewLink: "https://ai-chef-dev.netlify.app/",
    tags: ["HTML", "TailwindCSS", "TypeScript", "Mistral AI"],
  },
  {
    id: 4,
    title: "CineList",
    image: "CineList-mockup.gif",
    description:
      "A simple movie watchlist app that lets users search for movies via the OMDB API and save them to a watchlist.",
    githubLink: "https://github.com/ryancalacsan/movie-watchlist-v2",
    livePreviewLink: "https://cinelist-dev.netlify.app/",
    tags: ["HTML", "TailwindCSS", "TypeScript", "OMDB API"],
  },
  {
    id: 5,
    title: "Color Scheme Generator",
    image: "ColorGen-mockup.gif",
    description:
      "A web application that creates custom color schemes by selecting a base color and method, or generates a random palette.",
    githubLink: "https://github.com/ryancalacsan/color-scheme-generator",
    livePreviewLink: "https://color-scheme-generator-dev.netlify.app/",
    tags: ["HTML", "CSS", "Vanilla JS", "Color API"],
  },
]

export default projectsData
