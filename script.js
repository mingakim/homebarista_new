// 헤더탑,헤더 스크롤
$(function(){
    var headerTop = $('.header-top');
    var header = $('.header');
    var logo = $('.header .logo');
    var headerTopHeight = headerTop.outerHeight();  // header-top의 높이값

    // 스크롤 이벤트
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();  // 현재 스크롤 위치

        if (scrollTop > headerTopHeight) {  // 스크롤이 header-top의 높이를 넘으면
            header.addClass('fixed');  // header를 고정
            headerTop.addClass('hidden');  // header-top 숨기기
            $('.header > .con, .header .scroll-header').addClass('visible');
            logo.addClass('hidden');
        } else {
            header.removeClass('fixed');  // header 고정 해제
            headerTop.removeClass('hidden');  // header-top 보이기
            $('.header > .con, .header .scroll-header').removeClass('visible');
            logo.removeClass('hidden');
        }
    });
});



// 헤더-검색버튼 클릭
$('.header .icons .search-box > button').click(function(){
    $('.header .icons .search-box').addClass('active');
    $('.header .icons .search-box > input[type=text]').addClass('active');
});