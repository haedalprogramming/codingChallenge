/**
 * [해달에듀] 옥토스튜디오 2차시: 흔들면 복이 우수수! 소리 나는 마법 카드
 * 자동 슬라이드 생성 스크립트 (38장)
 */

// ==========================================
// 1. 디자인 시스템 상수 (Global Config)
// ==========================================
const COLORS = {
  // 브랜드 컬러
  HAEDAL_YELLOW: '#FFD506',
  DARK: '#3D3D3D',
  DARK_BG: '#4A4A4A',
  GRAY: '#6B6B6B',
  LIGHT_BG: '#F5F5F5',
  CREAM_BG: '#FFF9E6',
  WHITE: '#FFFFFF',
  RED_HIGHLIGHT: '#E53935',

  // 옥토스튜디오 블록 컬러
  BLOCK_GREEN: '#9CCC65',
  BLOCK_YELLOW: '#FFEE58',
  BLOCK_ORANGE: '#FFA726',
  BLOCK_PURPLE: '#AB47BC',
  BLOCK_BLUE: '#42A5F5',
  BLOCK_RED: '#EF5350'
};

// ==========================================
// 2. 메인 실행 함수
// ==========================================
function createHaedalLessonDeck2() {
  var deck = SlidesApp.create("[해달에듀] 옥토스튜디오 2차시 - 소리 나는 마법 카드!");
  var slides = deck.getSlides();
  if (slides.length > 0) slides[0].remove();

  var W = deck.getPageWidth();
  var H = deck.getPageHeight();

  // =====================================================
  // PART 1. 도입 (Intro) : 4장
  // =====================================================

  // [Slide 01] 표지
  var s01 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s01.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  var coverBox = s01.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 300, H/2 - 180, 600, 360);
  coverBox.getFill().setSolidFill(COLORS.WHITE);
  coverBox.getBorder().setTransparent();
  addText(s01, "소리 나는 마법 카드!", W/2 - 250, H/2 - 100, 500, 44, COLORS.DARK, true, true);
  addText(s01, "흔들면 복이 우수수 🧧", W/2 - 250, H/2 - 20, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "2차시 | 해달에듀", W/2 - 250, H/2 + 50, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 지난 시간 복습
  var s02 = createHeaderSlide(deck, "지난 시간에 만든 '둥둥이'");
  addText(s02, "잘 지내고 있나요?", 50, 100, 620, 24, COLORS.DARK, true);
  createImagePlaceholder(s02, W/2 - 180, 150, 360, 200, "1차시 완성작 이미지\n(둥둥 떠다니는 내 얼굴)");
  var border = s02.insertShape(SlidesApp.ShapeType.RECTANGLE, W/2 - 185, 145, 370, 210);
  border.getFill().setTransparent();
  border.getBorder().setWeight(4).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);

  // [Slide 03] 문제 제기
  var s03 = createHeaderSlide(deck, "어라? 아무 소리도 안 들려요!");
  var problemBox = s03.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  problemBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s03, "😶", W/2 - 30, 160, 60, 48, COLORS.DARK, false, true);
  addText(s03, "우리 주인공이\n목소리를 잃어버렸나 봐요!", W/2 - 150, 230, 300, 20, COLORS.DARK, true, true);
  addText(s03, "💬 ...", W/2 + 100, 180, 80, 24, COLORS.GRAY);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 마법 미션!");
  var missionBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 130, 520, 250);
  missionBox.getFill().setSolidFill(COLORS.CREAM_BG);
  missionBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s04, "🗣️ 1. 목소리 마법 - 녹음하기", 140, 160, 440, 20, COLORS.DARK, true);
  addText(s04, "🔔 2. 초인종 마법 - 터치하면 소리", 140, 220, 440, 20, COLORS.DARK, true);
  addText(s04, "📳 3. 쉐킷쉐킷 마법 - 흔들면 선물!", 140, 280, 440, 20, COLORS.DARK, true);

  // =====================================================
  // PART 2. 목소리 구슬 만들기 (STEP 1) : 6장
  // =====================================================

  // [Slide 05] 목소리 구슬 개념
  var s05 = createHeaderSlide(deck, "목소리 구슬이란?");
  var conceptBox5 = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  conceptBox5.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "🎤", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s05, "마이크로 내 목소리를\n유리구슬처럼 담아요!", W/2 - 180, 220, 360, 20, COLORS.DARK, true, true);
  addText(s05, "🔮", W/2 + 130, 160, 40, 32, COLORS.BLOCK_PURPLE);

  // [Slide 06] 소리 탭 찾기
  var s06 = createHeaderSlide(deck, "소리 탭을 찾아요!");
  var stepBox6 = s06.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 150);
  stepBox6.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s06, "화면 아래 🔊 스피커 모양\n버튼을 터치!", 80, 170, 290, 18, COLORS.DARK, true);
  createImagePlaceholder(s06, 420, 120, 260, 260, "앱 화면\n(소리 탭\n빨간 박스 강조)");

  // [Slide 07] 마이크 버튼
  var s07 = createHeaderSlide(deck, "마이크 버튼을 꾹!");
  var micBox = s07.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 150);
  micBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s07, "🎙️ 마이크 버튼을 눌러\n녹음을 시작해요!", 80, 170, 290, 18, COLORS.DARK, true);
  createImagePlaceholder(s07, 420, 120, 260, 260, "마이크 버튼\n확대 화면\n(빨간 박스 강조)");

  // [Slide 08] 녹음하기
  var s08 = createHeaderSlide(deck, "씩씩하게 외쳐요!");
  var recordBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 130, 560, 180);
  recordBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "\"할머니! 새해 복 많~이 받으세요!\n사랑해요!\"", W/2 - 200, 180, 400, 24, COLORS.DARK, true, true);
  createImagePlaceholder(s08, W/2 - 100, 320, 200, 60, "음성 파형 표시");

  // [Slide 09] 체크 버튼
  var s09 = createHeaderSlide(deck, "체크 버튼 꾹!");
  var checkBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 180);
  checkBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s09, "✅ 녹음이 끝나면\n체크(V) 버튼을 눌러요!", 80, 180, 290, 18, COLORS.DARK, true);
  createImagePlaceholder(s09, 420, 120, 260, 260, "체크 버튼\n(빨간 박스 강조)");

  // [Slide 10] 녹음 완료
  var s10 = createHeaderSlide(deck, "내 목소리가 스마트폰 속에!");
  var successBox10 = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  successBox10.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s10, "▶️ 재생 버튼으로 확인해봐요!", W/2 - 180, 180, 360, 20, COLORS.DARK, true, true);
  addText(s10, "🎉 성공!", W/2 - 60, 250, 120, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 초인종 마법 (STEP 2) : 6장
  // =====================================================

  // [Slide 11] 언제 소리가 나야 할까?
  var s11 = createHeaderSlide(deck, "언제 소리가 나야 할까요?");
  addText(s11, "계속 나면 시끄럽겠죠? 🔕", 50, 100, 620, 20, COLORS.DARK, true);
  createCard(s11, 80, 160, 250, 180, "❌ 계속 소리", "시끄러워요!", COLORS.LIGHT_BG);
  var vsShape = s11.insertShape(SlidesApp.ShapeType.ELLIPSE, W/2 - 30, 230, 60, 60);
  vsShape.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s11, "VS", W/2 - 30, 245, 60, 20, COLORS.DARK, true, true);
  createCard(s11, 390, 160, 250, 180, "⭕ 터치할 때만", "손가락으로 톡!", COLORS.CREAM_BG);

  // [Slide 12] 초인종 비유
  var s12 = createHeaderSlide(deck, "초인종처럼!");
  var bellBox = s12.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 220);
  bellBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s12, "🔔 딩동~", W/2 - 80, 160, 160, 36, COLORS.DARK, true, true);
  addText(s12, "문 앞 초인종을 누르면\n소리가 나듯이!", W/2 - 150, 240, 300, 20, COLORS.DARK, false, true);

  // [Slide 13] 터치 블록 찾기
  var s13 = createHeaderSlide(deck, "노란색 블록을 찾아요!");
  addText(s13, "[손가락으로 누르는 그림] 블록 = 초인종", 50, 100, 350, 16, COLORS.DARK, true);
  drawBlock(s13, 80, 180, "👆 이 스프라이트를 클릭했을 때", COLORS.BLOCK_YELLOW, 300, 60);
  createImagePlaceholder(s13, 420, 120, 260, 260, "블록 팔레트\n(터치 블록 확대)");

  // [Slide 14] 블록 연결
  var s14 = createHeaderSlide(deck, "목소리 구슬을 붙여요!");
  addText(s14, "초인종 블록 밑에 [소리 재생] 블록 딸깍!", 50, 100, 400, 16, COLORS.DARK, true);
  drawBlock(s14, 80, 170, "👆 이 스프라이트를 클릭했을 때", COLORS.BLOCK_YELLOW, 300, 55);
  drawBlock(s14, 80, 230, "🔊 녹음 1 재생하기", COLORS.BLOCK_PURPLE, 300, 55);
  addText(s14, "딸깍!", 400, 200, 80, 20, COLORS.HAEDAL_YELLOW, true);

  // [Slide 15] 터치 테스트
  var s15 = createHeaderSlide(deck, "톡! 터치해봐요!");
  addText(s15, "화면 속 나를 손가락으로 터치!", 50, 100, 620, 20, COLORS.DARK, true);
  createImagePlaceholder(s15, W/2 - 180, 150, 360, 200, "터치 제스처 안내\n+ 실행 화면");
  addText(s15, "👆 톡!", W/2 + 100, 280, 80, 24, COLORS.HAEDAL_YELLOW, true);

  // [Slide 16] 터치 성공
  var s16 = createHeaderSlide(deck, "벙어리 마법 탈출!");
  var successBox16 = s16.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  successBox16.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s16, "🎉 드디어 우리 둥둥이가\n말을 해요!", W/2 - 180, 180, 360, 24, COLORS.DARK, true, true);
  addText(s16, "\"새해 복 많이 받으세요!\"", W/2 - 150, 260, 300, 16, COLORS.DARK, false, true);

  // =====================================================
  // PART 4. 선물 상자 그리기 (STEP 3) : 4장
  // =====================================================

  // [Slide 17] 선물 준비
  var s17 = createHeaderSlide(deck, "인사만 하면 섭섭하죠?");
  var giftBox = s17.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  giftBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s17, "🎁", W/2 - 30, 160, 60, 48, COLORS.DARK, false, true);
  addText(s17, "이번엔 선물을 준비해봐요!", W/2 - 150, 240, 300, 20, COLORS.DARK, true, true);

  // [Slide 18] 새 스프라이트 추가
  var s18 = createHeaderSlide(deck, "+ 버튼으로 새 친구!");
  addText(s18, "새로운 스프라이트를 추가해요", 50, 100, 350, 18, COLORS.DARK, true);
  createImagePlaceholder(s18, 420, 120, 260, 260, "스프라이트 추가 버튼\n(+ 버튼 강조)");

  // [Slide 19] 복주머니 그리기
  var s19 = createHeaderSlide(deck, "복주머니를 그려요!");
  var drawBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  drawBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s19, "🧧 동그랗게 주머니 +\n'복' 글자!", 80, 180, 290, 18, COLORS.DARK, true);
  addText(s19, "💕 하트도 좋아요!", 80, 280, 290, 16, COLORS.GRAY);
  createImagePlaceholder(s19, 420, 120, 260, 260, "그리기 화면\n(복주머니 예시)");

  // [Slide 20] 새 친구 등장
  var s20 = createHeaderSlide(deck, "새 친구 등장!");
  createImagePlaceholder(s20, W/2 - 180, 130, 360, 180, "완성된 화면\n(캐릭터 + 복주머니)");
  var sleepBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 100, 320, 200, 60);
  sleepBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s20, "지금은 쿨쿨 자고 있어요 💤", W/2 - 90, 335, 180, 14, COLORS.GRAY, false, true);

  // =====================================================
  // PART 5. 쉐킷쉐킷 마법 (STEP 4) : 8장 ★ 핵심 파트
  // =====================================================

  // [Slide 21] 흔들기 개념
  var s21 = createHeaderSlide(deck, "잠꾸러기를 깨우는 방법!");
  var shakeBox21 = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  shakeBox21.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s21, "📳", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s21, "스마트폰은 흔드는 걸\n느낄 수 있어요!", W/2 - 150, 220, 300, 20, COLORS.DARK, true, true);

  // [Slide 22] 지진 비유
  var s22 = createHeaderSlide(deck, "지진을 일으켜요!");
  var quakeBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  quakeBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "🌋", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s22, "폰을 흔들면 복주머니가\n깜짝 놀라서 일어나요!", W/2 - 170, 220, 340, 20, COLORS.DARK, true, true);

  // [Slide 23] 복주머니 선택
  var s23 = createHeaderSlide(deck, "복주머니를 선택해요!");
  addText(s23, "복주머니 스프라이트를 터치해서 선택", 50, 100, 400, 18, COLORS.DARK, true);
  createImagePlaceholder(s23, W/2 - 180, 150, 360, 220, "스프라이트 선택 화면\n(복주머니 선택됨)");

  // [Slide 24] 흔들림 블록 찾기
  var s24 = createHeaderSlide(deck, "흔들림 블록을 찾아요!");
  addText(s24, "노란색 블록 중 [핸드폰이 흔들리는 그림]", 50, 100, 400, 16, COLORS.DARK, true);
  drawBlock(s24, 80, 180, "📳 흔들렸을 때", COLORS.BLOCK_YELLOW, 220, 60);
  createImagePlaceholder(s24, 420, 120, 260, 260, "흔들림 감지 블록\n확대 이미지");

  // [Slide 25] 동작 블록 연결
  var s25 = createHeaderSlide(deck, "동작 블록을 붙여요!");
  addText(s25, "[점프하기] 또는 [빙글빙글 돌기] 블록 연결", 50, 100, 400, 16, COLORS.DARK, true);
  drawBlock(s25, 80, 170, "📳 흔들렸을 때", COLORS.BLOCK_YELLOW, 220, 55);
  drawBlock(s25, 80, 230, "↻ 90 회전하기", COLORS.BLOCK_GREEN, 220, 55);
  addText(s25, "딸깍!", 320, 200, 80, 20, COLORS.HAEDAL_YELLOW, true);
  createImagePlaceholder(s25, 420, 120, 260, 260, "블록 연결 이미지");

  // [Slide 26] 쉐킷쉐킷
  var s26 = createHeaderSlide(deck, "쉐킷 쉐킷!");
  var shakeBox26 = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 220);
  shakeBox26.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s26, "📱", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s26, "폰을 두 손으로 꽉 잡고\n흔들어봐요!", W/2 - 150, 220, 300, 24, COLORS.DARK, true, true);
  addText(s26, "쉐킷! 쉐킷!", W/2 - 80, 290, 160, 20, COLORS.WHITE, true, true);

  // [Slide 27] 흔들기 성공
  var s27 = createHeaderSlide(deck, "폴짝폴짝!");
  var successBox27 = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  successBox27.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s27, "🎉 내가 흔들 때마다\n복주머니가 춤을 춰요!", W/2 - 180, 180, 360, 24, COLORS.DARK, true, true);
  addText(s27, "🧧 폴짝! 🧧", W/2 - 60, 260, 120, 20, COLORS.DARK, true, true);

  // [Slide 28] 오늘의 코딩 주문서
  var s28 = createHeaderSlide(deck, "오늘의 코딩 주문서");
  var formulaBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 260);
  formulaBox.getFill().setSolidFill(COLORS.CREAM_BG);
  formulaBox.getBorder().setWeight(3).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s28, "🗣️ 말하기 마법:", 120, 150, 200, 18, COLORS.DARK, true);
  addText(s28, "[터치 블록] + [소리 재생]", 120, 190, 400, 16, COLORS.GRAY);
  addText(s28, "👋 흔들기 마법:", 120, 250, 200, 18, COLORS.DARK, true);
  addText(s28, "[흔들림 감지] + [동작 블록]", 120, 290, 400, 16, COLORS.GRAY);

  // =====================================================
  // PART 6. 마무리 미션 (Finish) : 8장
  // =====================================================

  function createFinishSlide2(currentStep, screenshotDesc) {
    var slide = createHeaderSlide(deck, "오늘의 탐험 완료!");
    var missionBox = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 120, 350, 200);
    missionBox.getFill().setSolidFill(COLORS.WHITE);
    missionBox.getBorder().setWeight(2).getLineFill().setSolidFill(COLORS.DARK);
    addText(slide, "📝 마무리 미션", 80, 140, 290, 22, COLORS.DARK, true);
    var step1Style = (currentStep === 1) ? true : false;
    var step2Style = (currentStep === 2) ? true : false;
    var step1Color = (currentStep === 1) ? COLORS.DARK : COLORS.GRAY;
    var step2Color = (currentStep === 2) ? COLORS.DARK : COLORS.GRAY;
    var step1Check = (currentStep > 1) ? "✅ " : "";
    addText(slide, step1Check + "1. 프로젝트 파일 저장", 80, 190, 290, 16, step1Color, step1Style);
    addText(slide, "2. 내 작품 녹화하기", 80, 230, 290, 16, step2Color, step2Style);
    createImagePlaceholder(slide, 420, 120, 260, 260, screenshotDesc);
    return slide;
  }

  // 6-1. 프로젝트 파일 저장 (4장)
  createFinishSlide2(1, "앱 화면\n(공유 버튼 강조)");
  createFinishSlide2(1, "공유하기 팝업\n(프로젝트 파일 보내기)");
  createFinishSlide2(1, "이름 입력 화면");
  createFinishSlide2(1, "다운로드 폴더 선택");

  // 6-2. 영상 녹화하기 (4장)
  createFinishSlide2(2, "영상 녹화하기 선택");
  createFinishSlide2(2, "녹화 시작 버튼");
  createFinishSlide2(2, "앨범에 저장하기");
  createFinishSlide2(2, "저장 완료!");

  // =====================================================
  // PART 7. 예고 (Closing) : 2장
  // =====================================================

  // [Slide 37] 마법 카드 완성
  var s37 = createHeaderSlide(deck, "세상에 하나뿐인 마법 카드 완성!");
  var summaryBox = s37.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 130, 520, 230);
  summaryBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s37, "👀 눈으로 보고", 150, 160, 420, 20, COLORS.DARK, true);
  addText(s37, "👂 귀로 듣고", 150, 210, 420, 20, COLORS.DARK, true);
  addText(s37, "👋 손으로 흔드는", 150, 260, 420, 20, COLORS.DARK, true);
  addText(s37, "살아있는 카드!", 150, 310, 420, 20, COLORS.HAEDAL_YELLOW, true);

  // [Slide 38] 다음 시간 예고
  var s38 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s38.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s38, "다음 시간에는...", W/2 - 200, H/2 - 80, 400, 28, COLORS.DARK, true, true);
  addText(s38, "🎬 내가 만든 코딩,\n세상에 자랑하기!", W/2 - 200, H/2 - 20, 400, 24, COLORS.WHITE, true, true);
  addText(s38, "챌린지 우승 비결 대공개!", W/2 - 150, H/2 + 60, 300, 18, COLORS.DARK, true, true);
  addText(s38, "3차시에서 만나요!", W/2 - 120, H/2 + 100, 240, 16, COLORS.DARK, false, true);

  Logger.log("슬라이드 생성 완료! (총 38장) URL: " + deck.getUrl());
}

