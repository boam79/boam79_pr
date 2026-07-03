This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 로컬 개발 환경 설정

1. **의존성 설치**
```bash
npm install
```


### 환경 변수 설정 (선택)

Contact 페이지의 문의 폼을 사용하려면 [Resend](https://resend.com)에서 API 키를 발급받아 `.env.local`에 설정하세요. 설정하지 않아도 사이트는 정상 동작하며, 폼 제출 시 안내 메시지가 표시됩니다.

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드 테스트

로컬에서 프로덕션 빌드를 테스트하려면:

```bash
npm run build
npm run start
```

빌드가 성공하면 `http://localhost:3000`에서 프로덕션 모드로 실행됩니다.

### 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크탑)
- ✅ SEO 최적화 (메타데이터, 동적 OpenGraph 이미지, JSON-LD 구조화 데이터)
- ✅ 접근성 개선 (키보드 네비게이션, ARIA 레이블)
- ✅ 이미지 최적화 (WebP, AVIF 지원)
- ✅ 애니메이션 (Framer Motion)
- ✅ 문의 폼 (Resend 기반 이메일 전송, 스팸 방지 honeypot 적용)
- ✅ 커스텀 404 / 에러 페이지
- ✅ Vercel Analytics · Speed Insights 연동
- ✅ GitHub Actions CI (lint · test · build 자동 검증)

### 프로젝트 구조

```
app/              # Next.js App Router 페이지
components/       # React 컴포넌트
lib/             # 유틸리티 및 데이터
types/           # TypeScript 타입 정의
public/          # 정적 파일
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**배포 시 주의사항**: Vercel에 배포하면 자동으로 최적화되어 배포됩니다.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
