# 신청 데이터 자동화 설정 가이드

## 개요

챌린지 참가 신청 폼 제출 시 데이터가 자동으로 두 곳으로 전송됩니다:
1. **Google Sheets** - 신청자 데이터 저장
2. **Zapier** - 추가 자동화 워크플로우 연동

---

## 수집 데이터

| 필드명 | 설명 | 예시 |
|--------|------|------|
| `studentName` | 참가 학생 이름 | 김해달 |
| `birthYear` | 출생년도 | 2015 |
| `guardianPhone` | 보호자 연락처 | 010-1234-5678 |
| `region` | 지역 | 서울 |
| `school` | 학교 | OO초등학교 |
| `timestamp` | 신청 시간 (ISO 8601) | 2025-01-14T11:30:00.000Z |

---

## 1. Google Sheets 연동

### Google Apps Script 설정

1. 구글 시트 열기: [신청자 데이터 시트](https://docs.google.com/spreadsheets/d/1vCAalGint2nogaNM3jd7o1P73h7yZfFZZ4H4Bc5seOU/edit?usp=sharing)

2. **확장 프로그램** > **Apps Script** 클릭

3. 아래 코드 붙여넣기:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('1vCAalGint2nogaNM3jd7o1P73h7yZfFZZ4H4Bc5seOU').getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.studentName,
    data.birthYear,
    data.guardianPhone,
    data.region,
    data.school
  ]);

  return ContentService.createTextOutput('Success');
}
```

4. **배포** > **새 배포** 클릭

5. 설정:
   - 유형: **웹 앱**
   - 실행 사용자: **나**
   - 액세스 권한: **모든 사용자**

6. **배포** 클릭 후 권한 승인

7. 생성된 **웹 앱 URL** 복사

### 현재 배포된 URL

```
https://script.google.com/macros/s/AKfycbxRPF8tQoFhm7JhdcwnUvsV-y6-g48wJwFWdCAEEymKdtWlOvdDBZAZB1ER4n7mSCc-/exec
```

### 시트 컬럼 구조

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| timestamp | studentName | birthYear | guardianPhone | region | school |

---

## 2. Zapier 연동

### Webhook URL

```
https://hooks.zapier.com/hooks/catch/20060834/ugi0uud/
```

### 전송 데이터 형식

```json
{
  "studentName": "김해달",
  "birthYear": "2015",
  "guardianPhone": "010-1234-5678",
  "region": "서울",
  "school": "OO초등학교",
  "timestamp": "2025-01-14T11:30:00.000Z"
}
```

### Zapier 활용 예시

- 신청 완료 시 보호자에게 SMS/카카오 알림톡 발송
- Slack/Discord 채널에 신청 알림
- Notion 데이터베이스에 자동 추가
- 이메일 자동 발송

---

## 3. 프론트엔드 코드 (index.html)

### 위치: 699~769번째 줄

```javascript
// 7. Phone Number Auto-Formatting
const phoneInput = document.getElementById('guardianPhone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
    e.target.value = value;
});

// 8. Application Form Submit Logic (Google Sheets + Zapier Integration)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxRPF8tQoFhm7JhdcwnUvsV-y6-g48wJwFWdCAEEymKdtWlOvdDBZAZB1ER4n7mSCc-/exec';
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/20060834/ugi0uud/';

const applicationForm = document.getElementById('application-form');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

applicationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        studentName: document.getElementById('studentName').value,
        birthYear: document.getElementById('birthYear').value,
        guardianPhone: document.getElementById('guardianPhone').value,
        region: document.getElementById('region').value,
        school: document.getElementById('school').value,
        timestamp: new Date().toISOString()
    };

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>신청 중...</span>';

    try {
        // Send to Google Sheets
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        // Send to Zapier
        await fetch(ZAPIER_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        // Show success message
        applicationForm.querySelector('.space-y-5').classList.add('hidden');
        successMessage.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>무료 참가 신청하기</span>';
    }
});
```

---

## 문제 해결

### Google Apps Script 오류

**오류:** `TypeError: Cannot read properties of undefined (reading 'postData')`

**원인:** Apps Script 에디터에서 직접 실행 버튼을 눌렀을 때 발생

**해결:** 직접 실행하지 말고, 웹 앱으로 배포 후 실제 폼에서 테스트

### CORS 관련

- `mode: 'no-cors'` 설정으로 CORS 이슈 우회
- 응답 본문은 읽을 수 없지만 요청은 정상 전송됨

---

## 관련 링크

- [Google Sheets 신청자 데이터](https://docs.google.com/spreadsheets/d/1vCAalGint2nogaNM3jd7o1P73h7yZfFZZ4H4Bc5seOU/edit?usp=sharing)
- [Zapier Dashboard](https://zapier.com/app/zaps)
- [챌린지 홈페이지](https://kangminchoi.github.io/codingChallenge/)
