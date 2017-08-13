$('.c-image--landing').hide();
$('.c-title').hide();
$('.c-text').hide();

$('.title-main-js').show();

setTimeout(function(){
	$('.title-second-js').show();
}, 300);

setTimeout(function(){
	$('.text-landing-js').show();
	$('.c-image--landing').show();
}, 800);
