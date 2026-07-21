import { ImageResponse } from 'next/og';

export const alt = 'Boam79 포트폴리오 | Healthcare Facility × IT 융합 전문가';
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
            Healthcare Facility × IT
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
            융합 전문가
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#d4d4d8' }}>
          21년 시설관리 경력 · ERP 구축 · 데이터 분석 · AI
        </div>
      </div>
    ),
    { ...size }
  );
}
