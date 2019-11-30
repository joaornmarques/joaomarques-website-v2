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
  cssParallax('.c-cube-parallax-detect-js', '.c-cube-parallax-base-js', 120);
  cssParallax('.c-cube-parallax-detect-js.first-js', '.c-cube-parallax-base-js', 120);
});

/*-----------------------------
------Cube image triggers------
-----------------------------*/

var cubeFaces = [
	"sonic","profile","ws",
	"1w4g","mix","mauvais","shift","ruc",
	"contact","c-insta","c-fb","c-tw","c-be","c-gh","c-vimeo",
	"18"
];

function hoverCube(face){
	$('.cube-bg-' + face + '-js').hover(function(){
		$('.c-cube__face--inside').removeClass('c-cube__face--bg-default').addClass('c-cube__face--bg-' + face + ' ');
	});
}

function leaveCube(face){
	$('.cube-bg-' + face + '-js').mouseleave(function(){
		$('.c-cube__face--inside').removeClass('c-cube__face--bg-' + face + ' ').addClass('c-cube__face--bg-default');
	});
}

for (var i = 0; i < cubeFaces.length; i++) {
	hoverCube(cubeFaces[i]);
	leaveCube(cubeFaces[i]);
};


/*-----------------------------
------Cube show trigger--------
-----------------------------*/

$('.hover-show-cube-js').hover(function(){
	$('.c-cube-container').addClass('c-cube-container--intro-animate');
});

$('.hover-show-cube-js').mouseleave(function(){
	$('.c-cube-container').removeClass('c-cube-container--intro-animate');
});
