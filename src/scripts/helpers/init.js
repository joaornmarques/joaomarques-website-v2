$('.c-image--landing').hide();
$('.c-title').hide();
$('.c-text').hide();

$('.title-main-js').show();

setTimeout(function(){
	$('.title-second-js').show();
}, 200);

setTimeout(function(){
	$('.text-landing-js').show();
	$('.c-image--landing').show();
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
  cssParallax('.parallax-container', '.parallax-base', 70);
  cssParallax('.parallax-container.first', '.parallax-base', 70);
});
