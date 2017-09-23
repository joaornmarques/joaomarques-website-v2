$('.c-cube-container').hide();

setTimeout(function(){
	$('.c-cube-container').show();
}, 400);


function cssParallax(cont, el, radiusVal){
  $(cont).mousemove(function(event) {

      cx = Math.ceil($(window).width() / 2.0);
      cy = Math.ceil($(window).height() / 2.0);
      dx = event.pageX - cx;
      dy = event.pageY - cy;

      tiltx = (dy / cy);
      tilty = - (dx / cx);
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);

      $(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
      $(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  });
}

$(document).ready(function() {
  cssParallax('.c-cube-parallax-detect-js', '.c-cube-parallax-base-js', 70);
  cssParallax('.c-cube-parallax-detect-js.first-js', '.c-cube-parallax-base-js', 70);
});



/*-----------------------------
------Cube image triggers------
-----------------------------*/

//Sonic

$('.cube-bg-sonic-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-sonic');
});

$('.cube-bg-sonic-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-sonic').addClass('c-cube__face--bg-default');
});

//Profile

$('.cube-bg-profile-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-profile');
});

$('.cube-bg-profile-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-profile').addClass('c-cube__face--bg-default');
});

//Whitesmith

$('.cube-bg-ws-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-ws');
});

$('.cube-bg-ws-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-ws').addClass('c-cube__face--bg-default');
});


/*-----------------------------
-------------Sound-------------
-----------------------------*/
$(document).ready(function() {

	var hoverSound = document.createElement('audio');
	var clickSound = document.createElement('audio');
  hoverSound.setAttribute('src', '../assets/sounds/hover.wav');
  clickSound.setAttribute('src', '../assets/sounds/click.flac');
  hoverSound.volume = 0.3;
  clickSound.volume = 0.2;

  $('.hover-sound-js').hover(function(){
  	hoverSound.play();
  });




});
