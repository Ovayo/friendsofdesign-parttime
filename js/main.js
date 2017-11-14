var header = $('#header');

var nav = header.find('nav');
var totalHeaderHeight = header.height() - nav.height();

window.addEventListener("scroll", function(event){
	var position = $(document).scrollTop();

	if(position > 1) {
		nav.addClass('scroll');
	} else {
		nav.removeClass('scroll');
	}

	if(position > totalHeaderHeight) {
		nav.addClass('shadow');
	} else {
		nav.removeClass('shadow');
	}
});

$(document).ready(function(){
	$('#content').on('mouseover', '.card', function(){
		$(this).parent().find('.caption').show()
	})

	$('#content').on('mouseout', '.card', function(){
		$(this).parent().find('.caption').hide()
	})

	$('.card').each(function(){
		console.log( $(this).position() )
	})
});

function toogleMenu() {
	alert('Toggle')
}