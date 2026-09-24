# Boam79 포트폴리오

21년 헬스케어 시설·운영 경험을 디지털 도구와 AI 개발로 잇는 개인 포트폴리오입니다.

이 사이트와 GitHub 공개 프로젝트는 Cursor 등 AI 코딩 에이전트와 함께 기획부터 구현·검증까지 만들었습니다.

- 사이트: [https://boam79pr.vercel.app](https://boam79pr.vercel.app)
- GitHub: [https://github.com/boam79](https://github.com/boam79)

## 개발 방향

병원·시설 현장에서 반복되는 일을 화면·데이터·AI 도구로 바꿉니다.

1. **병원 운영 도구** — 환자·방문 분석, 비급여 비교, QR 자산, 의원 재고
2. **의사결정 AI** — Boardroom(hem)처럼 경영 지표를 넣고 멀티 모델이 임원 역할로 토론
3. **총무·공공 자동화** — 지원사업·공공데이터·감가상각을 MCP와 웹앱으로 연결

공개 저장소 목록은 GitHub API로 **최신 푸시 순**을 따라가며, About가 비어 있는 저장소는 README를 분석해 한 줄 소개를 붙입니다.

## 스택

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Vercel.

## 로컬 실행

기능 검증은 배포된 HTTPS URL에서 합니다. 아래는 빌드 확인용입니다.

```bash
npm install
npm test
npm run build
```

문의 폼을 쓰려면 [Resend](https://resend.com) API 키를 `.env.local`에 넣습니다. 없어도 사이트는 동작합니다.

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

선택: `GITHUB_TOKEN`이 있으면 공개 저장소 동기화의 GitHub API 한도가 넉넉해집니다.

```bash
npm run dev
```

## GitHub 동기화

`/api/github-careers`가 `boam79` 공개 저장소를 약 1분 캐시로 가져옵니다. 경력·프로젝트 페이지는 이 응답을 최신 기준으로 보여 줍니다. 이 포트폴리오 저장소(`boam79_pr`)는 목록에서 제외합니다.
