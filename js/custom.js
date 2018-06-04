$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode : 'horizontal',
		auto: false,
		controls: true,
		pager:false,
		responsive:true,
		slideWidth: 0,
		shrinkItems:true
	});
 });

$( document ).ready(function () {
		$(".gallery").slice(0, 4).show();
		if ($(".gallery:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".gallery:hidden").slice(0, 8).slideDown();
			if ($(".gallery:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	});