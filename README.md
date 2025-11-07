This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 로컬 개발 환경 설정

1. **의존성 설치**
```bash
npm install
```

2. **환경변수 설정 (선택사항)**

Contact Form 이메일 전송 기능을 사용하려면 EmailJS 설정이 필요합니다:

1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. Email Service 설정 (Gmail, Outlook 등)
3. Email Template 생성
4. 프로젝트 루트에 `.env.local` 파일 생성:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

환경변수가 설정되지 않은 경우 개발 모드에서는 시뮬레이션만 실행됩니다.

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
- ✅ SEO 최적화 (메타데이터, OpenGraph, JSON-LD)
- ✅ 접근성 개선 (키보드 네비게이션, ARIA 레이블)
- ✅ 이미지 최적화 (WebP, AVIF 지원)
- ✅ 애니메이션 (Framer Motion)

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

**배포 시 주의사항**: Vercel 대시보드에서 환경변수를 설정해야 합니다. Settings > Environment Variables에서 EmailJS 관련 변수를 추가하세요.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
