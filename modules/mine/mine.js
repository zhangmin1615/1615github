define(["text!./mine.html", "$css!css/mine.css"], function(minePage) {
	return {
		init: function() {
			$(".mineBox").html(minePage).show().siblings("div").hide();
		}
	}
});

$(function(){
	$(function() {
		var h1 = $(window).height(),
			h2 = h1 - 180;
		$(".main").css({
			'height': h2 + 'px'
		});
	});
});
