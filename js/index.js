

$(function() {
	var h1 = $(window).height(),
		h2 = h1 - 61;
	$(".homeBox").css({
		'height': h2 + 'px'
	});
	$(".marketBox").css({
		'height': h2 + 'px'
	});
	$(".orderBox").css({
		'height': h2 + 'px'
	});
	$(".mineBox").css({
		'height': h2 + 'px'
	});
});