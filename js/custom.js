//portflio slider
$(document).ready(function(){
  $('.portbxslider').bxSlider({
    mode: 'vertical',
    controls:true,
    pager:false,
    responsive:true,
    adaptiveHeight:false,
    nextText:'NEXT' +'<div class="tekentje-klein-next bx-prev"><img src="img/down-arrow.png">  </div>',
    prevText:'<div class="tekentje-klein-previous bx-prev"><img src="img/down-arrow.png">  </div>'+'PREVIOUS'

  });
});
//bx slider
$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode : 'horizontal',
		auto: false,
		controls: true,
		pager:false,
		responsive:true,
		slideWidth: 0,
		shrinkItems:true,
		nextText:'NEXT'+'<div class="tekentje-klein-next bx-prev"><img src="img/down-arrow.png">  </div>',
    prevText:'<div class="tekentje-klein-previous bx-prev"><img src="img/down-arrow.png">  </div>'+'PREVIOUS'

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
//donut chart graphic pagina

//canvas design
$(document).ready(function(){

	var ctx = $("#canvasDesign").get(0).getContext("2d");
	
	var data = [
	{
		value: 75,
		color: "#eeeeee",
		highlight: "grey",
		label: "design"	
	},
	{
		value: 25,
		color: "white"
		
		
	},


	];
	var chart = new Chart(ctx).Doughnut(data);
	
});
//canvas DTP
$(document).ready(function(){
	var ctx = $("#canvasDtp").get(0).getContext("2d");
	var data = [
	{
		value: 84,
		color: "#eeeeee",
		highlight: "grey",
		label: "dtp"	
	},
	{
		value: 16,
		color: "white"
		
		
	}
	];
	var chart = new Chart(ctx).Doughnut(data);
});

//canvas adobe CC
$(document).ready(function(){
	var ctx = $("#canvasAdobeCC").get(0).getContext("2d");
	var data = [
	{
		value: 97,
		color: "#eeeeee",
		highlight: "grey",
		label: "Adobe CC"	
	},
	{
		value: 3,
		color: "white"
		
		
	}
	];
	var chart = new Chart(ctx).Doughnut(data);
});

//canvas logistiek
$(document).ready(function(){
	var ctx = $("#canvasLogistiek").get(0).getContext("2d");
	var data = [
	{
		value: 9,
		color: "#eeeeee",
		highlight: "grey",
		label: "logistiek"
	},
	{
		value:91,
		color:"white"
	}
	];
	var chart = new Chart(ctx).Doughnut(data);
});

