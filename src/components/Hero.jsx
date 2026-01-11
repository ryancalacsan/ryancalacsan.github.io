import { FaAngleDoubleDown } from "react-icons/fa"

export default function Hero({ scrollToSection }) {
  return (
    <section className="hero wrapper">
      <div className="hero__main-container">
        <div className="hero__info">
          <h1>
            <span className="hero__name">Full-Stack Engineer</span>
          </h1>
          <p className="hero__description">
            I build complex web applications. Most recently, I architected a{" "}
            <span className="hero__highlight">200K+ line enterprise platform</span>{" "}
            as Principal Engineer at PrintNinja.
          </p>
        </div>
        <img
          src="/profile.jpg"
          alt="Ryan Calacsan"
          className="hero__img"
        />
      </div>
      <div className="hero__down-arrow" onClick={scrollToSection}>
        <FaAngleDoubleDown size="2rem" />
      </div>
    </section>
  )
}
