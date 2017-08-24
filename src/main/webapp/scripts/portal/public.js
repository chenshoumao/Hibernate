$(function(){
	$(".nav ul li").click(function(event) {
	$(this).siblings('li').removeClass('NavSelect').addClass('NavSelect2').css({"background-position": "0 -88px"});
	$(this).removeClass("NavSelect2").css({"background-position": "0px 0px"});
	$(this).addClass("NavSelect");
	});


	// 侧栏js
	$(".content-left>ul>li").click(function(event) {
		$(this).addClass('current').siblings('li').removeClass('current');
		$(this).siblings().children('li').removeClass('current');
		$(this).find('ul').slideDown(200);
		$(this).siblings('li').find('ul').slideUp(200);
		if($(this).hasClass('Parent')){
			$(this).addClass('ParentSelect').siblings('li').removeClass('ParentSelect');
		}
		else{
			$(this).siblings('li').removeClass('ParentSelect');
		}
	});

	$(".content-left>ul>li>ul>li").click(function(event) {
		$(this).addClass('current').siblings('li').removeClass('current');
	});


})