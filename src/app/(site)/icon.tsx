import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Spec Sheet favicon: ink tile, cream "RC", construction-orange underline bar.
export default function Icon() {
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
          gap: 2,
          borderRadius: 6,
          background: '#16140f',
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: '#faf8f2',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}
        >
          RC
        </span>
        <div style={{ width: 16, height: 2.5, background: '#ff4d00' }} />
      </div>
    ),
    { ...size }
  )
}
