import { ImageResponse } from 'next/og';

export const alt = 'Boam79 포트폴리오 | Healthcare Facility × AI 개발';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
          backgroundColor: '#18181b',
          padding: '80px',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 32, color: '#a1a1aa', letterSpacing: 2 }}>BOAM79</div>
          <div
            style={{
              marginTop: 24,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            Healthcare Facility × AI
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 900,
              color: '#5eead4',
            }}
          >
            AI와 함께 개발
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#d4d4d8' }}>
          현장 운영 · 디지털 도구 · AI 코딩
        </div>
      </div>
    ),
    { ...size }
  );
}
