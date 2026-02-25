import { HeroAnimation } from '../hero-animation'

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center pt-16">
      <div className="wrapper w-full">
        <HeroAnimation>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-text-secondary">
            Full-Stack Engineer / Chicago
          </p>
          <h1 className="font-display text-[length:var(--text-display)] font-semibold leading-[0.95] tracking-[-0.03em] text-text">
            Ryan
            <br />
            Calacsan
          </h1>
          <p className="mt-6 max-w-xl text-[length:var(--text-body)] leading-relaxed text-text-secondary">
            I built a 200,000+ line enterprise platform from scratch as the sole
            engineer — from real-time pricing engines to payment processing and
            CRM integration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/ryan-calacsan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors duration-normal hover:bg-accent-hover"
            >
              View Resume
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text no-underline transition-colors duration-normal hover:bg-bg-secondary"
            >
              View My Work
            </a>
          </div>
        </HeroAnimation>
      </div>
    </section>
  )
}
