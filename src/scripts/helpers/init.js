/*-----------------------------
---------Landing load----------
-----------------------------*/
$(function() {
	$('.body-js').hide();
	$(window).on('load', function(){
		$('.body-js').show();
		$('.o-container').addClass('o-container--intro-animate');
		$('.o-nav').addClass('o-nav--intro-animate');
	});
});

/*-----------------------------
-------------Sound-------------
-----------------------------*/
$(document).ready(function() {

	var hoverSound = document.createElement('audio');
	var clickSound = document.createElement('audio');
  hoverSound.setAttribute('src', 'assets/sounds/hover.wav');
  clickSound.setAttribute('src', 'assets/sounds/click.wav');
  hoverSound.volume = 0.3;
  clickSound.volume = 0.2;

  $('.hover-sound-js').hover(function(){
  	hoverSound.play();
  });

  $('.click-sound-js').click(function(){
  	hoverSound.pause();
  	clickSound.play();
  });

});
