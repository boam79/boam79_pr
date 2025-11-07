# Vercel 환경변수 설정 (간단 버전)

## ⚡ 1분만에 끝내기

### 단계별 가이드

1. **Vercel 접속**
   - https://vercel.com/dashboard
   - 프로젝트 `boam79pr` 클릭

2. **환경변수 추가**
   - **Settings** 탭 클릭
   - 왼쪽 메뉴에서 **Environment Variables** 클릭
   - **Add New** 버튼 클릭

3. **3개 변수 추가** (각각 따로 추가)

   **첫 번째:**
   ```
   Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID
   Value: [EmailJS에서 복사한 Service ID]
   ☑ Production ☑ Preview ☑ Development
   ```
   → **Save** 클릭

   **두 번째:**
   ```
   Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   Value: [EmailJS에서 복사한 Template ID]
   ☑ Production ☑ Preview ☑ Development
   ```
   → **Save** 클릭

   **세 번째:**
   ```
   Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   Value: [EmailJS에서 복사한 Public Key]
   ☑ Production ☑ Preview ☑ Development
   ```
   → **Save** 클릭

4. **재배포**
   - 상단 **Deployments** 탭 클릭
   - 최신 배포 항목의 **"..."** 메뉴 클릭
   - **Redeploy** 클릭

5. **완료!** ✅
   - 1-2분 후 자동으로 적용됩니다

---

## 💡 팁

- 환경변수는 3개 모두 추가해야 합니다
- Production, Preview, Development 모두 체크하세요
- 값에 공백이나 따옴표를 넣지 마세요
- 재배포 후 1-2분 기다리세요
