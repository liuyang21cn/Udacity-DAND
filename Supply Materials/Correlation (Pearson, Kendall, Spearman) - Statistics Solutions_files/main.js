jQuery(document).ready(function($){
	
	//mobile navigation functionality
	var navicon0 = $(".mobile-menu-bar .menu-software-menu-container").html();
	$(".mobile-menu-bar .menu-software-menu-container").on('click', function(){
		$("#page, #mobile-nav-soft").addClass("opened");
		if ($("#page").hasClass("opened")) {
			$("#navicon").html('<span>&times;</span>');
		} else {
			$(".mobile-menu-bar .menu-software-menu-container").html(navicon0);
		}
	});
	$("#navicon").on('click', function(){
		$("#page, #mobile-nav-soft").removeClass("opened");
	});
	$(window).on('resize', function(){
		$("#page, #mobile-nav-soft").removeClass("opened");
		$("#navicon").html(navicon0);
	});
	
	//mobile navigation functionality
	var navicon1 = $(".mobile-menu-bar .menu-graduate-menu-container").html();
	$(".mobile-menu-bar .menu-graduate-menu-container").on('click', function(){
		$("#page, #mobile-nav-grad").addClass("opened");
		if ($("#page").hasClass("opened")) {
			$("#navicon").html('<span>&times;</span>');
		} else {
			$(".mobile-menu-bar .menu-graduate-menu-container").html(navicon1);
		}
	});
	$("#navicon").on('click', function(){
		$("#page, #mobile-nav-grad").removeClass("opened");
	});
	$(window).on('resize', function(){
		$("#page, #mobile-nav-grad").removeClass("opened");
		$("#navicon").html(navicon1);
	});
	
	
	//mobile navigation functionality
	var navicon2 = $(".mobile-menu-bar .menu-researchers-container").html();
	$(".mobile-menu-bar .menu-researchers-container").on('click', function(){
		$("#page, #mobile-nav-res").addClass("opened");
		if ($("#page").hasClass("opened")) {
			$("#navicon").html('<span>&times;</span>');
		} else {
			$(".mobile-menu-bar .menu-researchers-container").html(navicon2);
		}
	});
	$("#navicon").on('click', function(){
		$("#page, #mobile-nav-res").removeClass("opened");
	});
	$(window).on('resize', function(){
		$("#page, #mobile-nav-res").removeClass("opened");
		$("#navicon").html(navicon2);
	});
	
	//mobile navigation functionality
	var navicon3 = $(".mobile-menu-bar .menu-businesses-container").html();
	$(".mobile-menu-bar .menu-businesses-container").on('click', function(){
		$("#page, #mobile-nav-bus").addClass("opened");
		if ($("#page").hasClass("opened")) {
			$("#navicon").html('<span>&times;</span>');
		} else {
			$(".mobile-menu-bar .menu-businesses-container").html(navicon3);
		}
	});
	$("#navicon").on('click', function(){
		$("#page, #mobile-nav-bus").removeClass("opened");
	});
	$(window).on('resize', function(){
		$("#page, #mobile-nav-bus").removeClass("opened");
		$("#navicon").html(navicon3);
	});

  
  
  
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.sameheights');
});


$(window).resize(function(){
  equalheight('.sameheights');
});  
  
  
	
});