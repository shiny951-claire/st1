# Kitchen Log — Design System

> 카페24 스킨 커스텀 디자인 시스템 문서  
> 기준 파일: `layout.css`, `main.css`, `sub_style.css`, `common.css`, `add_layout.css`, `add_theme01.css`, `sub_theme.css`

---

## 1. Colors

### 1.1 Brand

| Token | Hex | 사용처 |
|---|---|---|
| `brand-primary` | `#d0ac88` | 버튼, 배지, 장식선, 스크롤바, 포인트 색상 |
| `brand-dark` | `#ac5600` | 버튼 hover border |
| `brand-banner-bg` | `#d0ac88` | 최상단 배너 배경 |
| `brand-banner-text` | `#3e3329` | 최상단 배너 텍스트 |

### 1.2 Text

| Token | Hex | 사용처 |
|---|---|---|
| `text-base` | `#1a1a1a` | 본문, 내비게이션, 제목 |
| `text-secondary` | `#888888` | 서브 텍스트, 설명 문구 |
| `text-tertiary` | `#989898` | 쇼핑 정보, 상단 링크 |
| `text-dim` | `#666666` | 상태 링크, 약한 강조 |
| `text-light` | `#767676` | 지도 섹션 본문 |

### 1.3 Background & Surface

| Token | Hex | 사용처 |
|---|---|---|
| `bg-white` | `#ffffff` | 헤더, 카드, 드롭다운 |
| `bg-warm` | `#faf7f3` | 텍스트 배너 배경 |
| `bg-surface` | `#f9f9f9` | 지도 배너 배경 |
| `bg-scrollbar` | `#f6eee7` | 스크롤바 트랙 |

### 1.4 Border

| Token | Hex | 사용처 |
|---|---|---|
| `border-default` | `#e8e8e8` | 헤더 하단, 일반 구분선 |
| `border-input` | `#d9d9d9` | 입력 필드, 체크박스 |

### 1.5 Theme02 — Thistle Green (선택 테마)

| Token | Hex | 사용처 |
|---|---|---|
| `t2-primary` | `#9fa581` | 버튼, 배지, 포인트 색상 |
| `t2-dark` | `#4d5c04` | 버튼 hover border |
| `t2-scroll` | `#dbd9cc` | 스크롤바 트랙, 페이지네이션 |
| `t2-light-bg` | `#eeefe8` | 주문 요약 테이블 배경 |

---

## 2. Typography

### 2.1 Font Stack

```css
/* 기본 */
font-family: "Jost", "Noto Sans KR", Arial, sans-serif;

/* Theme02 */
font-family: "Lora", "Nanum Myeongjo", Arial, sans-serif;
```

### 2.2 Scale

| 역할 | 크기 | Weight | Line-height | 비고 |
|---|---|---|---|---|
| Hero / 지도 타이틀 | `40px` | `500` | `50px` | letter-spacing: -0.01em |
| 페이지 제목 (H1) | `32px` | `700` | `1` | sub_theme.css |
| 섹션 타이틀 | `30px` | `500` | `1` | 상단 장식선 포함 |
| 배너 / 카드 제목 | `26px` | `500` | `1.2` | |
| 텍스트 배너 제목 | `24px` | `500` | `1` | |
| 탭 / 카테고리 | `20px` | `300` | `1` | active: `500` |
| 내비게이션 링크 | `16px` | `400` | `78px` | 헤더 메뉴 |
| 본문 / CTA 링크 | `16px` | `300` | `1.5` | |
| 지도 본문 | `16px` | `400` | `26px` | |
| 서브 텍스트 | `14px` | `300` | `1` | color: `#888` |
| 유틸리티 / UI | `13px` | `300–400` | `1` | 상단 링크, 드롭다운 |
| 배지 카운트 | `12px` | — | `1` | 장바구니 뱃지 |

### 2.3 Fluid Typography (반응형)

1480px 이하에서 `calc()` 방식으로 유동적으로 변합니다.

```css
/* 공식 */
font-size: calc([min] + ([max] - [min]) * ((100vw - 370px) / (1480 - 370)));
```

