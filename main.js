var $input = $('input');
var $place = $('.placeholder');

$(function() {
	$input.on('focus', function(){
		console.log('focused');
		$('.placeholder').animate({
			top: '-30%',
		});
		$('.input').animate({
			paddingTop: '2em',
			paddingBottom: '2em',
		});
	});
	$place.on('click', function(){
		$input.trigger('focus');
	});

	$input.on('focusout', function(){
		console.log('unfocused');
		$('.placeholder').animate({
			top: '50%',
		});
		$('.input').animate({
			padding: '1em',
		})
	});

});