define(["text!./market.html", "$css!css/market.css", "js/jquery.lazyload.js", "js/fly.js"], function(marketPage) {
	return {
		init: function() {
			$(".marketBox").html(marketPage).show().siblings("div").hide();

			/*模板请求*/
			postRequest("GET", "json/getCategoryProducts.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#marketTmpRecive").load("tmp/marketTmp.html", function() {
					var htmlStr = baidu.template("hotSellListTmp", responseData);
					$("#hotSellList").html(htmlStr);
					$("#marketTmpRecive").empty();
				});
			});

			postRequest("GET", "json/getCategoryProducts.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#marketTmpRecive").load("tmp/marketTmp.html", function() {
					var htmlStr = baidu.template("sortListTmp", responseData);
					$("#sortList").html(htmlStr);
					$("img.lazy").lazyload({
						threshold: 200,
						effect: "fadeIn",
						failure_limit: 10
					});
					$("#sortList").children("ul").hide();
					$("#sortList").children("ul[group='104749']").show();
					$("#marketTmpRecive").empty();

					//添加购物车事件
					
						var cartOffset = $("#cartOrder").offset();
						$("#sortList").on('click','.addCart', function() {
							var imgsrc = $(this).parents("li").find("img").attr("src");
							var flyImg = $("<img src=" + imgsrc + " style='border-radius:50%'>" );
							flyImg.fly({
								start: {
									left: $(this).parents("li").find("img").offset().left, //开始位置（必填）#fly元素会被设置成position: fixed 
									top: $(this).parents("li").find("img").offset().top //开始位置（必填） 
								},
								end: {
									left: cartOffset.left + 55, //结束位置（必填） 
									top: cartOffset.top + 55, //结束位置（必填） 
									width: 0, //结束时宽度 
									height: 0 //结束时高度 
								},
								onEnd: function() { //结束回调 
									$("#msg").show().animate({
										width: '250px'
									}, 200).fadeOut(1000); //提示信息 
									$(this).css("cursor", "default").removeClass('orange').unbind('click');
								}
							});
							
							$("#cartNum").html(parseInt($("#cartNum").html()) + 1);
							if(parseInt($("#cartNum").html()) > 0) {
								$("#cartNum").show();
							} else if(parseInt($("#cartNum").html()) == 0) {
								$("#cartNum").hide();
							}
						
						});
					

				});
			});

			/*点击事件*/
			$(function() {
				$("#hotSellList").on('click', 'li', function() {
					var index = $(this).attr("group");
					console.log(index);
					$("#sortList").children("ul").hide();
					$("#sortList").children("ul[group=" + index + "]").show();
				});
			});

			$(function() {
				$(function() {
					var h1 = $(window).height(),
						h2 = h1 - 121;
					$(".main_ma").css({
						"height": h2 + 'px'
					});

				});
			});

			/*//添加购物车事件
			$(function(){
				var cartOffset = $("#cartOrder").offset(),
					orderNum = $("#cartNum").html();
					if(parseInt(orderNum)>0){
						$("#cartNum").show();
					}else if(parseInt(orderNum)==0){
						$("#cartNum").hide();
					}
				$(".addCart").on('click',function(){
					var imgsrc = $(this).parent("li").children('img').attr("src");
					var flyImg = $("<img src="+imgsrc+">");	
					flyImg.fly({ 
			            start: { 
			                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed 
			                top: event.pageY //开始位置（必填） 
			            }, 
			            end: { 
			                left: offset.left+10, //结束位置（必填） 
			                top: offset.top+10, //结束位置（必填） 
			                width: 0, //结束时宽度 
			                height: 0 //结束时高度 
			            }, 
			            onEnd: function(){ //结束回调 
			                $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息 
			                $(this).css("cursor","default").removeClass('orange').unbind('click'); 
			            } 
		        	});
				});
				$("#cartNum").html(parseInt(orderNum)+1);
			});*/

		}

	}
});