// =======================================================
// [Helper Functions] 도구 함수들
// =======================================================

function createHeaderSlide(deck, title) {
  var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var header = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, deck.getPageWidth(), 70);
  header.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  header.getBorder().setTransparent();
  addText(slide, title, 30, 15, 660, 32, COLORS.DARK, true);
  return slide;
}

function addText(slide, text, x, y, w, fontSize, color, isBold, isCenter) {
  var textBox = slide.insertTextBox(text, x, y, w, fontSize * 2.5);
  var style = textBox.getText().getTextStyle();
  style.setFontSize(fontSize).setForegroundColor(color).setFontFamily("Roboto");
  if (isBold) style.setBold(true);
  if (isCenter) {
    textBox.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  }
  return textBox;
}

function createCard(slide, x, y, w, h, title, content, bgColor) {
  var card = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, w, h);
  card.getFill().setSolidFill(bgColor);
  card.getBorder().setTransparent();
  addText(slide, title, x + 20, y + 15, w - 40, 20, COLORS.DARK, true, true);
  addText(slide, content, x + 20, y + 60, w - 40, 14, COLORS.GRAY, false, true);
}

function createImagePlaceholder(slide, x, y, w, h, altText) {
  var placeholder = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  placeholder.getFill().setSolidFill('#E0E0E0');
  placeholder.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(slide, "📷 " + altText, x + 10, y + h/2 - 30, w - 20, 11, COLORS.GRAY, false, true);
}

function drawBlock(slide, x, y, text, color, w, h) {
  var width = w || 200;
  var height = h || 50;
  var block = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, width, height);
  block.getFill().setSolidFill(color);
  block.getBorder().setTransparent();
  var txt = block.getText();
  txt.setText(text);
  var style = txt.getTextStyle();
  var textColor = (color === COLORS.BLOCK_YELLOW) ? COLORS.DARK : COLORS.WHITE;
  style.setForegroundColor(textColor).setFontSize(14).setBold(true);
  txt.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
}
