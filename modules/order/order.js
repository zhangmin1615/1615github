define(["text!./cart.html", "$css!css/cart.css"], function(homePage) {
	return {
		init: function() {
			$(".orderBox").html(homePage).show().siblings("div").hide();
		}
	}
});

$(function(){
	$(function() {
		var h1 = $(window).height(),
			h2 = h1 - 111;
		$('.scroll').css({
			'height': h2 + 'px'
		});
	});
});
