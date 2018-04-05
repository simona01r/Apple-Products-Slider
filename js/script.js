$(document).ready(function(){
	var totalWidth =0;
	var positions = new Array();

	$("#slides .slide").each(function(i){
		// Get slider widts
		positions[i] = totalWidth;
		totalWidth += $(this).width();

		// Chech widths
		if(!$(this).width()){
			alert("Please add a with to your images");
			return false;
		}
	});
	// Set width
	$("#slides").width(totalWidth);

	// Menu item click handler
	$(" #menu ul li a").click(function(e, keepScroll){
		$("li.product").removeClass("active").addClass("inactive");
		// Add active class to parent
		$(this).parent().addClass("active");
		var pos = $(this).parent().prevAll(".product").length;
		$("#slides").stop().animate({marginLeft:-positions[pos] + "px"}, 450);

		e.preventDefault();

		// Stop autoscroll
		if(!autoScroll) clearInterval(itvl);
	});

	// Make the first image active
	$("#menu ul li.product:first").addClass("active").siblings().addClass("inactive");

	// Auto Scroll
	var current= 1;
	function autoScroll(){
		if (current == -1) return false;
		$("#menu ul li a").eq(current%$("#menu ul li a").length).trigger("click",[true]);
		current++;
	}

	// Duration for auto scroll
	var duration = 5;
	var itvl = setInterval(function(){autoScroll()}, duration*1000);

});