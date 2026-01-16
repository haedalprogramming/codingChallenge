/**
 * [해달에듀] 옥토스튜디오 3차시: 내가 만든 코딩, 세상에 자랑하기! (감독 데뷔)
 * 자동 슬라이드 생성 스크립트 (32장)
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
function createHaedalLessonDeck3() {
  var deck = SlidesApp.create("[해달에듀] 옥토스튜디오 3차시 - 코딩 감독 데뷔!");
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
  addText(s01, "내가 만든 코딩,\n세상에 자랑하기!", W/2 - 250, H/2 - 100, 500, 36, COLORS.DARK, true, true);
  addText(s01, "코딩 감독 데뷔 🎬", W/2 - 250, H/2 + 10, 500, 24, COLORS.GRAY, false, true);
  addText(s01, "3차시 | 해달에듀", W/2 - 250, H/2 + 60, 500, 18, COLORS.GRAY, false, true);

  // [Slide 02] 지난 시간 복습
  var s02 = createHeaderSlide(deck, "지난 시간까지 완성한 것!");
  var reviewBox = s02.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 130, 520, 230);
  reviewBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s02, "👀 보고", 150, 160, 420, 22, COLORS.DARK, true);
  addText(s02, "👂 듣고", 150, 210, 420, 22, COLORS.DARK, true);
  addText(s02, "👋 흔드는", 150, 260, 420, 22, COLORS.DARK, true);
  addText(s02, "마법 카드 완성!", 150, 310, 420, 22, COLORS.HAEDAL_YELLOW, true);

  // [Slide 03] 문제 제기
  var s03 = createHeaderSlide(deck, "아무리 멋진 영화도 관객이 없으면?");
  var emptyBox = s03.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  emptyBox.getFill().setSolidFill(COLORS.DARK);
  addText(s03, "🎭", W/2 - 30, 160, 60, 48, COLORS.WHITE, false, true);
  addText(s03, "너무 심심해요!", W/2 - 100, 240, 200, 20, COLORS.WHITE, true, true);

  // [Slide 04] 오늘의 미션
  var s04 = createHeaderSlide(deck, "오늘의 미션!");
  var missionBox = s04.insertShape(SlidesApp.ShapeType.RECTANGLE, 100, 130, 520, 250);
  missionBox.getFill().setSolidFill(COLORS.CREAM_BG);
  missionBox.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s04, "🎭 1. 리허설 - 화면 정리하기", 140, 170, 440, 20, COLORS.DARK, true);
  addText(s04, "📹 2. 촬영 - 가족 반응 찍기", 140, 230, 440, 20, COLORS.DARK, true);
  addText(s04, "📤 3. 업로드 - 챌린지 도전!", 140, 290, 440, 20, COLORS.DARK, true);

  // =====================================================
  // PART 2. 리허설 (STEP 1) : 4장
  // =====================================================

  // [Slide 05] 리허설 개념
  var s05 = createHeaderSlide(deck, "무대 위 배우 위치 점검!");
  var stageBox = s05.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  stageBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s05, "🎭", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s05, "배우가 무대에 오르기 전에\n'리허설'을 해요!", W/2 - 150, 220, 300, 20, COLORS.DARK, true, true);

  // [Slide 06] 체크 포인트
  var s06 = createHeaderSlide(deck, "체크 포인트!");
  createCard(s06, 80, 130, 280, 180, "❌ 이런 건 안 돼요!", "• 주인공이 복주머니에 가려짐\n• 캐릭터가 구석에 숨어있음", COLORS.LIGHT_BG);
  createImagePlaceholder(s06, 400, 130, 280, 180, "잘못된 예시 이미지\n(겹침, 구석 배치)");

  // [Slide 07] 올바른 배치
  var s07 = createHeaderSlide(deck, "가장 잘 보이는 곳으로!");
  addText(s07, "손가락으로 캐릭터를 정가운데로 옮겨요", 50, 100, 620, 18, COLORS.DARK, true);
  createImagePlaceholder(s07, W/2 - 180, 150, 360, 200, "올바른 배치 예시\n(정가운데 배치)");

  // [Slide 08] 준비 완료
  var s08 = createHeaderSlide(deck, "무대 준비 완료!");
  var readyBox = s08.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  readyBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s08, "✨ 관객들이 깜짝 놀랄\n준비 끝!", W/2 - 180, 190, 360, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 3. 촬영 비법 (STEP 2) : 10장 ★ 핵심 파트
  // =====================================================

  // [Slide 09] 우승 비법 소개
  var s09 = createHeaderSlide(deck, "챌린지 우승 비법!");
  var secretBox = s09.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  secretBox.getFill().setSolidFill(COLORS.DARK);
  addText(s09, "🤫", W/2 - 30, 150, 60, 48, COLORS.WHITE, false, true);
  addText(s09, "(속삭이듯)\n귀를 쫑긋 세우세요!", W/2 - 150, 210, 300, 20, COLORS.WHITE, true, true);

  // [Slide 10] 평범한 촬영
  var s10 = createHeaderSlide(deck, "게임 화면만 찍으면?");
  var boringBox = s10.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  boringBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s10, "😐", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s10, "너무 평범해요...", W/2 - 100, 230, 200, 20, COLORS.GRAY, true, true);

  // [Slide 11] 핵심 포인트
  var s11 = createHeaderSlide(deck, "가장 중요한 건 '관객의 표정'!");
  var keyBox = s11.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  keyBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s11, "😮", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s11, "우와~! 하는 가족의 반응이\n포인트!", W/2 - 170, 220, 340, 20, COLORS.DARK, true, true);

  // [Slide 12] 두 개의 폰 개념
  var s12 = createHeaderSlide(deck, "두 개의 마법 눈이 필요해요!");
  createCard(s12, 80, 140, 250, 180, "📱 폰 A", "게임 실행용\n(가족에게 전달)", COLORS.LIGHT_BG);
  createCard(s12, 390, 140, 250, 180, "📱 폰 B", "촬영용 카메라\n(반응 촬영)", COLORS.CREAM_BG);

  // [Slide 13] 깜짝 파티 작전
  var s13 = createHeaderSlide(deck, "작전명: 깜짝 파티!");
  var missionBg = s13.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 260);
  missionBg.getFill().setSolidFill(COLORS.DARK);
  addText(s13, "🎉 가족 몰래 펼치는\n비밀 작전", W/2 - 150, 170, 300, 24, COLORS.WHITE, true, true);
  addText(s13, "첩보 영화처럼 몰래몰래...", W/2 - 130, 280, 260, 16, COLORS.HAEDAL_YELLOW, false, true);

  // [Slide 14] 작전 1단계
  var s14 = createHeaderSlide(deck, "1단계: 게임 폰 전달!");
  var step1Box = s14.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  step1Box.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s14, "\"할머니/엄마,\n이거 한번 흔들어보세요~\"", 80, 180, 290, 18, COLORS.DARK, true, true);
  addText(s14, "하고 건네기!", 80, 280, 290, 16, COLORS.GRAY, false, true);
  createImagePlaceholder(s14, 420, 120, 260, 260, "폰 전달하는 모습\n(실사 이미지)");

  // [Slide 15] 작전 2단계
  var s15 = createHeaderSlide(deck, "2단계: 카메라 준비!");
  var step2Box = s15.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 50, 120, 350, 260);
  step2Box.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s15, "다른 폰으로\n가족 얼굴을 몰래 촬영 준비", 80, 200, 290, 18, COLORS.DARK, true, true);
  createImagePlaceholder(s15, 420, 120, 260, 260, "촬영 준비 자세\n(실사 이미지)");

  // [Slide 16] 작전 3단계
  var s16 = createHeaderSlide(deck, "3단계: 반응 포착!");
  addText(s16, "\"어머나! 이게 뭐니?\" 😲 놀라는 순간을 찍어요!", 50, 100, 620, 18, COLORS.DARK, true);
  createImagePlaceholder(s16, 80, 150, 280, 200, "놀라는 가족 표정\n(실사)");
  createImagePlaceholder(s16, 380, 150, 280, 200, "촬영 화면\n(가족 표정)");

  // [Slide 17] 촬영 팁
  var s17 = createHeaderSlide(deck, "포인트!");
  createCard(s17, 80, 140, 250, 180, "❌ 게임 화면만", "재미없어요", COLORS.LIGHT_BG);
  createCard(s17, 390, 140, 250, 180, "⭕ 가족 표정!", "행복한 순간이\n1등 비결!", COLORS.HAEDAL_YELLOW);

  // [Slide 18] 촬영 완료
  var s18 = createHeaderSlide(deck, "명장면 촬영 완료!");
  var cutBox = s18.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  cutBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s18, "🎬 컷!", W/2 - 60, 160, 120, 36, COLORS.DARK, true, true);
  addText(s18, "아주 좋아요!", W/2 - 80, 240, 160, 24, COLORS.DARK, true, true);

  // =====================================================
  // PART 4. 업로드 & 해시태그 (STEP 3) : 6장
  // =====================================================

  // [Slide 19] 업로드 안내
  var s19 = createHeaderSlide(deck, "이제 세상에 보내요!");
  var uploadBox = s19.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  uploadBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s19, "📮", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s19, "영상을 '전국 코딩 자랑 대회'에\n제출!", W/2 - 170, 220, 340, 20, COLORS.DARK, true, true);

  // [Slide 20] 해시태그 개념
  var s20 = createHeaderSlide(deck, "마법의 암호가 필요해요!");
  var hashBox = s20.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  hashBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s20, "#️⃣", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s20, "우물 정(井)자 모양\n= 해시태그", W/2 - 120, 220, 240, 20, COLORS.DARK, true, true);

  // [Slide 21] 필수 해시태그
  var s21 = createHeaderSlide(deck, "필수 해시태그!");
  var tagBox = s21.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 260);
  tagBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s21, "#우리아이첫코딩챌린지", W/2 - 180, 150, 360, 20, COLORS.DARK, true, true);
  addText(s21, "#옥토스튜디오", W/2 - 180, 200, 360, 20, COLORS.DARK, true, true);
  addText(s21, "#해달에듀", W/2 - 180, 250, 360, 20, COLORS.DARK, true, true);
  addText(s21, "✨ 이 암호를 적어야 찾아갈 수 있어요!", W/2 - 200, 310, 400, 16, COLORS.GRAY, false, true);

  // [Slide 22] 부모님 도움 요청
  var s22 = createHeaderSlide(deck, "부모님께 부탁해요!");
  var helpBox = s22.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 130, 520, 220);
  helpBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s22, "\"엄마, 아빠!\n제 작품 세상에 자랑하게\n암호 좀 넣어주세요!\"", W/2 - 180, 180, 360, 20, COLORS.DARK, true, true);

  // [Slide 23] 업로드 플랫폼
  var s23 = createHeaderSlide(deck, "업로드 플랫폼");
  createCard(s23, 130, 150, 220, 180, "📸", "인스타그램", COLORS.LIGHT_BG);
  createCard(s23, 390, 150, 220, 180, "▶️", "유튜브 쇼츠", COLORS.LIGHT_BG);

  // [Slide 24] 제출 완료
  var s24 = createHeaderSlide(deck, "제출 완료!");
  var doneBox = s24.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  doneBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s24, "🎉", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s24, "선생님이 '좋아요'\n누르러 갈게요!", W/2 - 150, 220, 300, 20, COLORS.DARK, true, true);
  addText(s24, "👍", W/2 + 120, 180, 40, 32, COLORS.DARK);

  // =====================================================
  // PART 5. 마무리 & 축하 (Closing) : 8장
  // =====================================================

  // [Slide 25] 축하
  var s25 = createHeaderSlide(deck, "짝짝짝! 3일간의 코딩 여행 완료!");
  var celebBox = s25.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 220, 130, 440, 200);
  celebBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s25, "🎊", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s25, "박수! 👏👏👏", W/2 - 80, 230, 160, 24, COLORS.DARK, true, true);

  // [Slide 26] 배운 것 정리
  var s26 = createHeaderSlide(deck, "우리가 배운 것!");
  var summaryBox = s26.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 80, 120, 560, 260);
  summaryBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s26, "1차시: 내 얼굴 둥둥 춤추기", 120, 150, 480, 18, COLORS.DARK, true);
  addText(s26, "2차시: 소리 + 흔들기 마법", 120, 210, 480, 18, COLORS.DARK, true);
  addText(s26, "3차시: 세상에 자랑하기", 120, 270, 480, 18, COLORS.DARK, true);
  addText(s26, "🎓 코딩 마법사 수료!", 120, 330, 480, 18, COLORS.HAEDAL_YELLOW, true);

  // [Slide 27] 성장 메시지
  var s27 = createHeaderSlide(deck, "여러분은 이제 '코딩 마법사'!");
  var wizardBox = s27.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  wizardBox.getFill().setSolidFill(COLORS.CREAM_BG);
  addText(s27, "🧙", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s27, "처음엔 설치도 낯설었는데...\n이제는 진짜 마법사!", W/2 - 160, 220, 320, 18, COLORS.DARK, true, true);

  // [Slide 28] 행복 메시지
  var s28 = createHeaderSlide(deck, "단순한 게임이 아니에요!");
  var heartBox = s28.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  heartBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s28, "💝", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s28, "가족들에게 웃음을 선물하는\n행복 상자!", W/2 - 170, 220, 340, 20, COLORS.DARK, true, true);

  // [Slide 29] 촬영 체크리스트
  var s29 = createHeaderSlide(deck, "📝 촬영 체크리스트");
  var checklistBox = s29.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, 100, 120, 520, 260);
  checklistBox.getFill().setSolidFill(COLORS.LIGHT_BG);
  addText(s29, "☐ 폰 A: 게임 실행용", 140, 160, 440, 18, COLORS.DARK, true);
  addText(s29, "☐ 폰 B: 촬영용", 140, 210, 440, 18, COLORS.DARK, true);
  addText(s29, "☐ 가족 반응 포착!", 140, 260, 440, 18, COLORS.DARK, true);
  addText(s29, "☐ 해시태그 입력!", 140, 310, 440, 18, COLORS.DARK, true);

  // [Slide 30] 마감 안내
  var s30 = createHeaderSlide(deck, "📅 마감 안내");
  var deadlineBox = s30.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  deadlineBox.getFill().setSolidFill(COLORS.RED_HIGHLIGHT);
  addText(s30, "챌린지 업로드 마감", W/2 - 150, 170, 300, 20, COLORS.WHITE, true, true);
  addText(s30, "2월 20일!", W/2 - 100, 220, 200, 36, COLORS.WHITE, true, true);

  // [Slide 31] 격려 메시지
  var s31 = createHeaderSlide(deck, "우리 꼬마 감독님들, 정말 고생 많았어요!");
  var trophyBox = s31.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, W/2 - 200, 130, 400, 200);
  trophyBox.getFill().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s31, "🏆", W/2 - 30, 150, 60, 48, COLORS.DARK, false, true);
  addText(s31, "👏 최고예요!", W/2 - 80, 230, 160, 24, COLORS.DARK, true, true);

  // [Slide 32] 엔딩
  var s32 = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  s32.getBackground().setSolidFill(COLORS.HAEDAL_YELLOW);
  addText(s32, "다음에 또 더 재미있는\n모험으로 만나요!", W/2 - 200, H/2 - 60, 400, 28, COLORS.DARK, true, true);
  addText(s32, "안녕~! 👋", W/2 - 80, H/2 + 40, 160, 36, COLORS.WHITE, true, true);

  Logger.log("슬라이드 생성 완료! (총 32장) URL: " + deck.getUrl());
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
  addText(slide, title, x + 20, y + 15, w - 40, 24, COLORS.DARK, true, true);
  addText(slide, content, x + 20, y + 60, w - 40, 14, COLORS.GRAY, false, true);
}

function createImagePlaceholder(slide, x, y, w, h, altText) {
  var placeholder = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  placeholder.getFill().setSolidFill('#E0E0E0');
  placeholder.getBorder().setDashStyle(SlidesApp.DashStyle.DASH).setWeight(2).getLineFill().setSolidFill(COLORS.GRAY);
  addText(slide, "📷 " + altText, x + 10, y + h/2 - 30, w - 20, 11, COLORS.GRAY, false, true);
}
