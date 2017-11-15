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

var modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close"
});

$(document).ready(function(){
	$('#content').on('click', '.card', function(event){
		var src = $(this).find('img').attr('src');

		modal.setContent(`<img src="${src}" />`);
		modal.open();
	})

	$('#content').on('mouseover', '.card', function(){
		$(this).parent().find('.caption').show()
	})

	$('#content').on('mouseout', '.card', function(){
		$(this).parent().find('.caption').hide()
	})
});
