$(function(){
	var trigger = $('#mobile');
	var menu = $('.menu');
	
	$(trigger).on('click', function(e){
		e.preventDefault(); /* 트리거를 사용한 a태그의 기본기능(다른 문서나 사이트로 링크하는 기능)을 취소 */
		menu.slideToggle();
	});
			
	$(window).resize(function(){  // 780에서 더 커지면 메뉴가 나타나지 않는데 그 부분을 해결...
		var w = $(window).width();
		if (w > 779 && menu.is(':hidden')) { /* 화면 너비가 780이상이 되고 네비게이션이 화면에 감춰지면 */
			menu.removeAttr('style');  /* 모바일 네비게이션 스타일을 제거 */
		}
	});
});