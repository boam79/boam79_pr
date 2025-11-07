# Formspree로 변경하기 (가장 간단한 방법)

## 🚀 2분만에 끝내기

### 1단계: Formspree 계정 만들기 (1분)
1. https://formspree.io/ 접속
2. "Get Started" 클릭 → 무료 가입
3. 이메일 인증 완료

### 2단계: Form 생성 (30초)
1. 대시보드에서 **"New Form"** 클릭
2. Form 이름 입력: `Portfolio Contact`
3. 이메일 주소 입력: `ckadltmfxhrxhrxhr@gmail.com`
4. **"Create Form"** 클릭
5. **Form Endpoint URL** 복사 (예: `https://formspree.io/f/abc123xyz`)

### 3단계: 코드 수정 (30초)
Contact Form의 `action` 속성에 Formspree URL만 추가하면 끝!

**변경 전**:
```tsx
<form onSubmit={handleSubmit}>
```

**변경 후**:
```tsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### 4단계: 완료! ✅
- EmailJS 환경변수 불필요
- Vercel 설정 불필요
- 바로 작동!

---

## 💡 장점

- ✅ 설정이 매우 간단 (2분)
- ✅ 환경변수 불필요
- ✅ 코드 수정 최소화
- ✅ 스팸 방지 자동 포함
- ✅ 무료 플랜: 월 50건

## ⚠️ 단점

- 무료 플랜 제한 (월 50건)
- 커스터마이징 제한적

---

## 🔧 코드 변경 예시

현재 EmailJS 코드를 Formspree로 변경하면:

```tsx
// 간단한 버전
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">전송</button>
</form>

// React 상태 관리가 필요한 경우
<form 
  action="https://formspree.io/f/your-form-id" 
  method="POST"
  onSubmit={handleSubmit}
>
  {/* 기존 input 필드들 */}
</form>
```

Formspree로 변경하시겠습니까?

