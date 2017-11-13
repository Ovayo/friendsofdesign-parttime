var header = $('#header');

window.addEventListener("scroll", function(event){
	var position = $(document).scrollTop();

	var nav = header.find('nav');
	var totalHeaderHeight = header.height() - nav.height();

	if(position > 1) {
		if(!nav.hasClass('scroll')){
			nav.removeClass('scroll');
		}
	} else {
		nav.addClass('scroll');
	}

	if(position > totalHeaderHeight) {
		if(!nav.hasClass('shadow')){
			nav.removeClass('shadow');
		}
	} else {
		nav.addClass('shadow');
	}
});
