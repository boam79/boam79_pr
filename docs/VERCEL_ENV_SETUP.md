# Vercel 환경변수 설정 가이드

이 가이드는 Vercel에 배포된 Boam79 포트폴리오 웹사이트에 EmailJS 환경변수를 설정하는 방법을 안내합니다.

## 빠른 설정 가이드

### 1단계: Vercel 대시보드 접속
1. [Vercel 대시보드](https://vercel.com/dashboard)에 로그인
2. 프로젝트 `boam79pr` 선택

### 2단계: 환경변수 추가
1. 프로젝트 페이지에서 **"Settings"** 탭 클릭
2. 왼쪽 메뉴에서 **"Environment Variables"** 클릭
3. 다음 3개의 환경변수를 추가:

#### 환경변수 1: Service ID
- **Key**: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value**: EmailJS 대시보드에서 확인한 Service ID (예: `service_abc123`)
- **Environment**: Production, Preview, Development 모두 선택

#### 환경변수 2: Template ID
- **Key**: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value**: EmailJS 대시보드에서 확인한 Template ID (예: `template_xyz789`)
- **Environment**: Production, Preview, Development 모두 선택

#### 환경변수 3: Public Key
- **Key**: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value**: EmailJS 대시보드에서 확인한 Public Key (예: `abcdefghijklmnop`)
- **Environment**: Production, Preview, Development 모두 선택

### 3단계: 배포 재실행
1. 환경변수 추가 후 **"Save"** 클릭
2. 상단 메뉴에서 **"Deployments"** 탭 클릭
3. 최신 배포 항목의 **"..."** 메뉴 클릭
4. **"Redeploy"** 선택
5. 또는 Git에 새로운 커밋을 푸시하면 자동으로 재배포됩니다

## 스크린샷 가이드

### 환경변수 추가 화면
```
Settings > Environment Variables

┌─────────────────────────────────────────┐
│ Add New                                 │
├─────────────────────────────────────────┤
│ Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID    │
│ Value: [your_service_id]                │
│ ☑ Production                            │
│ ☑ Preview                                │
│ ☑ Development                            │
│ [Save]                                   │
└─────────────────────────────────────────┘
```

## 확인 방법

### 1. 배포 로그 확인
1. Vercel 대시보드에서 **"Deployments"** 탭 클릭
2. 최신 배포 항목 클릭
3. 빌드 로그에서 환경변수가 올바르게 로드되었는지 확인

### 2. 웹사이트 테스트
1. 배포된 사이트 접속: `https://boam79pr.vercel.app/contact`
2. Contact Form 작성 및 제출
3. 개발자 도구(F12) > Console에서 에러 확인
4. 설정된 이메일 주소로 메일 수신 확인

## 문제 해결

### 환경변수가 적용되지 않는 경우
1. **배포 재실행**: 환경변수 추가 후 반드시 재배포 필요
2. **환경 선택 확인**: Production, Preview, Development 모두 선택했는지 확인
3. **변수명 확인**: `NEXT_PUBLIC_` 접두사가 정확한지 확인
4. **값 확인**: 공백이나 특수문자가 포함되지 않았는지 확인

### 이메일이 전송되지 않는 경우
1. **EmailJS 설정 확인**: [EmailJS 설정 가이드](./EMAILJS_SETUP.md) 참조
2. **브라우저 콘솔 확인**: 개발자 도구에서 에러 메시지 확인
3. **EmailJS 대시보드 확인**: Email Service가 활성화되어 있는지 확인

## 보안 주의사항

⚠️ **중요**:
- Public Key는 클라이언트에 노출되지만 EmailJS의 보안 정책에 따라 안전합니다
- Service ID와 Template ID는 공개되어도 문제없지만, 필요시 제한 설정 가능
- 민감한 정보는 서버 사이드에서 처리하는 것을 권장합니다

## 추가 리소스

- [Vercel 환경변수 공식 문서](https://vercel.com/docs/concepts/projects/environment-variables)
- [EmailJS 설정 가이드](./EMAILJS_SETUP.md)
- [Vercel 배포 가이드](https://vercel.com/docs/concepts/deployments/overview)

