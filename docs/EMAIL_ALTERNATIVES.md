# 이메일 전송 방법 비교 가이드

현재는 EmailJS를 사용하고 있지만, 더 간단하거나 다른 방법도 있습니다. 각 방법의 장단점을 비교해보세요.

## 🎯 추천 순위

### 1위: Formspree (가장 간단) ⭐⭐⭐⭐⭐
**설정 시간**: 2분
**난이도**: ⭐ (매우 쉬움)

**장점**:
- 가장 간단함 (HTML form만 있으면 됨)
- 코드 수정 거의 없음
- 무료 플랜: 월 50건
- 스팸 방지 자동 포함

**단점**:
- 무료 플랜 제한 있음
- 커스터마이징 제한적

**설정 방법**:
1. https://formspree.io/ 가입
2. 새 Form 생성 → Endpoint URL 복사
3. Contact Form의 `action` 속성에 URL 추가
4. 끝! ✅

---

### 2위: Web3Forms (무료, 간단) ⭐⭐⭐⭐
**설정 시간**: 3분
**난이도**: ⭐⭐ (쉬움)

**장점**:
- 완전 무료 (제한 없음)
- API 키만 있으면 됨
- 설정 간단

**단점**:
- 상대적으로 덜 알려짐
- 커스터마이징 제한적

**설정 방법**:
1. https://web3forms.com/ 접속
2. 이메일 입력 → Access Key 받기
3. API 호출로 전송

---

### 3위: Resend (최신, Next.js 최적화) ⭐⭐⭐⭐
**설정 시간**: 5분
**난이도**: ⭐⭐⭐ (보통)

**장점**:
- Next.js 공식 추천
- 최신 기술 스택
- 무료 플랜: 월 3,000건
- React Email 지원

**단점**:
- API Route 필요 (서버 사이드)
- 설정이 약간 복잡

**설정 방법**:
1. https://resend.com/ 가입
2. API Key 발급
3. Next.js API Route 생성
4. 클라이언트에서 API 호출

---

### 4위: EmailJS (현재 사용 중) ⭐⭐⭐
**설정 시간**: 5분
**난이도**: ⭐⭐⭐ (보통)

**장점**:
- 클라이언트 사이드에서 직접 전송
- 템플릿 시스템
- 무료 플랜: 월 200건

**단점**:
- 환경변수 3개 필요
- 설정이 다소 복잡

---

### 5위: Nodemailer + SMTP (직접 구축) ⭐⭐
**설정 시간**: 10분
**난이도**: ⭐⭐⭐⭐ (어려움)

**장점**:
- 완전한 제어
- 무료 (Gmail SMTP 사용 시)

**단점**:
- 서버 사이드 코드 필요
- Gmail 보안 설정 복잡
- 유지보수 필요

---

## 💡 추천: Formspree로 변경하기

가장 간단한 방법입니다. 코드 수정이 거의 필요 없습니다.

### Formspree로 변경하는 방법

1. **Formspree 계정 생성**
   - https://formspree.io/ 접속
   - 무료 가입

2. **Form 생성**
   - "New Form" 클릭
   - Form 이름 입력 (예: "Portfolio Contact")
   - 이메일 주소 입력: `ckadltmfxhrxhrxhr@gmail.com`
   - "Create Form" 클릭
   - **Form Endpoint URL** 복사 (예: `https://formspree.io/f/xxxxx`)

3. **코드 수정** (간단!)
   - Contact Form을 일반 HTML form으로 변경
   - `action` 속성에 Formspree URL 추가
   - 끝!

**코드 예시**:
```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">전송</button>
</form>
```

---

## 🔄 다른 방법으로 변경하고 싶으신가요?

원하시는 방법을 알려주시면 코드를 수정해드리겠습니다!

1. **Formspree** - 가장 간단 (추천!)
2. **Web3Forms** - 무료, 제한 없음
3. **Resend** - Next.js 최적화
4. **현재 유지** - EmailJS 계속 사용

