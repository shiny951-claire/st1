(function () {
  'use strict';

  // DOM이 준비된 후 Swiper 슬라이더를 초기화하고 이벤트 리스너를 설정하는 함수
  function init() {
    // Swiper 슬라이더 초기화
    // 슬라이더의 방향, 루프, 중앙 정렬, 슬라이드 수, 간격, 자동 재생, 페이지네이션, 네비게이션 설정
    const swiper1 = new Swiper('.swiper1', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // 현재 슬라이드를 swiper 안에 가운데로 배치
      // swiper 시작 시 1번 슬라이드 왼쪽에 마지막 슬라이드 표시
      centeredSlides: true,

      // swiper 안에 몇 개의 슬라이드를 보여줄지 결정 (3개를 표시)
      slidesPerView: 3,

      // 슬라이드 간 여백 설정
      spaceBetween: 20,

      // 자동 재생 설정 (3초 간격, 사용자 상호작용 후에도 계속 재생)
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // 페이지네이션 설정 (프로그레스 바 타입, 클릭 가능)
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },

      // 네비게이션 화살표 설정 (이전/다음 버튼, 사용자 정의 아이콘 사용)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
    });

    // 재생/정지 토글 기능
    // 버튼 클릭 시 슬라이더의 자동 재생을 토글하고, 버튼의 클래스를 변경하여 시각적 상태를 업데이트
    function toggleAutoplay() {
      const playToggleButton = document.querySelector('.swiper-button-play-toggle');
      if (swiper1.autoplay.running) {
        swiper1.autoplay.stop();
        playToggleButton.classList.remove('is-play');
        playToggleButton.classList.add('is-pause');
      } else {
        swiper1.autoplay.start();
        playToggleButton.classList.remove('is-pause');
        playToggleButton.classList.add('is-play');
      }
    }

    // 이벤트 리스너 추가
    // 재생/정지 토글 버튼에 클릭 이벤트 리스너를 추가하여 토글 기능 실행
    document.querySelector('.swiper-button-play-toggle').addEventListener('click', toggleAutoplay);
  }

  // DOM 준비 상태 확인 및 초기화 실행
  // Cafe24 환경에서 defer 없이도 DOM 준비 후 실행되도록 document.readyState를 확인
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();