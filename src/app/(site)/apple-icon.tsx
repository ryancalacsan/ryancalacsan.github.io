import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          background: '#1a1d2e',
        }}
      >
        <span
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: '#4d94e6',
            letterSpacing: '-3px',
          }}
        >
          RC
        </span>
      </div>
    ),
    { ...size }
  )
}
