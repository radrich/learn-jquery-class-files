
$(document).ready(function () {
	
	$('button').click(function () {
		$('.box1 li:first').slideToggle(500);
	});
	
	$('.box1 li').click(function () {
		$(this).animate({
			'height': 100
		}, 1000, function () {
			$(this).appendTo('.box2');
		});
		//$(this).siblings().removeClass('open')
	});
	
});