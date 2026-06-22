import { ImageResponse } from 'next/og'

export const alt = 'Ryan Calacsan — Full-Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(circle at 75% 15%, #243056 0%, #1a1d2e 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 22,
            background: '#1a1d2e',
            border: '1px solid #2e3650',
          }}
        >
          <span
            style={{
              fontSize: 46,
              fontWeight: 700,
              color: '#4d94e6',
              letterSpacing: '-2px',
            }}
          >
            RC
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: '#f5f6fa',
              letterSpacing: '-3px',
              lineHeight: 1,
            }}
          >
            Ryan Calacsan
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 38,
              fontWeight: 400,
              color: '#9aa3bd',
              letterSpacing: '-0.5px',
            }}
          >
            Full-Stack Engineer · Chicago
          </span>
          <span
            style={{
              marginTop: 14,
              fontSize: 28,
              fontWeight: 400,
              color: '#4d94e6',
            }}
          >
            Next.js · TypeScript · PostgreSQL
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
