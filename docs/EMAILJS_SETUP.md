# EmailJS 설정 가이드

이 가이드는 Boam79 포트폴리오 웹사이트의 Contact Form에서 EmailJS를 사용하여 이메일을 전송하기 위한 설정 방법을 안내합니다.

## 1. EmailJS 계정 생성 및 설정

### 1.1 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. "Sign Up" 버튼을 클릭하여 무료 계정 생성
3. 이메일 인증 완료

### 1.2 Email Service 추가
1. EmailJS 대시보드에서 **"Email Services"** 메뉴 클릭
2. **"Add New Service"** 버튼 클릭
3. 사용할 이메일 서비스 선택 (Gmail, Outlook 등)
4. 서비스 연결 및 인증 완료
5. **Service ID** 확인 (예: `service_xxxxxxx`)

### 1.3 Email Template 생성
1. EmailJS 대시보드에서 **"Email Templates"** 메뉴 클릭
2. **"Create New Template"** 버튼 클릭
3. 다음 템플릿 설정:

**템플릿 이름**: `portfolio_contact_form`

**제목 (Subject)**:
```
포트폴리오 문의 - {{inquiry_type}}
```

**내용 (Content)**:
```
보낸 사람: {{from_name}}
이메일: {{from_email}}
회사: {{company}}
문의 유형: {{inquiry_type}}

메시지:
{{message}}

---
이 메시지는 Boam79 포트폴리오 웹사이트의 Contact Form을 통해 전송되었습니다.
```

4. **Template ID** 확인 (예: `template_xxxxxxx`)

### 1.4 Public Key 확인
1. EmailJS 대시보드에서 **"Account"** 메뉴 클릭
2. **"General"** 탭에서 **Public Key** 확인 (예: `xxxxxxxxxxxxx`)

## 2. 로컬 개발 환경 설정

### 2.1 환경변수 파일 생성
프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**예시**:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 2.2 개발 서버 재시작
환경변수를 추가한 후 개발 서버를 재시작해야 합니다:

```bash
npm run dev
```

## 3. Vercel 배포 환경 설정

### 3.1 Vercel 대시보드에서 환경변수 추가
1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. 프로젝트 선택 (`boam79pr`)
3. **Settings** 메뉴 클릭
4. **Environment Variables** 섹션으로 이동
5. 다음 환경변수 추가:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `your_service_id` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `your_template_id` |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `your_public_key` |

**환경 선택**: Production, Preview, Development 모두 선택

### 3.2 배포 재실행
환경변수를 추가한 후:
1. Vercel 대시보드에서 **"Redeploy"** 클릭
2. 또는 Git에 새로운 커밋을 푸시하면 자동으로 재배포됩니다

## 4. 테스트 방법

### 4.1 로컬 테스트
1. 개발 서버 실행: `npm run dev`
2. 브라우저에서 `http://localhost:3000/contact` 접속
3. Contact Form 작성 및 제출
4. 개발자 콘솔에서 에러 확인 (F12)
5. 설정된 이메일 주소로 메일 수신 확인

### 4.2 프로덕션 테스트
1. 배포된 사이트 접속: `https://boam79pr.vercel.app/contact`
2. Contact Form 작성 및 제출
3. 설정된 이메일 주소로 메일 수신 확인

## 5. 문제 해결

### 5.1 이메일이 전송되지 않는 경우
- **환경변수 확인**: Vercel 대시보드에서 환경변수가 올바르게 설정되었는지 확인
- **템플릿 변수 확인**: EmailJS 템플릿의 변수명이 코드와 일치하는지 확인
- **Service ID 확인**: Email Service가 활성화되어 있는지 확인
- **Public Key 확인**: Public Key가 올바른지 확인

### 5.2 콘솔 에러 확인
브라우저 개발자 도구(F12)의 콘솔에서 다음 에러를 확인:
- `EmailJS 환경변수가 설정되지 않았습니다`: 환경변수가 설정되지 않음
- `EmailJS 초기화 실패`: Public Key가 잘못되었거나 네트워크 문제
- `이메일 전송 실패`: Service ID 또는 Template ID가 잘못됨

### 5.3 EmailJS 무료 플랜 제한
- 월 200건의 이메일 전송 제한
- 필요시 유료 플랜으로 업그레이드 가능

## 6. 보안 주의사항

⚠️ **중요**: 
- `.env.local` 파일은 절대 Git에 커밋하지 마세요 (이미 `.gitignore`에 포함됨)
- Public Key는 클라이언트에 노출되지만, EmailJS의 보안 정책에 따라 안전합니다
- 민감한 정보는 서버 사이드에서 처리하는 것을 권장합니다

## 7. 추가 리소스

- [EmailJS 공식 문서](https://www.emailjs.com/docs/)
- [EmailJS React 가이드](https://www.emailjs.com/docs/examples/reactjs/)
- [Vercel 환경변수 설정 가이드](https://vercel.com/docs/concepts/projects/environment-variables)

