# 박재민 포트폴리오 웹사이트 개발 진행 상황

## Background and Motivation

박재민님의 개인 브랜드 포트폴리오 웹사이트 구축 프로젝트입니다. 21년 시설관리 경력과 최신 AI/개발 역량을 융합한 하이브리드 전문가로의 브랜드 포지셔닝을 위한 디지털 포트폴리오입니다.

**핵심 가치 제안**: "헬스케어 시설관리와 디지털 트랜스포메이션을 연결하는 하이브리드 전문가"

## Key Challenges and Analysis

1. **2-Track Career Display**: 개발 경력과 시설관리 경력을 명확히 구분하여 표시
2. **Contact Form 이메일 전송**: EmailJS 또는 Resend API 연동 필요
3. **반응형 디자인**: 모바일, 태블릿, 데스크탑 최적화
4. **SEO 최적화**: 채용 담당자 검색 최적화

## High-level Task Breakdown

### Phase 1: 기본 구조 ✅ (완료)
- [x] Next.js 프로젝트 설정
- [x] Tailwind CSS 설정
- [x] 기본 레이아웃 (Header, Footer)
- [x] 페이지 라우팅 설정
- [x] 데이터 타입 정의

### Phase 2: 핵심 페이지 ✅ (완료)
- [x] Home 페이지 (Hero, About Preview, Skills Overview, Featured Projects)
- [x] Experience 페이지 (탭, 타임라인, 카드)
- [x] About 페이지
- [x] Skills 페이지
- [x] Projects 페이지
- [x] Contact 페이지 이메일 전송 기능 구현 ✅

### Phase 3: 추가 기능 ✅ (완료)
- [x] Contact Form 실제 이메일 전송 구현 ✅
- [x] 애니메이션 구현 (Framer Motion) ✅
- [x] 반응형 최적화 검증 ✅
- [x] SEO 메타데이터 추가 ✅
- [x] 성능 최적화 (이미지 최적화, Next.js 설정) ✅
- [x] 접근성 개선 (키보드 네비게이션, ARIA 레이블) ✅

### Phase 4: 최적화 & 배포 ✅ (완료)
- [x] SEO 최적화 ✅
- [x] 성능 최적화 (이미지, 번들) ✅
- [x] 접근성 검증 ✅
- [x] GitHub 리포지토리 커밋 및 푸시 ✅
- [ ] Vercel 배포 (사용자 작업 필요)

## Project Status Board

### 현재 진행 중
- [x] Contact Form 이메일 전송 기능 구현 (EmailJS) ✅

### 완료된 작업
- [x] Next.js 프로젝트 기본 구조
- [x] 모든 주요 페이지 구현 (Home, About, Experience, Skills, Projects, Contact)
- [x] Experience 페이지 탭 기능 (개발 경력 / 시설관리 경력)
- [x] CareerCard 컴포넌트
- [x] Skills 페이지 및 자격증 표시
- [x] Projects 페이지
- [x] Contact 페이지 UI 및 이메일 전송 기능 (EmailJS 통합 완료)
- [x] SEO 메타데이터 추가 (모든 페이지)
- [x] JSON-LD 구조화된 데이터 추가
- [x] Next.js 이미지 최적화 설정 (WebP, AVIF 지원)
- [x] 접근성 개선 (키보드 네비게이션, ARIA 레이블, 포커스 관리)
- [x] 프로덕션 빌드 성공 확인
- [x] README 업데이트 (로컬 테스트 가이드 추가)
- [x] 참고 사이트 디자인 스타일 적용 (그리스어 강의 사이트)
- [x] 각 페이지에 풍경 배경 이미지 추가
- [x] 홈 페이지 섹션들에도 배경 이미지 적용
- [x] GitHub 리포지토리 초기 커밋 및 푸시 완료

### 대기 중인 작업
- 프로필 이미지 추가
- 프로젝트 스크린샷 추가
- OG 이미지 생성
- Google Analytics 연동

## Current Status / Progress Tracking

**프로젝트 상태**: ✅ **개발 완료**

