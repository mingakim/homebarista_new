// 헤더탑,헤더 스크롤
$(function () {
  var headerTop = $(".header-top");
  var header = $(".header");
  var logo = $(".header .logo");
  var scrollHeader = $(".scroll-header");
  var minHeight = $(".headerWrap .min-hight");
  var headerTopHeight = headerTop.outerHeight(); // headertop의 높이값

  // 스크롤 이벤트
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치

    if (scrollTop > headerTopHeight) {
      // 스크롤이 header의 높이를 넘으면
      headerTop.addClass("hidden");
      header.addClass("hidden");
      logo.addClass("hidden");
      scrollHeader.addClass("fixed");
      minHeight.addClass("visible");
    } else {
      headerTop.removeClass("hidden");
      header.removeClass("hidden");
      logo.removeClass("hidden");
      scrollHeader.removeClass("fixed");
      minHeight.removeClass("visible");
    }
  });
});

// 헤더-검색버튼 클릭
$(".icons .search-box > button").click(function () {
  $(".icons .search-box").addClass("active");
  $(".icons .search-box > input[type=text]").addClass("active");
});


// // .main .txt-box aos
// setTimeout(function () {
//   AOS.init();
// }, 500);


// visual-swiper
var swiper = new Swiper(".visual-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 80,
  navigation: {
    nextEl: ".visual .swiper-button-next",
    prevEl: ".visual .swiper-button-prev"
  },
});


// video
gsap.registerPlugin(ScrollTrigger);

// iframe 크기 변화 애니메이션
gsap.to(".video-box", {
    width: "100%",  
    scrollTrigger: {
        trigger: ".video-box", // 스크롤을 추적할 요소
        start: "top 85%",  // 시작 위치: 요소가 화면에 들어올 때
        end: "bottom bottom",    // 끝 위치: 요소가 화면을 벗어날 때
        scrub: true,          // 스크롤에 비례하여 애니메이션 진행
        markers: false,       // 디버깅용 마커 표시 (필요시 true로 설정)
        ease: "none"          // 스크롤에 맞춰 자연스럽게 애니메이션
    }
});




// monthly-swiper
// let $swiperPrev = document.querySelector('.monthly-swiper .swiper-button-prev');
var swiper = new Swiper(".monthly-swiper", {
  slidesPerView: 3,
  // spaceBetween: 135,
  centeredSlides: true,
  loop: true,
  // watchOverflow : true,
  navigation: {
    nextEl: ".monthly-swiper .swiper-button-next",
    prevEl: ".monthly-swiper .swiper-button-prev",
  },
  // on: {
  //   activeIndexChange : function() {
  //     if (this.realIndex == 0) {
  //       $swiperPrev.classList.add('swiper-button-disabled');
  //       startNum = false;
  //     } else {
  //       $swiperPrev.classList.remove('swiper-button-disabled');
  //     }
  //   }
  // }
});


// best-swiper슬라이더
var mainSwiper = new Swiper(".best-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 94,
  navigation: {
    nextEl: ".best .swiper-button-next",
    prevEl: ".best .swiper-button-prev",
  },
  breakpoints: {  
    765: {
      slidesPerView: 3,
    }
  },  
});


// review 스와이퍼
var swiper = new Swiper(".review-swiper", {
  slidesPerView: 4,
  spaceBetween: 66,
  loop: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
});