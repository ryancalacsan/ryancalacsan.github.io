import { forwardRef, useState } from "react"
import projectsData from "../projectData"

const Projects = forwardRef((props, ref) => {
  const [activeProjectId, setActiveProjectId] = useState(null)

  const handleClick = (projectId) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId) // Toggle active project
  }

  return (
    <section className="projects wrapper" id="projects" ref={ref}>
      <h2 className="projects__title">Personal Projects</h2>
      <p className="projects__subtitle">Learning and side projects</p>
      <p className="projects__text"></p>
      <div className="projects__container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects__item">
            <div
              className="projects__thumbnail-container"
              onClick={() => handleClick(project.id)} // Only for small screens
            >
              <img
                src={project.image}
                alt={project.title}
                className="projects__thumbnail"
              />
              {/* Overlay content */}
              <div
                className={`projects__overlay ${
                  activeProjectId === project.id
                    ? "projects__overlay--active"
                    : ""
                }`}
              >
                <div className="projects__overlay-content">
                  <h3 className="projects__overlay-title">{project.title}</h3>
                  <p className="projects__overlay-description">
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
                      View Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Projects
