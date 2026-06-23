export function Hero() {
  return (
    <section className="hero">
      {/* Background gradient for depth */}
      <div className="hero__glow">
        <div className="hero__glow-blob hero__glow-blob--top" />
        <div className="hero__glow-blob hero__glow-blob--bottom" />
      </div>

      <div className="wrapper hero__inner">
        <div className="hero-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="hero__eyebrow">
            Full-Stack Engineer / Chicago
          </p>
        </div>

        <h1 className="hero__title">
          <span className="hero__name-line">
            <span className="hero-name-reveal hero__name" style={{ animationDelay: '0.35s' }}>Ryan</span>
          </span>
          <span className="hero__name-line">
            <span className="hero-name-reveal hero__name" style={{ animationDelay: '0.45s' }}>Calacsan</span>
          </span>
        </h1>

        <div className="hero-fade-up" style={{ animationDelay: '0.7s' }}>
          <p className="hero__lead">
            I built a 200,000+ line enterprise platform from scratch as the sole
            engineer — from real-time pricing engines to payment processing and
            CRM integration.
          </p>
        </div>

        <div className="hero-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="hero__ctas">
            <a
              href="/ryan-calacsan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta hero__cta--primary"
            >
              View Resume
              <span className="hero__cta-arrow">&rarr;</span>
            </a>
            <a
              href="#projects"
              className="hero__cta hero__cta--secondary"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
