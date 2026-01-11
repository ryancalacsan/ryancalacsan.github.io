import { forwardRef } from "react"

const Experience = forwardRef((props, ref) => {
  const techStack = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Stripe",
    "Salesforce",
    "Clerk Auth",
  ]

  const achievements = [
    "200K+ line full-stack platform using Next.js, React, TypeScript, and PostgreSQL",
    "Real-time pricing engine handling 500+ variables across 4 product lines",
    "Stripe payment integration with webhook processing",
    "Salesforce CRM sync with 60+ field mappings",
    "Component-based file upload system with PDF validation and version control",
    "Docker-based deployment infrastructure with automated backups and rollback capability",
  ]

  return (
    <section className="experience wrapper" id="experience" ref={ref}>
      <h2 className="experience__title">Professional Experience</h2>

      <div className="experience__card">
        <div className="experience__header">
          <div className="experience__role">
            <h3 className="experience__company">PrintNinja</h3>
            <span className="experience__position">Principal Engineer</span>
          </div>
          <span className="experience__year">2025</span>
        </div>

        <p className="experience__intro">
          Built the company's entire modern technology stack from scratch as the
          sole engineer. PrintNinja is a custom printing company serving
          self-publishers and game makers.
        </p>

        <div className="experience__section">
          <h4 className="experience__section-title">The Challenge</h4>
          <p className="experience__section-text">
            Inherited an environment with no version control, fragmented
            contractor code, and significant technical debt. Needed to build a
            Configure-Price-Quote (CPQ) platform to replace manual quoting
            processes while migrating critical business logic from legacy PHP
            systems.
          </p>
        </div>

        <div className="experience__section">
          <h4 className="experience__section-title">What I Built</h4>
          <ul className="experience__achievements">
            {achievements.map((achievement, index) => (
              <li key={index} className="experience__achievement">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="experience__tech">
          <h4 className="experience__section-title">Tech Stack</h4>
          <div className="experience__tech-tags">
            {techStack.map((tech) => (
              <span key={tech} className="experience__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Experience
