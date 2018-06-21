
//portflio slider
$(document).ready(function(){
  $('.portbxslider').bxSlider({
    mode: 'horizontal',
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
        $(".filter").show("10");

      }
      else
      {
        $(".filter").not("."+value).hide("30");
        $(".filter").filter("."+value).show("50");

      }
      //add active class
      $("ul .button").click(function(){
      	$(this).addClass('active').siblings().removeClass('active');
      });
      
    });
  });
//load more button
$( document ).ready(function () {
		$(".moreBox").slice(0, 4).show(); 
		$("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 4).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
 $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
//donut chart graphic pagina

//canvas design
$(document).ready(function(){

	//var ctx = $("#canvasDesign").get(0).getContext("2d");
	
	/*var data = [
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


	];*/
	//var chart = new Chart(ctx).Doughnut(data);
	
});
//canvas DTP
$(document).ready(function(){
	/*var ctx = $("#canvasDtp").get(0).getContext("2d");
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
	var chart = new Chart(ctx).Doughnut(data);*/
});

//canvas adobe CC
$(document).ready(function(){
	/*var ctx = $("#canvasAdobeCC").get(0).getContext("2d");
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
	var chart = new Chart(ctx).Doughnut(data);*/
});

//canvas logistiek
$(document).ready(function(){
	/*var ctx = $("#canvasLogistiek").get(0).getContext("2d");
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
	var chart = new Chart(ctx).Doughnut(data);*/
});

//portfolio slider
  $('.carousel .vertical .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=1;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
 
//overlay menu toggler
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// slick slider artist page



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',

});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical:true,
  autoplay:true,
  arrows:false,
  infinite:true,
  initialSlide:1

});

var isContentBoxOpen = false;
 //artist page overlay
 $(".vl").mouseenter(function(){
 	if(!isContentBoxOpen){
 		$(this).css("opacity", "1.0");
 	}
    
});

$(".vl").mouseleave(function(){
    if(!isContentBoxOpen){
    	$(this).css("opacity", "0.2");
    }
    
});

function openArt() {
    document.getElementById("artist").style.width = "100%";
    document.getElementById("mySidenav").style.width = "100%";
    
    //document.getElementById("vl").style.opacity="1.0 !important";
    console.log("open art");
    $(".vl").css("opacity", "1.0");
    isContentBoxOpen = true;

}

function closeArt() {
	console.log("close art");
    document.getElementById("artist").style.width = "0%";
    document.getElementById("mySidenav").style.width = "100%";
    
    document.getElementById("vl").style.opacity="0.2";
    isContentBoxOpen = false;
}



//artist page open closer
// function toggler(){
// 		var x = 
// 		document.getElementById("mySidenav");
// 		if (x.style.width === "0"){
// 			x.style.width = "100%";
// 		}else if(x.style.width === "100%")
// 		{
// 			x.style.width = "0";
// 		}

// 	}
