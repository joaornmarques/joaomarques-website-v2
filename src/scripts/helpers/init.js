/*-----------------------------
-----------Page load-----------
-----------------------------*/
$(function() {
	$('.body-js').hide();
	$(window).on('load', function(){
		$('.body-js').show();
		$('.o-container').addClass('o-container--intro-animate');
		$('.o-nav').addClass('o-nav--intro-animate');
		if($('.landing-js').is(':visible')){
			setTimeout(function() {
				$('.c-cube-container').addClass('c-cube-container--intro-animate');
			}, 1500);
		}
	});
});



/*-----------------------------
-------------Sound-------------
-----------------------------*/
var hoverSound = document.createElement('audio');
var clickSound = document.createElement('audio');

$(document).ready(function() {
	hoverSound.setAttribute('src', '/assets/sounds/hover.wav');
	clickSound.setAttribute('src', '/assets/sounds/click.wav');
	hoverSound.volume = 0.3;
	clickSound.volume = 0.2;

	$('.hover-sound-js').hover(function(){
		hoverSound.play();
	});

	$('a, .click-sound-js').click(function(){
		hoverSound.pause();
		clickSound.play();
	});

});



/*-----------------------------
-------Click animation---------
-----------------------------*/

$(function() {
	$('a').click(function(evt) {

		if (!$(this).hasClass("external-click-js")) {

			evt.preventDefault();
			var link = $(this).attr("href");

			$('.o-container').addClass('o-container--out-animate');
			$('.o-nav').removeClass('o-nav--intro-animate');
			$('.c-cube-container').removeClass('c-cube-container--intro-animate');
			hoverSound.volume = 0;

			setTimeout(function() {
				window.location.href = link;
			}, 1200);

		}

		if ($(this).hasClass("game-click-js")) {

			evt.preventDefault();
			var vidLinks=[
			"https://www.youtube.com/embed/9Q0NCY-zhGg?autoplay=1",
			"https://www.youtube.com/embed/Z6hjG6MCcZ8?autoplay=1",
			"https://www.youtube.com/embed/gQeOYszcPh0?autoplay=1",
			"https://www.youtube.com/embed/wE8uiAZFOvU?autoplay=1",
			"https://www.youtube.com/embed/3Req5SQ6Rn4?autoplay=1"]

			var randLink = vidLinks[Math.floor(Math.random() * vidLinks.length)];
			window.open(randLink);

		}

	});
});
