var body = document.getElementsByTagName('body')[0];
var header = document.getElementById('header');
var content = document.getElementById('content');
var mainMenu = document.getElementById('main-menu');

function styleMainMenu(event) {
	// If we are not at the top of the screen:
	//   ...apply the scroll style to nav
	//   ...else remove the scroll style from nav
	// If we are more that one full screen window from the top:
	//   ...apply the shadow stye to nav
	//   ...else remove it
	console.log(window.pageYOffset)
}

window.addEventListener("scroll", function(event){
	var position = window.pageYOffset;

	var nav = header.getElementsByTagName('nav')[0]
	var classes = nav.classList.value
	var hasClass = classes.indexOf('scroll') === -1

	if(position > 1) {
		if(hasClass){
			nav.classList.value = classes + ' scroll';
		}
	} else {
		nav.classList.value = classes.replace('scroll', '');
	}
});
