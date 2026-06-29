import { GridBackdrop } from '@ryancalacsan/caliper-ui'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Continuous dotted backdrop behind the content sheets (01–05). */}
      <div className="home-sections">
        <GridBackdrop variant="dots" size="grid" className="dot-grid" aria-hidden="true" />
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  )
}
