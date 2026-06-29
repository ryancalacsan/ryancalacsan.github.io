import { ArrowRight } from 'lucide-react'
import {
  Eyebrow,
  Text,
  Button,
  Stat,
  StatGroup,
  GridBackdrop,
  Frame,
  Crosshair,
  SheetHeader,
  MeasureFrame,
  Mark,
  Heading,
  Inline,
} from '@ryancalacsan/caliper-ui'

export function Hero() {
  return (
    <section className="hero">
      {/* Blueprint grid backdrop (decorative) */}
      <GridBackdrop size="grid" className="hero__grid" aria-hidden="true" />

      <div className="wrapper hero__inner">
        <Frame className="hero__frame">
          <SheetHeader
            ruler
            className="hero__sheet"
            left={
              <span className="hero__sheet-id">
                <Crosshair size="sm" /> RC · PORTFOLIO
              </span>
            }
            right={<span className="hero__sheet-no">TITLE SHEET</span>}
          />

          <div className="hero__body">
            <div className="hero-fade-up" style={{ animationDelay: '0.2s' }}>
              <Eyebrow tone="muted" className="hero__eyebrow">
                Front-End &amp; Full-Stack Engineer / Chicago
              </Eyebrow>
            </div>

            {/* Caliper's MeasureFrame draws the dashed title box, crop-mark
                crosshairs, and a content-width dimension line. */}
            <MeasureFrame label="W · measured to the pixel" className="hero__measure">
              <Heading level={1} size="display" weight="black" className="hero__title">
                <span className="hero__name-line">
                  <span className="hero-name-reveal hero__name" style={{ animationDelay: '0.35s' }}>
                    Ryan
                  </span>
                </span>
                <span className="hero__name-line">
                  <span className="hero-name-reveal hero__name" style={{ animationDelay: '0.45s' }}>
                    <Mark>Calacsan</Mark>
                  </span>
                </span>
              </Heading>
            </MeasureFrame>

            <div className="hero-fade-up" style={{ animationDelay: '0.7s' }}>
              <Text as="p" size="lg" tone="muted" className="hero__lead">
                I build accessible, design-led interfaces and ship the full stack
                behind them. I designed and published Caliper UI, the component
                library this site runs on, and built an enterprise platform end to
                end as the sole engineer.
              </Text>
            </div>

            <div className="hero-fade-up" style={{ animationDelay: '0.9s' }}>
              <Inline gap="sm" className="hero__ctas">
                <Button
                  asChild
                  variant="primary"
                  trailingIcon={<ArrowRight size={16} aria-hidden="true" />}
                >
                  <a href="/ryan-calacsan-resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#projects">View My Work</a>
                </Button>
              </Inline>
            </div>

            <div className="hero-fade-up" style={{ animationDelay: '1.05s' }}>
              <StatGroup dividers className="hero__stats">
                <Stat label="Shipped" value="npm + prod" />
                <Stat label="Access" value="WCAG 2.2 AA" />
                <Stat label="Perf" value="100" accent />
              </StatGroup>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  )
}
