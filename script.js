// 헤더탑,헤더 스크롤
$(function(){
    var headerTop = $('.header-top');
    var header = $('.header');
    var logo = $('.header .logo');
    var scrollHeader = $('.scroll-header');
    var minHeight = $('.headerWrap .min-hight');
    var headerTopHeight = headerTop.outerHeight();  // header의 높이값

    // 스크롤 이벤트
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();  // 현재 스크롤 위치

        if (scrollTop > headerTopHeight) {  // 스크롤이 header의 높이를 넘으면
            headerTop.addClass('hidden');  // header-top 숨기기
            header.addClass('hidden');  // header를 고정
            logo.addClass('hidden');
            scrollHeader.addClass('fixed');
            minHeight.addClass('visible');
        } else {
            headerTop.removeClass('hidden');  // header-top 보이기
            header.removeClass('hidden');  // header 고정 해제
            logo.removeClass('hidden');
            scrollHeader.removeClass('fixed');
            minHeight.removeClass('visible');
        }
    });
});



// 헤더-검색버튼 클릭
$('.icons .search-box > button').click(function(){
    $('.icons .search-box').addClass('active');
    $('.icons .search-box > input[type=text]').addClass('active');
});



AOS.init();
