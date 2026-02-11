import { motion } from "framer-motion"
import { FiExternalLink, FiGithub, FiPackage } from "react-icons/fi"
import projectsData from "../projectData"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ProjectCardContent({ project }) {
  return (
    <>
      <div className="projects__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="projects__image"
        />
      </div>
      <div className="projects__body">
        <div className="projects__card-header">
          <h3 className="projects__card-title">
            {project.title}
          </h3>
          {project.badge && (
            <span className="projects__badge">{project.badge}</span>
          )}
        </div>
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
          {project.npmLink && (
            <a
              href={project.npmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__link"
            >
              <FiPackage />
              npm
            </a>
          )}
          {project.livePreviewLink && (
            <a
              href={project.livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__link"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
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
    </>
  )
}

export default function Projects() {
  return (
    <section className="projects section wrapper" id="projects">
      <h2 className="section-heading">Featured Projects</h2>
      <p className="projects__subtitle">Selected work</p>
      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <motion.article
            key={project.id}
            className="projects__card projects__card--featured"
            variants={cardVariants}
          >
            <ProjectCardContent project={project} />
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