| 요소 | 최솟값 (≤370px) | 최댓값 (≥1480px) |
|---|---|---|
| 섹션 타이틀 | `23px` | `30px` |
| 배너 카드 제목 | `19px` | `26px` |
| 배너 서브 | `14px` | `16px` |
| 지도 타이틀 | `23px` | `40px` |
| 지도 본문 | `13px` | `16px` |
| 비디오 타이틀 | `19px` | `30px` |
| 비디오 서브 | `13px` | `16px` |

---

## 3. Breakpoints

| 이름 | 값 | 설명 |
|---|---|---|
| `bp-max-content` | `1480px` | 최대 컨텐츠 너비 |
| `bp-desktop` | `1024px` | PC → Tablet 분기 |
| `bp-tablet` | `767px` | Tablet → Mobile 분기 |
| `bp-min` | `360px` | 최소 지원 너비 |

```css
/* PC 이상 */
@media all and (min-width: 1025px) { ... }

/* Tablet 이하 */
@media all and (max-width: 1024px) { ... }

/* Mobile 이하 */
@media all and (max-width: 767px) { ... }
```

---

## 4. Layout & Spacing

### 4.1 컨테이너 구조

```css
.inner {
  max-width: 1480px;
  width: 92%;        /* 좌우 거터 각 4% */
  margin: 0 auto;
}
```

- 풀 너비 섹션: `width: 100% !important; max-width: 100% !important`
- `.section_full` 클래스로 개별 섹션 풀 너비 전환 가능

### 4.2 섹션 간격

| 화면 크기 | margin-bottom |
|---|---|
| PC (`> 1024px`) | `120px` |
| Tablet (`≤ 1024px`) | `80px` |
| Mobile (`≤ 767px`) | `50px` |

### 4.3 주요 간격 토큰

```
8px · 10px · 12px · 15px · 20px · 25px · 30px · 35px · 45px · 50px · 56px · 60px · 120px
```

| 값 | 주요 사용처 |
|---|---|
| `10px` | 그리드 아이템 좌우 padding (gutter) |
| `20px` | 드롭다운 padding, 탭 간격 |
| `25px` | 배너 텍스트 내부 padding |
| `30px` | 카드 리스트 하단 margin |
| `45px` | 섹션 타이틀 상단 padding |
| `50px` | 헤더 상단 영역 높이 기준 |
| `56px` | 텍스트 배너 상하 padding |
| `120px` | 비디오 배너 상단 padding (PC) |

### 4.4 그리드 시스템

이미지&텍스트 갤러리 기준 컬럼 시스템입니다.

| 클래스 | 컬럼 수 | 너비 |
|---|---|---|
| `ez-column-1` | 1 | `flex-direction: column` |
| `ez-column-2` | 2 | `50%` each |
| `ez-column-3` | 3 | `33.33%` each |
| `ez-column-4` | 4 | `25%` each |
| `ez-column-5` | 5 | `20%` each |

> 모바일에서는 전체 `flex-direction: column`으로 전환, 슬라이드 모드(`ez-mobile-layout-slide`) 지원

### 4.5 헤더 구조

```
#header
└── .inner (max-width: 1480px, width: 92%)
    ├── .toparea          (height: 70px) — 쇼핑 정보 / 상태 링크
    └── .top_nav_box      (display: flex)
        ├── .top_logo     (height: 80px, max-width: 400px, max-height: 60px)
        ├── .top_category (height: 80px, nav 링크 16px/400)
        └── .top_mypage   (height: 80px, 아이콘 28px)
```

---

## 5. Components

### 5.1 버튼

```css
/* Primary */
[class^='btnSubmit'] {
  background: #d0ac88;
  color: #fff;
}

/* Secondary */
[class^='btnNormal'] {
  border: 1px solid #d0ac88;
  color: #d0ac88;
}

/* Hover */
[class^='btnNormal']:hover {
  border-color: #ac5600;
}
```

### 5.2 섹션 타이틀 장식선

```css
.main_title_txt01::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 2px;
  background: #d0ac88;
}
```

### 5.3 내비게이션 Hover 언더라인 애니메이션

