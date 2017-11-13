var header = $('#header');

var nav = header.find('nav');
var totalHeaderHeight = header.height() - nav.height();

window.addEventListener("scroll", function(event){
	var position = $(document).scrollTop();

	console.log(position);
	console.log(totalHeaderHeight);

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
