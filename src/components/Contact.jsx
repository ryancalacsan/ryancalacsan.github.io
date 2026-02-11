import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons"
import MotionSection from "./MotionSection"

export default function Contact() {
  const emailAddress = "calacsancode@gmail.com"

  return (
    <MotionSection
      animation="fadeIn"
      className="contact section"
      id="contact"
    >
      <div className="contact__wrapper wrapper">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="contact__text">
          I'm currently looking for full-stack or frontend engineering roles.
          Feel free to reach out — I'd love to hear from you.
        </p>
        <IconContext.Provider value={{ size: "1.25em" }}>
          <div className="contact__links">
            <a
              href={`mailto:${emailAddress}`}
              className="contact__link"
            >
              <FaEnvelope />
              <span>{emailAddress}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryancalacsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ryancalacsan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </MotionSection>
  )
}
