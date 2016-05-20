
$(document).ready(function () {
	
	$('button').click(function (event) {
		$(this)
		
		if ($(this).hasClass('dimensions-button')) {
			var width = $('.play-area').outerWidth(true);
			var height = $('.play-area').outerHeight(true);
			$('.play-area').html('dimensions:' + width +', '+ height);
		}
		if ($(this).hasClass('html-button')) {
			console.log('play area html', $('.play-area').html());
		}
		if ($(this).hasClass('css-button')) {
			var newName = $(this).data('newName');
			$('.play-area').removeClass('groovy boring').addClass(newName);
		}
		if ($(this).is('.link-button')) {
			var newUrl = $(this).data('url');
			console.log($('a').attr('target'));
			$('a').attr('href', newUrl);
		}
		
	});
	
});