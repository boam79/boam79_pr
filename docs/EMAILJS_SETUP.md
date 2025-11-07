# EmailJS 설정 가이드 (간단 버전)

## 🚀 5분만에 끝내기

### 1단계: EmailJS 계정 만들기 (2분)
1. https://www.emailjs.com/ 접속 → 무료 가입
2. 이메일 인증 완료

### 2단계: 이메일 서비스 연결 (1분)
1. 왼쪽 메뉴에서 **"Email Services"** 클릭
2. **"Add New Service"** 클릭
3. Gmail 선택 → 연결
4. **Service ID** 복사 (예: `service_abc123`)

### 3단계: 이메일 템플릿 만들기 (1분)
1. 왼쪽 메뉴에서 **"Email Templates"** 클릭
2. **"Create New Template"** 클릭
3. 아래 내용 복사해서 붙여넣기:

**제목**:
```
포트폴리오 문의 - {{inquiry_type}}
```

**내용**:
```
보낸 사람: {{from_name}}
이메일: {{from_email}}
회사: {{company}}
문의 유형: {{inquiry_type}}

메시지:
{{message}}
```

4. **Template ID** 복사 (예: `template_xyz789`)

### 4단계: Public Key 확인 (30초)
1. 왼쪽 메뉴에서 **"Account"** 클릭
2. **Public Key** 복사 (예: `abcdefghijklmnop`)

### 5단계: Vercel에 환경변수 추가 (1분)
1. https://vercel.com/dashboard 접속
2. 프로젝트 `boam79pr` 클릭
3. **Settings** → **Environment Variables** 클릭
4. 아래 3개 추가 (각각 **Save** 클릭):

```
Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: [2단계에서 복사한 Service ID]
☑ Production ☑ Preview ☑ Development
```

```
Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: [3단계에서 복사한 Template ID]
☑ Production ☑ Preview ☑ Development
```

```
Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: [4단계에서 복사한 Public Key]
☑ Production ☑ Preview ☑ Development
```

5. **Deployments** 탭 → 최신 배포의 **"..."** → **Redeploy**

### 6단계: 테스트 (30초)
1. https://boam79pr.vercel.app/contact 접속
2. 폼 작성 후 제출
3. 이메일 받았는지 확인 ✅

---

## ❓ 문제 해결

**이메일이 안 와요**
- Vercel에서 환경변수 3개 모두 추가했는지 확인
- Redeploy 했는지 확인
- EmailJS 대시보드에서 Service가 활성화되어 있는지 확인

**에러가 나요**
- 브라우저 F12 → Console 탭에서 에러 메시지 확인
- 환경변수 값에 공백이나 따옴표가 없는지 확인

---

## 📝 참고사항

- 무료 플랜: 월 200건까지 무료
- 환경변수는 Vercel에만 추가하면 됩니다 (로컬 개발은 선택사항)
- 설정 후 약 1-2분 후에 적용됩니다
