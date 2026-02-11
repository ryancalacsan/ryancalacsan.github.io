import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <button
        className="footer__top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
      <IconContext.Provider value={{ size: "1rem" }}>
        <div className="footer__socials">
          <a
            href="mailto:calacsancode@gmail.com"
            className="footer__social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/ryancalacsan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ryancalacsan/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </IconContext.Provider>
      <p className="footer__text">
        Designed and built by Ryan Calacsan
      </p>
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Ryan Calacsan
      </p>
    </footer>
  )
}
