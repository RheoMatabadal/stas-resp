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
		$(".moreBox").slice(0, 4).show();
		if ($(".moreBox:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 8).slideDown();
			if ($(".moreBox:hidden").length == 0) {
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
//QUOTE CAROUSEL
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 6000,
  });
    });

//portfolio filter
$(document).ready(function(){
    $(".button").click(function(){
      var value = $(this).attr("data-filter");
      if (value == "all") {
        $(".filter").show("1000");

      }
      else
      {
        $(".filter").not("."+value).hide("30000");
        $(".filter").filter("."+value).show("50000");

      }
      //add active class
      $("ul .button").click(function(){
      	$(this).addClass('active').siblings().removeClass('active');
      });
      
    });
  });