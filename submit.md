# 첫코딩 챌린지 제출 폼
> 아래 폼은 `https://challenge.haedal.io/submit` 에서 신청할 수 있게 한다.

참가자 데이터 확보(DB 구축)와 원활한 심사를 위한 **\[우리 아이 새해 첫 코딩 챌린지\] 작품 접수 폼(구글 폼) 질문 리스트**를 구성.

초등학생 참가자뿐만 아니라 보호자(부모님)가 함께 작성해야 하는 부분이 많으므로, 섹션을 명확히 나누어 작성.

## 신청시 데이터 보낼 URL
* 앱스스크립트: https://script.google.com/macros/s/AKfycbxKtrfclioEFt7YyDguoAk_q2g63ykd0H8uno3sLq3VAKPpdYtklCNa6c0Q8tup_cHNCA/exec
* Zapier: https://hooks.zapier.com/hooks/catch/20060834/uew0ffl/

------

## **📝 \[접수 폼\] 우리 아이 새해 첫 코딩 챌린지 작품 제출**

### **섹션 1\. 참가자 및 보호자 정보 (기본 사항)**

연락처는 시상 및 향후 교육 안내를 위해 정확하게 기입해 주세요.

1. **참가 학생 이름** (필수)  
   - (단답형 텍스트)  
2. **출생년도** (필수)  
   - (드롭다운 2019\~2013)  
3. **보호자 연락처** (필수)  
   - (상금 지급 및 결과 발표 시 연락받으실 번호를 입력해 주세요. 예: 010-1234-5678)  
4. **지역**  
   - (드롭다운 서울, 부산, 대구, 인천, 광주, 대전, 울산 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주)  
5. **학교**  
   - (단답형 텍스트)

### **섹션 2\. 챌린지 작품 제출 (핵심)**

심사는 제출해주신 영상의 '조회 수'를 기준으로 진행됩니다.

6. **작품 제목** (필수)  
   - (가이드라인 양식: \[참가자이름\] 제목 예: \[김코딩\] 할머니가 깜짝 놀란 새해 카드)  
7. **작품 의도** (필수)  
   - (500자 이하 소개서 작성)  
8. **업로드한 플랫폼 선택** (필수, 중복선택)  
   - ( ) 유튜브 쇼츠 (YouTube Shorts)  
   - ( ) 인스타그램 릴스 (Instagram Reels)  
   - ( ) 둘 다 업로드함 (조회 수가 더 높은 쪽의 링크를 아래에 제출해 주세요)  
9. **영상 게시물 링크(URL 1\)** (필수)  
   - (업로드하신 영상의 공유 링크를 붙여넣어 주세요. 비공개 계정이거나 링크 오류 시 심사에서 제외될 수 있습니다.)  
10. **영상 게시물 링크(URL 2\)** (선택)  
    - (업로드하신 영상의 공유 링크를 붙여넣어 주세요. 비공개 계정이거나 링크 오류 시 심사에서 제외될 수 있습니다.)

### **섹션 3\. 설문 조사 (운영 및 마케팅 데이터용)**

향후 더 좋은 교육 프로그램을 만들기 위한 소중한 자료로 활용됩니다.

10. **이번 챌린지 참여 난이도는 어땠나요?** (필수)  
    - (매우 쉬움 \- 쉬움 \- 보통 \- 어려움 \- 매우 어려움)  
11. **옥토 스튜디오(Octo Studio) 앱 사용은 재미있었나요?** (필수)  
    - (5점 척도)  
12. **\[향후 계획\] 내년에 전문가 선생님과 함께하는 '심화 코딩 교육 프로그램(유료)'이 개설된다면 참여할 의향이 있으신가요?** (선택)  
    - ( ) 네, 참여하고 싶습니다.  
    - ( ) 커리큘럼을 보고 결정하고 싶습니다.  
    - ( ) 아니요, 관심 없습니다.

### **섹션 4\. 개인정보 동의 및 유의사항 (필수)**

13. **개인정보 수집 및 이용 동의** (필수)  
    - (수집 항목: 이름, 연락처, 이메일 / 목적: 챌린지 운영, 심사, 시상 및 관련 안내 / 보유 기간: 프로젝트 종료 후 1년)  
    - ( ) 동의합니다.  
14. **마케팅 정보 수신 동의 (선택)**  
    - (해달에듀의 새로운 교육 소식과 이벤트 안내를 받으시겠습니까?)  
    - ( ) 동의합니다.  
15. **출품작 활용 동의** (필수)
    - (제출된 영상은 추후 챌린지 결과 발표 및 홍보 자료로 활용될 수 있음을 확인합니다.)
    - ( ) 확인했습니다.

------

## **Google Apps Script 배포 가이드**

제출 폼 데이터를 Google Sheets에 저장하기 위한 Apps Script 설정 방법입니다.

### **1단계. Google Sheets 준비**

1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 첫 번째 행(A1~Q1)에 아래 헤더 입력:

```
timestamp | studentName | birthYear | guardianPhone | region | school | workTitle | workDescription | platforms | videoUrl1 | videoUrl2 | difficulty | funRating | futurePlan | privacyConsent | marketingConsent | workUsageConsent
```

### **2단계. Apps Script 생성**

1. 스프레드시트 상단 메뉴에서 **확장 프로그램 > Apps Script** 클릭
2. 기존 코드를 모두 삭제하고 아래 코드 붙여넣기:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp,
      data.studentName,
      data.birthYear,
      data.guardianPhone,
      data.region,
      data.school,
      data.workTitle,
      data.workDescription,
      data.platforms,
      data.videoUrl1,
      data.videoUrl2,
      data.difficulty,
      data.funRating,
      data.futurePlan,
      data.privacyConsent,
      data.marketingConsent,
      data.workUsageConsent
    ]);

    return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Ctrl+S** (또는 Cmd+S)로 저장
4. 프로젝트 이름을 "제출폼 스크립트" 등으로 변경

### **3단계. 웹 앱으로 배포**

1. 우측 상단 **배포** 버튼 클릭 > **새 배포** 선택
2. 톱니바퀴 아이콘(⚙️) 클릭 > **웹 앱** 선택
3. 설정 입력:
   - **설명**: 작품 제출 폼 (선택사항)
   - **실행 주체(Execute as)**: **나(Me)**
   - **액세스 권한(Who has access)**: **모든 사용자(Anyone)**
4. **배포** 버튼 클릭
5. 권한 승인 요청 시:
   - **액세스 승인** 클릭
   - 본인 계정 선택
   - "Google에서 확인하지 않은 앱" 경고 시 **고급** > **프로젝트명(으)로 이동** 클릭
   - **허용** 클릭
6. 생성된 **웹 앱 URL** 복사

### **4단계. URL 적용**

복사한 URL을 `submit.html` 파일의 `GOOGLE_SCRIPT_URL` 변수에 붙여넣기:

```javascript
const GOOGLE_SCRIPT_URL = '여기에_복사한_URL_붙여넣기';
```

### **참고사항**

- URL 형식: `https://script.google.com/macros/s/AKfycbx.../exec`
- `/a/macros/도메인/` 형식은 내부 사용자 전용이므로 `/macros/s/` 형식이어야 함
- 코드 수정 후에는 **새 배포**를 생성해야 변경사항 반영됨
- 기존 배포 수정 시: **배포 > 배포 관리 > 연필 아이콘 > 버전을 "새 버전"으로 선택 > 배포**

