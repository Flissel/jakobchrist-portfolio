import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jakob Christ — Architekt · München';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(184, 99, 58, 0.18), transparent 55%), #f5f2ec',
          color: '#1a1814',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#8a857c',
            display: 'flex',
            gap: 18,
          }}
        >
          <span>München</span>
          <span>·</span>
          <span>Architekt</span>
          <span>·</span>
          <span>Werkverzeichnis 2015 — 2025</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.92 }}>
          <span style={{ fontSize: 220, letterSpacing: -4, fontWeight: 300 }}>Jakob</span>
          <span
            style={{
              fontSize: 220,
              letterSpacing: -4,
              fontStyle: 'italic',
              marginLeft: 100,
              color: '#b8633a',
              fontWeight: 300,
            }}
          >
            Christ
          </span>
        </div>

        <div
          style={{
            fontSize: 28,
            color: '#4a463f',
            maxWidth: 720,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <span>Entwurf · Technik · Gestaltung.</span>
          <span style={{ fontSize: 20, color: '#8a857c', letterSpacing: 4, textTransform: 'uppercase' }}>
            jakobchrist.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
