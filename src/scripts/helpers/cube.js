/*-----------------------------
------Cube parallax rotate-----
-----------------------------*/


$('.c-cube-container').hide();

setTimeout(function(){
	$('.c-cube-container').show();
}, 400);


function cssParallax(cont, el, radiusVal){
  $(cont).mousemove(function(event) {
      cx = Math.ceil($(window).width() / 2.0);
      cy = Math.ceil($(window).height() / 2.0);
      dx = event.clientX - cx;
      dy = event.clientY - cy;
      tiltx = (dy / cy);
      tilty = - (dx / cx);
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);
      degreeX = tiltx * degree;
      degreeY = tilty * degree;

      $(el, cont).css('-webkit-transform','rotateX(' + degreeX + 'deg) rotateY(' + degreeY + 'deg)');
      $(el, cont).css('-moz-transform','rotateX(' + degreeX + 'deg) rotateY(' + degreeY + 'deg)');
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

//1word4gifs

$('.cube-bg-1w4g-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-1w4g');
});

$('.cube-bg-1w4g-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-1w4g').addClass('c-cube__face--bg-default');
});

//mixtape

$('.cube-bg-mix-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-mix');
});

$('.cube-bg-mix-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-mix').addClass('c-cube__face--bg-default');
});

//mauvais

$('.cube-bg-mauvais-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-mauvais');
});

$('.cube-bg-mauvais-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-mauvais').addClass('c-cube__face--bg-default');
});

//shift

$('.cube-bg-shift-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-shift');
});

$('.cube-bg-shift-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-shift').addClass('c-cube__face--bg-default');
});

//zelda

$('.cube-bg-zelda-js').hover(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-zelda');
});

$('.cube-bg-zelda-js').mouseleave(function(){
	$('.c-cube__face--inside').removeClass('c-cube__face--bg-zelda').addClass('c-cube__face--bg-default');
});


/*-----------------------------
------Cube show trigger--------
-----------------------------*/

$('.hover-show-cube-js').hover(function(){
	$('.c-cube-container').addClass('c-cube-container--intro-animate');
});

$('.hover-show-cube-js').mouseleave(function(){
	$('.c-cube-container').removeClass('c-cube-container--intro-animate');
});

