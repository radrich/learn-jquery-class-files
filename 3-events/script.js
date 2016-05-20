
$(document).ready(function () {
	
	$('button').click(function (event) {
		event.preventDefault();
		$('.play-area').html('WOoooohp!');
	});
	
	$('form button').mouseenter(function (event) {
		event.preventDefault();
		$('.play-area').html('Yeeeehhhaaaa!');
	});
	
	$('button').first().mouseleave(function (event) {
		event.preventDefault();
		$('.play-area').html('Awwwww bbyyyyeee!');
	});
	
	$('button').dblclick(function (event) {
		event.preventDefault();
		$('.play-area').html('Buzzzzzz!');
	});
	
	$('body').keydown(function (event) {
		console.log(event);
		if (event.keyCode == 13) {
			$('.play-area').html('BOOOOOOOMMMMM!!!');
		}
	});
	
});