```css
/* transform scaleX(0 → 1) 슬라이드 인 효과 */
transition: transform 0.3s cubic-bezier(.45,.46,.05,.96);  /* leave */
transition: transform 0.5s cubic-bezier(.45,.46,.05,.96);  /* enter */
```

### 5.4 드롭다운 / 서브메뉴

```css
box-shadow: 5px 3px 20px rgba(0, 0, 0, 0.05);
padding: 28px 35px;
background: #fff;
min-width: 120px;
```

### 5.5 장바구니 카운트 뱃지

```css
width: 18px;
height: 18px;
border-radius: 50%;
background: #000;   /* Theme02: #9fa581 */
color: #fff;
font-size: 12px;
```

### 5.6 Sale 뱃지

```css
.sale_box {
  background-color: #d0ac88 !important;  /* Theme02: #9fa581 */
}
```

### 5.7 체크박스

```css
input[type="checkbox"] {
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: url('/SkinImg/img/checkbox_off.svg') no-repeat center;
}
input[type="checkbox"]:checked {
  background: url('/SkinImg/img/checkbox_on.svg') no-repeat center;
}
```

### 5.8 Swiper 슬라이더

```css
/* Scrollbar */
.swiper-scrollbar-drag { background: #1a1a1a; }  /* highlight slide */
.swiper-scrollbar-drag { background: #d0ac88; }  /* product tab slide */

/* Pagination bullet */
.swiper-pagination-bullet        { background: #d0ac88; opacity: 0.5; width: 12px; height: 12px; }
.swiper-pagination-bullet-active { background: #d0ac88; opacity: 1; }

/* Navigation arrow */
.swiper-prev: url("/SkinImg/img/slide_ar_l.svg");
.swiper-next: url("/SkinImg/img/slide_ar_r.svg");
/* size: 50×50px, background-size: 70px */
```

### 5.9 CTA 링크 버튼 (지도 배너)

```css
display: inline-block;
font-size: 14px;
font-weight: 500;
padding: 13px 35px;
border: 1px solid #d0ac88;
background: #d0ac88;
color: #fff;
transition: all 0.3s;

/* hover */
background: #fff;
color: #d0ac88;
```

---

## 6. Layout Variants

`add_layout.css`로 헤더/푸터 레이아웃을 변경합니다. `#header`, `#footer`에 클래스 추가로 전환합니다.

| 클래스 | 헤더 구조 | 푸터 구조 |
|---|---|---|
| _(기본)_ | 로고 좌 / 메뉴 우 | 기본 좌우 배치 |
| `layout02` | 로고 풀 너비 / 메뉴 중앙 | 우측 정보 → 좌측 정보 순 |
| `layout03` | 메뉴 중앙정렬 / 아이콘 우하단 | 전체 column 중앙정렬 |
| `layout04` | 메뉴 → 로고 → 아이콘 역순 | — |
| `layout05` | 로고 풀 너비 / 햄버거 fixed 좌측 | 우측 정보 → 좌측 정보 순 |

---

## 7. CSS Variables (common.css)

```css
:root {
  --font-color-base:      #000;
  --font-color-heading:   #000;
  --font-color-primary:   #000;
  --font-color-secondary: #ef441f;  /* 강조 보조색 */
  --font-color-warn:      #ec2a1d;  /* 경고 */
  --font-color-success:   #0985df;  /* 성공 */
}
```

---

## 8. Responsive 규칙 요약

| 요소 | PC | Tablet (≤1024px) | Mobile (≤767px) |
|---|---|---|---|
| 섹션 margin-bottom | `120px` | `80px` | `50px` |
| 이미지 갤러리 | 다단 그리드 | 세로 스택 or 슬라이드 | 세로 스택 |
| 탭 상품 진열 | 가로 25% 사이드바 | 가로 스크롤 탭 | 작은 폰트 (14px) |
| 슬라이드 화살표 | 표시 | 숨김 | 숨김 |
| 비디오 padding-top | `120px` | `60px` | `50px` |
| 지도 배너 | 가로 배치 | 세로 스택 | 세로 스택 |
| `.display_pc_only` | `block` | `none` | `none` |
| `.display_mobile_only` | `none` | `none` | `block` |
| `.display_tablet_only` | `none` | `block` | `none` |
