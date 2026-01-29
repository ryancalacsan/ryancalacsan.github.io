import useScrollReveal from "../hooks/useScrollReveal"

export default function AboutMe() {
  const revealRef = useScrollReveal()

  return (
    <section className="about section wrapper" id="about-me" ref={revealRef}>
      <h2 className="section-heading">About Me</h2>
      <div className="about__content">
        <div className="about__text">
          <p>
            I'm a full-stack engineer based in Chicago who builds web
            applications with a focus on clean architecture and delivering real
            business value.
          </p>
          <p>
            Most recently, I served as Principal Engineer at PrintNinja, where I
            built a 200,000+ line Configure-Price-Quote platform from scratch as
            the sole engineer. I joined as their first in-house engineer,
            inheriting an environment with no version control and significant
            technical debt from previous contractors. I introduced modern
            engineering practices, migrated critical business logic from legacy
            PHP systems, and built a platform handling complex pricing with 500+
            variables, payment processing, and CRM integration.
          </p>
          <p>
            Before transitioning to software engineering, I spent 15 years in
            photography and studio management — experience that gave me strong
            project ownership skills and an eye for user experience.
          </p>
          <p className="about__open-roles">
            Currently open to full-stack or frontend roles, preferably remote.
          </p>
        </div>
        <img
          className="about__image"
          src="/adventure.jpg"
          alt="Ryan Calacsan Ice Climbing"
        />
      </div>
    </section>
  )
}
