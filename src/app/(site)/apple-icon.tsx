import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Spec Sheet app icon: ink tile, cream "RC", construction-orange underline bar.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          borderRadius: 36,
          background: '#16140f',
        }}
      >
        <span
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: '#faf8f2',
            letterSpacing: '-3px',
            lineHeight: 1,
          }}
        >
          RC
        </span>
        <div style={{ width: 92, height: 12, background: '#ff4d00' }} />
      </div>
    ),
    { ...size }
  )
}
