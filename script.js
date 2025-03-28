// 헤더탑,헤더 스크롤
$(function () {
  var headerTop = $(".header-top");
  var header = $(".header");
  var logo = $(".header .logo");
  var scrollHeader = $("#scroll-header");
  var minHeight = $(".headerWrap .min-height");
  var headerTopHeight = headerTop.outerHeight(); // headertop의 높이값

  
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


// pc-스크롤헤더 sub-menu 햄버거
$("#scroll-header .sub-menu").click(function () {
  $("#scroll-header .nav").toggleClass("active");
  $("#scroll-header .sub-menu .img1").toggle(); 
  $("#scroll-header .sub-menu .img2").toggle();
});


// mb-sidebar 햄버거
$(".mb-header .sub-menu").click(function () {
  $(".mb-header .sub-menu .img1").toggle(); 
  $(".mb-header .sub-menu .img2").toggle();
  $(".mb-header .mb-sidebar").toggleClass("active");
});



// visual-swiper
var swiper = new Swiper(".visual-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 80,
  // navigation: {
  //   nextEl: ".visual .swiper-button-next",
  //   prevEl: ".visual .swiper-button-prev"
  // },
  pagination: {
    el: ".visual .swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});





// video  크기효과
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    gsap.to(".video-box", {
        width: "100%",  
        scrollTrigger: {
            trigger: ".video-box", // 스크롤을 추적할 요소
            start: "top 85%",  // 시작 위치: 요소가 화면에 들어올 때
            end: "bottom 100%",    // 끝 위치: video-box의 하단이 화면 bottom에 도달할때
            scrub: true,          // 스크롤에 비례하여 애니메이션 진행
            markers: false,       // 디버깅용 마커 표시 (필요시 true로 설정)
            ease: "none"          // 스크롤에 맞춰 자연스럽게 애니메이션
        }
    });
  }
});





// txt aos 효과
AOS.init();



// monthly-swiper scale모드
var swiper = new Swiper(".monthly-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".monthly-main .swiper-button-next",
    prevEl: ".monthly-main .swiper-button-prev",
  },
  breakpoints: {
    1024: {   
      spaceBetween: 30, 
    },    
  },
  on: {
    init: function () {
      slideClone(this); // Swiper 초기화 후 슬라이드 복제
    },

    slideChange: function () {
      var swiperWrapper = this.el.querySelector('.swiper-wrapper');
      var slides = swiperWrapper.querySelectorAll('.swiper-slide');
      
      // 슬라이드가 끝까지 가면 복제본을 추가
      if (this.isEnd) {
        slideClone(this);
      }
    }
  }
});

function slideClone(tg){
  var swiperWrapper = tg.el.querySelector('.monthly-main .swiper-wrapper');
  var slides = swiperWrapper.querySelectorAll('.monthly-main .swiper-slide');

  // 복제하여 붙여넣기
  for (var i = 0; i < slides.length; i++) {
    var clone = slides[i].cloneNode(true);
    swiperWrapper.appendChild(clone);
  }
} // slideClone()





// mb-monthly-swiper
var swiper = new Swiper(".mb-monthly-swiper", {
  centeredSlides: true,
  loop: true, 
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
    440: {
      slidesPerView: 'auto',   
      spaceBetween: 15, 
    },    
  },
});




// best-swiper슬라이더
var mainSwiper = new Swiper(".best-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".best .swiper-button-next",
    prevEl: ".best .swiper-button-prev",
  },  
  breakpoints: {
    440: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2.6,
      spaceBetween: 48,      
    },
    
    1120: {
      slidesPerView: 3,
      spaceBetween: 94,       
    },
  },  
});




// review 스와이퍼
var swiper = new Swiper(".review-swiper", {
  slidesPerView: 1.4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3600,
    disableOnInteraction: false,
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2.3,
    },

    1250: {
      slidesPerView: 4,
      spaceBetween: 66, 
    },
  },  
});



// mb-company 스와이퍼
var swiper = new Swiper(".mb-company-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 15,
  // grid: {
  //   row: 2,
  // },
});

