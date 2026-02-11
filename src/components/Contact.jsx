import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa"
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
        <a
          href={`mailto:${emailAddress}`}
          className="contact__cta"
        >
          <FaEnvelope />
          <span>{emailAddress}</span>
          <FaArrowRight size="0.85em" />
        </a>
        <IconContext.Provider value={{ size: "1.25em" }}>
          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/ryancalacsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ryancalacsan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </MotionSection>
  )
}
