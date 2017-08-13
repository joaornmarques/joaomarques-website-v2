//navbar aside
$('.o-projects').waypoint(function() {
	$('.o-nav__container--side').addClass('o-nav__container--side-animate');
});

$('.o-section--landing').waypoint(function() {
	$('.o-nav__container--side').removeClass('o-nav__container--side-animate');
});
