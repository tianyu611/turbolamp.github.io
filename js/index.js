


$(".navccc div a").click(function(){
	// $(this).siblings('li,a').removeClass("one");
	$(this).parent().siblings().find('a').removeClass('one');
	$(this).addClass("one");
	$(this).parent().siblings("div").find('span').removeClass("one1");
	$(this).parent().find('span').addClass("one1");
})
$(".infinc-one-1").click(function(){
	$('.infinc-one-2').css('background','#ffffff').css( 'border','1px solid #128F76')
	$('.infinc-one-2 .js1').css('color', '#18BC9C')
	$('.infinc-one-2 .sj1').css('display', 'none')
	$('.infinc-one-1').css('background','#18BC9C').css( 'border','none')
	$('.infinc-one-1').css('height','24%')
	$('.infinc-one-1 .js').css('color', '#FFFFFF')
	$('.infinc-one-1 .sj').css('display', 'Inline').css('display','block')
	$('.none').css('display','none')
	$('.block').css('display','block')
})
$(".infinc-one-2").click(function(){
	$('.infinc-one-1').css('background','#ffffff').css( 'border','1px solid #128F76')
	$('.infinc-one-1 .js').css('color', '#18BC9C')
		$('.infinc-one-1 .sj').css('display', 'none')
	$('.infinc-one-2').css('background','#18BC9C').css( 'border','none')
	$('.infinc-one-2 .js1').css('color', '#FFFFFF')
	$('.infinc-one-2 .sj1').css('display', 'Inline').css('display','block')
	$('.block').css('display','none')
	$('.none').css('display','block')
})