**최종 완료 사항**:
- ✅ Next.js 프로젝트 기본 구조 완료
- ✅ 모든 주요 페이지 구현 완료 (Home, About, Experience, Skills, Projects, Contact)
- ✅ SEO 메타데이터 추가 완료 (모든 페이지)
- ✅ OpenGraph 및 Twitter Card 메타데이터 추가
- ✅ JSON-LD 구조화된 데이터 추가 (Person 스키마)
- ✅ Robots 및 Sitemap 설정 완료
- ✅ 프로덕션 빌드 성공 확인 (에러 없음)
- ✅ Next.js 이미지 최적화 설정 (WebP, AVIF 지원)
- ✅ 접근성 개선 (키보드 네비게이션, ARIA 레이블, 포커스 관리)
- ✅ README 업데이트 (로컬 테스트 가이드 추가)
- ✅ 참고 사이트 디자인 스타일 적용 (그리스어 강의 사이트)
- ✅ 각 페이지에 풍경 배경 이미지 추가 (Hero, About, Experience, Skills, Projects, Contact)
- ✅ 홈 페이지 섹션들에도 배경 이미지 적용 완료
- ✅ GitHub 리포지토리에 초기 커밋 및 푸시 완료 (https://github.com/boam79/boam79_pr)
- ✅ Contact Form 이메일 전송 기능 구현 완료 (EmailJS)
- ✅ 개발 경력 데이터 GitHub 리포지토리 기반으로 업데이트 완료
- ✅ 프로젝트 정보 PDR_Dashboard_v4.2.md 기반으로 업데이트 완료
- ✅ 전체 디자인 리팩토링 완료 (배경 이미지, 카드 스타일 통일)

**배포 전 체크리스트** (사용자 작업 필요):
1. EmailJS 계정 설정 및 환경변수 구성
2. 로컬 테스트: `npm run dev`로 개발 서버 실행하여 모든 페이지 확인
3. 프로필 이미지 및 프로젝트 스크린샷 추가 (선택사항)
4. OG 이미지 생성 (선택사항)
5. Vercel 배포 준비 및 배포

## Executor's Feedback or Assistance Requests

**프로젝트 완료 보고**:
- ✅ 모든 핵심 기능 구현 완료
- ✅ EmailJS로 Contact Form 이메일 전송 기능 구현 완료
- ✅ 환경변수 기반 설정 구조 완료
- ✅ 에러 처리 및 사용자 피드백 추가
- ✅ SEO 메타데이터 추가 완료
- ✅ 접근성 개선 완료 (키보드 네비게이션, ARIA 레이블)
- ✅ 이미지 최적화 설정 완료
- ✅ 프로덕션 빌드 성공 확인
- ✅ GitHub 리포지토리 커밋 및 푸시 완료
- ✅ 전체 디자인 리팩토링 완료

**배포 전 사용자 작업 필요**:
1. EmailJS 계정 생성 및 설정
   - https://www.emailjs.com/ 에서 계정 생성
   - Email Service 추가 (Gmail, Outlook 등)
   - Email Template 생성 (템플릿 변수: from_name, from_email, company, inquiry_type, message)
   - .env.local 파일에 환경변수 설정:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```
2. EmailJS Template 예시:
   ```
   제목: 포트폴리오 문의 - {{inquiry_type}}
   
   보낸 사람: {{from_name}} ({{from_email}})
   회사: {{company}}
   문의 유형: {{inquiry_type}}
   
   메시지:
   {{message}}
   ```
3. 로컬 테스트 실행: `npm run dev`
4. Vercel 배포 준비 및 배포

---

> **참고 (2026-07-03 갱신)**: 위 Phase 1~4 기록은 과거 버전 기준입니다. 이후 커밋에서 EmailJS 문의 폼 및 관리자 페이지 기능이 제거되고(`4a76f9d`), Contact 페이지는 `mailto` 링크 + 소셜 링크 구조로 단순화되었습니다. 또한 UI가 zinc 팔레트 기반 에디토리얼 레이아웃으로 전면 리팩토링되었고(`d3520f2`, `4da683f`), Experience 페이지에는 GitHub API 연동(`/api/github-careers`)이 추가되었습니다. 아래는 현재 코드 상태를 기준으로 한 신규 고도화 제안입니다.

## [Planner] 고도화(Advancement) 제안 — 2026-07-03

### Background and Motivation

사용자가 "고도화 제안 해줘"를 요청함. 현재 사이트는 핵심 페이지(홈/소개/경력/스킬/프로젝트/연락)가 모두 구현되어 있고 SEO 메타데이터, 접근성 기본기, 반응형 레이아웃이 갖춰진 **완성된 MVP** 상태. 다음 단계는 신뢰도(콘텐츠 실증), 전환율(문의 채널), 가시성(SEO/분석), 안정성(테스트/CI)을 끌어올리는 고도화 작업.

### Key Challenges and Analysis (현재 코드 기준 진단)

| 영역 | 현황 | 문제점 |
|---|---|---|
| 콘텐츠 자산 | `public/`에 Next.js 기본 SVG만 존재 | 프로필 사진, 프로젝트 스크린샷 없음. `lib/data/projects.ts`가 `/projects/patient-tool/*.png` 3장을 참조하지만 실제 파일이 없어 깨진 이미지 링크(단, 현재 `ProjectsPage`가 `images` 필드를 렌더링하지 않아 화면에 드러나진 않음) |
| 프로젝트 다양성 | `projects.ts`에 대표 프로젝트 1건만 존재 | 포트폴리오로서 프로젝트 다양성 부족, GitHub 연동 데이터가 경력(Experience) 탭에만 반영되고 Projects 페이지엔 미반영 |
| 문의(Contact) | `mailto:` 링크 + 소셜 링크만 존재 (`app/contact/page.tsx`) | 과거 EmailJS 폼이 있었으나 삭제됨(`4a76f9d`). 메일 클라이언트 미설정 환경에서 전환 저하, 문의 이력 추적 불가 |
| 에러 처리 | `app/**/not-found.tsx`, `app/**/error.tsx` 없음 | 404/에러 시 Next.js 기본 화면 노출, 브랜드 일관성 저하 |
| SEO 심화 | 기본 메타데이터/JSON-LD(Person)/sitemap/robots 존재 | OG 이미지 없음(동적 생성 미구현), 구조화 데이터에 경력/자격증(WorkExperience, EducationalOccupationalCredential) 미포함 |
| 분석/모니터링 | 없음 | 방문자 수, 유입 경로, Core Web Vitals 실측 데이터 없음 → 개선 우선순위 판단 근거 부족 |
| 테스트/CI | `tests/`에 유틸 함수 테스트 2개 파일만 존재, `.github/workflows` 없음 | 컴포넌트/페이지/라우트 테스트 부재, PR마다 수동으로 `npm run lint`/`test`/`build` 실행해야 함(자동 검증 없음) |
| GitHub API 연동 | `lib/github.ts` — 실패 시 빈 배열 반환, 30분 캐시 | 레이트리밋/네트워크 장애 시 사용자에게 재시도 UI 없음, `techStack`이 `language` 1개만 반영(README 기반 기술 스택 추출 안 함) |
| 다국어 | 없음 (전체 한국어) | 해외 채용 담당자·글로벌 협업 기회 배제 |
| 다크모드 | 없음 | 최신 포트폴리오 사이트 기대 수준 대비 부족 |

### High-level Task Breakdown (우선순위별)

#### P0 — 신뢰도·전환에 직접 영향 (가장 먼저 처리 권장)
1. **콘텐츠 자산 정합성 확보**
   - `projects.ts`의 `images` 배열을 실제 존재하는 파일로 교체하거나, 스크린샷 미보유 시 필드 제거/옵션 처리
   - 성공 기준: 존재하지 않는 이미지 경로를 참조하는 데이터 0건
2. **커스텀 404 / 에러 페이지 추가**
   - `app/not-found.tsx`, `app/error.tsx` 작성 (기존 zinc 톤 디자인 시스템 재사용)
   - 성공 기준: 존재하지 않는 경로 접근 시 브랜드 일관된 404 화면 노출, 의도적 throw 시 error 화면 노출
3. **Contact 채널 재검토**
   - 옵션 A: 서버 사이드 폼(Resend API + `app/api/contact/route.ts`, 스팸 방지용 honeypot) 재도입
   - 옵션 B: 현행 mailto 유지 + "복사하기" 버튼 및 응답 소요 시간 안내 문구 추가로 최소 개선
   - 성공 기준: 사용자가 두 옵션 중 하나를 선택 → 선택된 방식으로 문의 제출/연결 테스트 완료

#### P1 — 가시성·성장
4. **동적 OG 이미지 생성** (`@vercel/og` 또는 `next/og` `ImageResponse` 활용, `app/opengraph-image.tsx`)
   - 성공 기준: 소셜 공유 시 카드형 미리보기 이미지 노출 (Twitter Card Validator 등으로 확인)
5. **구조화 데이터(JSON-LD) 확장**
   - `Person` 스키마에 `hasCredential`(자격증), `alumniOf`(학력), `worksFor` 등 추가
   - 성공 기준: Google Rich Results Test 통과, 경고 없음
6. **Vercel Analytics + Speed Insights 도입** (`@vercel/analytics`, `@vercel/speed-insights` 패키지, `app/layout.tsx`에 컴포넌트 삽입)
   - 성공 기준: 배포 후 Vercel 대시보드에서 실사용 트래픽/CWV 데이터 수집 확인
7. **CI 파이프라인 구축** (`.github/workflows/ci.yml`: `npm ci` → `npm run lint` → `npm test` → `npm run build`)
   - 성공 기준: PR 생성 시 자동으로 3단계 검증 실행, 실패 시 머지 차단(브랜치 보호 규칙은 사용자가 GitHub 설정에서 별도 활성화 필요)

#### P2 — 확장/차별화
8. **프로젝트 페이지 다양화**: GitHub 연동 데이터를 Projects 페이지에도 카드 형태로 노출(경력 탭과 별개로 "사이드 프로젝트" 섹션 신설)
9. **테스트 커버리지 확장**: React Testing Library로 `Header`, `ExperiencePage` 탭 전환, `/api/github-careers` 라우트 테스트 추가
10. **다크모드 지원**: Tailwind 4 `dark:` variant + 시스템 설정 감지
11. **영문 버전 검토**: `next-intl` 또는 경로 기반(`/en`) 다국어 구조 도입 여부 결정
12. **이력서 PDF 다운로드**: `public/resume.pdf` + Header/About에 다운로드 버튼

### Project Status Board

- [x] P0-1. 존재하지 않는 프로젝트 이미지 경로 정리 (`lib/data/projects.ts`의 `images`를 빈 배열로 정리, 주석으로 추가 방법 안내)
- [x] P0-2. 커스텀 404/에러 페이지 추가 (`app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`)
- [x] P0-3. Contact 채널 개선 — **서버 사이드 폼(Resend API) 재도입**으로 결정. `app/api/contact/route.ts` + `components/contact/ContactForm.tsx`, honeypot 스팸 방지, `RESEND_API_KEY` 미설정 시에도 안내 메시지와 함께 안전하게 동작(503 + mailto/소셜 백업 유지)
- [x] P1-4. 동적 OG 이미지 생성 (`app/opengraph-image.tsx`, `next/og` `ImageResponse`, 정적 프리렌더 확인됨)
- [x] P1-5. JSON-LD 구조화 데이터 확장 (`app/layout.tsx`에 `alumniOf`, `worksFor`, `hasCredential` 추가, 자격증 데이터 기반 자동 생성)
- [x] P1-6. Vercel Analytics/Speed Insights 도입 (`@vercel/analytics`, `@vercel/speed-insights` 패키지 추가, 루트 레이아웃에 삽입)
- [x] P1-7. GitHub Actions CI 파이프라인 구축 (`.github/workflows/ci.yml`: lint → test → build)
- [x] P2-8. 프로젝트 페이지에 GitHub 사이드 프로젝트 섹션 추가 (`developmentCareers` 중 `github` 링크가 있는 항목을 카드로 노출)
- [x] P2-9. 신규 기능 테스트 추가 (`tests/contact-route.test.ts`: 필수값 검증, 이메일 형식 검증, 허니팟, 미설정 시 503 응답 검증)
- [x] 부가: `npm audit` 취약점 점검 및 안전 수정 적용, `next`/`eslint-config-next`를 16.0.7 → 16.2.10으로 패치 업데이트(다수 high severity 이슈 해결). 남은 2건은 `next`가 내부 번들링한 `postcss` 관련으로, 해결하려면 `next`를 9.x대로 다운그레이드해야 해서 보류(사실상 무해한 잔여 항목).
- [ ] P2-10. 다크모드 지원 — 미착수
- [ ] P2-11. 다국어(영문) 지원 검토 — 미착수
- [ ] P2-12. 이력서 PDF 다운로드 기능 — 미착수 (실제 이력서 파일 필요)

### Current Status / Progress Tracking (2026-07-03, Executor)

**완료**: P0 전체, P1 전체, P2-8, P2-9. `npm run lint`, `npm test`(11/11 통과), `npm run build` 모두 성공 확인. 프로덕션 서버 기동 후 홈/404/연락/프로젝트/OG 이미지 라우트 스모크 테스트(curl)로 상태 코드 확인 완료. `/api/contact`에 대해 필수값 누락, 잘못된 이메일, 허니팟 트리거, 미설정 시 503 응답까지 수동 curl 검증 완료.

**보류(사용자 액션 필요)**:
1. Contact 폼을 실제로 이메일 전송까지 동작시키려면 [Resend](https://resend.com)에서 API 키를 발급받아 Cursor Dashboard(Cloud Agents > Secrets)에 `RESEND_API_KEY`로 등록해야 함. 발신 도메인을 인증했다면 `CONTACT_FROM_EMAIL`도 함께 설정 권장. 키가 없어도 사이트는 정상 동작하며 폼 제출 시 "아직 설정되지 않았습니다" 안내와 함께 mailto/소셜 링크로 유도됨.
2. P2-10~12(다크모드, 다국어, 이력서 PDF)는 범위가 크거나 실제 파일(이력서 PDF) 제공이 필요해 이번 턴에서는 보류. 필요 시 후속 요청으로 진행 가능.
3. 프로필 사진, 프로젝트 스크린샷 등 실제 이미지 자산은 여전히 미보유 상태 — 확보되면 `public/`에 배치 후 `lib/data/projects.ts`의 `images` 배열과 About/Header에 반영 가능.

### Executor's Feedback or Assistance Requests

- 사용자가 "진행해"라고만 지시하여, Contact 채널 방향은 Executor가 P0/P1 제안서에 기재했던 옵션 중 **서버 사이드 폼(Resend)** 을 기본값으로 선택해 구현함. mailto 백업은 그대로 유지되므로 위험은 낮음.
- P2-10(다크모드)/P2-11(다국어)/P2-12(이력서 PDF)는 각각 디자인 시스템 전반 수정, 라우팅 구조 변경, 실제 이력서 콘텐츠가 필요한 더 큰 작업이라 이번 실행 범위에서 제외함. 착수 여부를 알려주시면 이어서 진행함.
- `npm audit`에서 발견된 next 관련 잔여 2건(postcss 관련, 내부 번들링)은 next 자체를 9.x로 다운그레이드해야 해결되는 항목이라 실질적 위험도가 낮다고 판단해 보류함. 필요 시 Planner 검토 요청.

## [Executor] 버그/오탈자 점검 및 수정 — 2026-07-03 (2차)

사용자 요청: "오타나 오탈자나 버그등을 찾아서 수정하고 main으로 커밋 하고 푸쉬해". 전체 코드베이스를 재검토하고 실제 GitHub API를 호출해 데이터 정합성까지 검증함.

### 발견 및 수정한 버그

1. **대표 프로젝트 링크 깨짐**: `lib/data/projects.ts`의 `featuredProject.github`가 `patient-analysis-tool`(존재하지 않는 저장소, GitHub API 404 확인)을 가리키고 있었음. 실제 저장소명은 `patient_analysis`이며, 배포 도메인도 `patient-tool-demo.vercel.app`(404)이 아닌 `patientanalysis.vercel.app`(정상 응답, 실제 서비스 확인)이었음 → 두 URL 모두 수정. `lib/data/careers.ts`의 `dev-001`(같은 프로젝트, 경력 탭에 노출)에도 동일한 `github`/`demo`를 추가하여 GitHub API 연동 시 중복 항목이 생기지 않도록 함.
2. **깨진 GitHub 링크**: `lib/data/careers.ts`의 `dev-002`(의료비 비교 시스템)가 가리키는 `medical_price_comparison` 저장소가 GitHub API 조회 결과 404(비공개 전환 또는 삭제 추정). 정확한 대체 URL을 확인할 수 없어 깨진 `github` 링크는 제거하고, 정상 응답하는 `demo` 링크만 유지.
3. **포트폴리오가 자기 자신을 프로젝트로 노출**: `lib/github.ts`의 `fetchGitHubRepos`가 GitHub API로 가져온 모든 공개 저장소를 그대로 노출해, 이 포트폴리오 저장소 자체(`boam79_pr`)가 Experience 페이지의 "개발 경력"에 프로젝트처럼 나타나고 있었음 → `EXCLUDED_REPO_NAMES` 필터를 추가해 제외.
4. **날짜 계산 시간대 버그**: `lib/utils/calculateDuration.ts`가 `parseCareerDate`(UTC 기준 생성)로 만든 날짜를 로컬 타임존 getter(`getFullYear`/`getMonth`)로 읽고 있었음. 이 함수는 클라이언트(`CareerCard`, `'use client'`)에서 실행되므로 방문자의 로컬 타임존에 따라 결과가 달라질 수 있는 잠재 버그. UTC getter로 통일해 방문자 타임존과 무관하게 항상 동일한 결과가 나오도록 수정. 실제로 버그를 재현하는 회귀 테스트(`tests/calculate-duration.test.ts`)로 수정 전/후 동작 차이를 확인함.

### 검증

- `npm run lint`, `npx tsc --noEmit`, `npm test`(18/18 통과, 신규 회귀 테스트 포함), `npm run build` 모두 통과
- 프로덕션 서버를 직접 기동해 `/api/github-careers` 응답을 확인 — `boam79_pr`가 더 이상 노출되지 않고, `patient_analysis`가 정상적으로 포함됨을 확인
- 실제 GitHub REST API(`api.github.com`)와 각 데모 URL에 curl로 직접 요청해 존재 여부를 교차 검증 (텍스트 검토만으로는 알 수 없는 깨진 링크를 데이터 기반으로 발견)

### 참고 (수정하지 않고 남겨둔 항목)

- `ai_meet`의 데모 URL(`ai-meet-beige.vercel.app`)은 GitHub 저장소의 `homepage` 필드와 정확히 일치하지만 현재 배포가 다운되어 404를 반환함. 코드/데이터 자체는 정확하므로 수정하지 않았음 — 배포가 복구되면 자동으로 정상화됨. 필요 시 링크 제거를 요청해 주세요.
- 저장소 이름 자체의 오탈자(`coin-dashborad`, `noncorverd`)는 GitHub 상의 실제 저장소명이라 우리 코드에서 임의로 고치지 않음(제목은 저장소명을 그대로 가공해 표시).

## Lessons

- Next.js App Router 사용 중
- TypeScript로 타입 안정성 확보
- Framer Motion으로 애니메이션 구현
- Tailwind CSS로 스타일링
- Next.js 이미지 최적화: WebP, AVIF 포맷 지원으로 성능 향상
- 접근성: 키보드 네비게이션과 ARIA 레이블로 스크린 리더 지원
- SEO: 메타데이터, OpenGraph, JSON-LD 구조화된 데이터로 검색 최적화
- **버그 수정**: 
  - `calculateDuration` 함수 중복 제거 및 날짜 파싱 로직 개선 (모든 점을 하이픈으로 치환)
  - `OptimizedImage` 컴포넌트에 fill prop 지원 추가 및 width/height 검증 추가
  - Import 경로 수정 (calculateDuration을 별도 파일에서 import)

