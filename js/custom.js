//bx slider
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
//load more button
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
//map overlay hide & show
$(document).ready(function(){
	$("#tog2").on('click', function (e){
		e.preventDefault();
		$("#over_map").hide('slow');
		$("#tog3").show('slow');
	});
});
$(document).ready(function(){
	$("#tog3").on('click',function(e){
		e.preventDefault();
		$("#over_map").show('slow');
		$("#tog3").hide('slow');
	});
});