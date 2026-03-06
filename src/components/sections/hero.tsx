export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center pt-16">
      {/* Background gradient for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 right-0 h-[80vh] w-[60vw] rounded-full bg-accent/[0.06] blur-[120px] dark:bg-accent/[0.03]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[50vh] w-[50vw] rounded-full bg-accent/[0.04] blur-[100px] dark:bg-accent/[0.02]" />
      </div>

      <div className="wrapper relative w-full">
        <div className="hero-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="mb-6 font-display text-sm font-light uppercase tracking-[0.25em] text-text-secondary">
            Full-Stack Engineer / Chicago
          </p>
        </div>

        <h1 className="font-display text-[length:var(--text-display)] font-bold leading-[0.9] tracking-[-0.04em] text-text">
          <span className="block overflow-hidden">
            <span className="hero-name-reveal block" style={{ animationDelay: '0.35s' }}>Ryan</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-name-reveal block" style={{ animationDelay: '0.45s' }}>Calacsan</span>
          </span>
        </h1>

        <div className="hero-fade-up" style={{ animationDelay: '0.7s' }}>
          <p className="mt-8 max-w-lg text-[length:var(--text-body)] leading-relaxed text-text-secondary">
            I built a 230,000+ line enterprise platform from scratch as the sole
            engineer — from real-time pricing engines to payment processing and
            CRM integration.
          </p>
        </div>

        <div className="hero-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/ryan-calacsan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white no-underline transition-all duration-normal hover:bg-accent-hover hover:gap-3"
            >
              View Resume
              <span className="transition-transform duration-normal group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text no-underline transition-all duration-normal hover:border-text-secondary hover:bg-bg-secondary"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
