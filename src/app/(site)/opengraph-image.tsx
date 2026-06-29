import { ImageResponse } from 'next/og'

export const alt = 'Ryan Calacsan, front-end and full-stack engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Spec Sheet social card: warm paper, blueprint grid, a framed title block with
// the construction-orange underline accent, mirroring the site hero.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#f3f1ea',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Blueprint grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(#ddd9cc 1px, transparent 1px), linear-gradient(90deg, #ddd9cc 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />
        {/* Frame */}
        <div style={{ position: 'absolute', top: 28, left: 28, right: 28, bottom: 28, border: '2px solid #16140f' }} />
        {/* Orange crop marks */}
        <div style={{ position: 'absolute', top: 21, left: 21, width: 14, height: 14, border: '2px solid #ff4d00' }} />
        <div style={{ position: 'absolute', bottom: 21, right: 21, width: 14, height: 14, border: '2px solid #ff4d00' }} />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '52px 64px',
          }}
        >
          {/* Sheet header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 18,
              borderBottom: '1.5px solid #ddd9cc',
              fontSize: 20,
              letterSpacing: '2px',
              color: '#565144',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 12, height: 12, background: '#ff4d00' }} />
              <span>RC · PORTFOLIO</span>
            </div>
            <span>TITLE SHEET</span>
          </div>

          {/* Title block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span style={{ fontSize: 22, letterSpacing: '3px', color: '#565144' }}>
              FRONT-END &amp; FULL-STACK ENGINEER · CHICAGO
            </span>
            <div style={{ display: 'flex', position: 'relative' }}>
              <span
                style={{
                  fontSize: 128,
                  fontWeight: 800,
                  letterSpacing: '-5px',
                  color: '#16140f',
                  lineHeight: 1,
                }}
              >
                RYAN CALACSAN
              </span>
              {/* Orange underline accent under the name */}
              <div style={{ position: 'absolute', left: 0, bottom: 8, width: 720, height: 16, background: '#ff4d00' }} />
            </div>
          </div>

          {/* Spec strip */}
          <div style={{ display: 'flex', gap: 40, fontSize: 22, letterSpacing: '1px', color: '#565144' }}>
            <span>WCAG 2.2 AA</span>
            <span>·</span>
            <span>LIGHTHOUSE 100</span>
            <span>·</span>
            <span style={{ color: '#b83400' }}>CALIPER UI ↗ npm</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
