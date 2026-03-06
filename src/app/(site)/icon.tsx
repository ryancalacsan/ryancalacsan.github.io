import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          background: '#1a1d2e',
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#4d94e6',
            letterSpacing: '-0.5px',
          }}
        >
          RC
        </span>
      </div>
    ),
    { ...size }
  )
}
