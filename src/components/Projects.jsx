import { FiExternalLink, FiGithub } from "react-icons/fi"
import projectsData from "../projectData"
import useScrollReveal from "../hooks/useScrollReveal"

export default function Projects() {
  const revealRef = useScrollReveal({ stagger: true })

  return (
    <section className="projects section wrapper" id="projects">
      <h2 className="section-heading">Personal Projects</h2>
      <p className="projects__subtitle">Learning and side projects</p>
      <div className="projects__grid" ref={revealRef}>
        {projectsData.map((project) => (
          <article key={project.id} className="projects__card">
            <div className="projects__image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="projects__image"
              />
            </div>
            <div className="projects__body">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">
                {project.description}
              </p>
              <div className="projects__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="projects__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="projects__links">
                <a
                  href={project.livePreviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
