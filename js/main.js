var body = document.getElementsByTagName('body')[0];
var header = document.getElementById('header');
var content = document.getElementById('content');
var mainMenu = document.getElementById('main-menu');

window.addEventListener("scroll", function(event){
	var position = window.pageYOffset;

	var nav = header.getElementsByTagName('nav')[0]
	var hasScrollClass = nav.classList.value.indexOf('scroll') === -1
	var hasShadowClass = nav.classList.value.indexOf('shadow') === -1

	var totalHeaderHeight = header.offsetHeight - nav.offsetHeight

	if(position > 1) {
		if(hasScrollClass){
			nav.classList.value = nav.classList.value + ' scroll';
		}
	} else {
		nav.classList.value = nav.classList.value.replace('scroll', '').trim();
	}

	if(position > totalHeaderHeight) {
		if(hasShadowClass){
			nav.classList.value = nav.classList.value + ' shadow';
		}
	} else {
		nav.classList.value = nav.classList.value.replace('shadow', '').trim();
	}
});
