import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Berke Cengiz - Backend Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 900, marginBottom: 20 }}>
          BERKE CENGIZ
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            color: '#888',
            textAlign: 'center',
          }}
        >
          Backend Developer | DevOps & Cloud Expert
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

