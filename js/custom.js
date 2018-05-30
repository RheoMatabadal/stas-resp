$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode : 'horizontal',
		auto: true,
		pause: 2000,
		controls: false,
		pager:false,
		responsive:true,

		nextText:'Next'
	});
// 	var windowWidth = $(window).width(),
// 		windowHeight = $(window).height(),
// 		adjHeight = windowHeight;
// 	$('.classy').css({
// 		'width': windowWidth ,
// 		'height': adjHeight 
// 	});
// });
// $(window).resize(function() {
// 	var windowWidth = $(window).width(),
// 		windowHeight = $(window).height(),
// 		adjHeight = windowHeight;
// 	$('.classy').css({
// 		'width': windowWidth,
// 		'height': adjHeight
// 	});
	// $('.classy video').css({
	// 	'min-width': windowWidth + 'px',
	// 	'min-height': adjHeight + 'px'
	// });
 });