/*-----------------------------
-----------Page load-----------
-----------------------------*/
$(function() {
	$('.body-js').hide();
	$(window).on('load', function(){
		$('.body-js').show();
		$('.o-container').addClass('o-container--intro-animate');
		$('.o-nav').addClass('o-nav--intro-animate');
		setTimeout(function() {
			$('.c-cube-container').addClass('c-cube-container--intro-animate');
		}, 500);
	});
});



/*-----------------------------
-------------Sound-------------
-----------------------------*/
var hoverSound = document.createElement('audio');
var clickSound = document.createElement('audio');

$(document).ready(function() {
  hoverSound.setAttribute('src', 'assets/sounds/hover.wav');
  clickSound.setAttribute('src', 'assets/sounds/click.wav');
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

			$('.o-container').removeClass('o-container--intro-animate');
			$('.o-nav').removeClass('o-nav--intro-animate');
			$('.c-cube-container').removeClass('c-cube-container--intro-animate');
			hoverSound.volume = 0;

	    setTimeout(function() {
	      window.location.href = link;
	    }, 1200);

	  }

	});
});






