define(["text!./home.html", "$css!css/swiper.min.css", "$css!css/home.css", "js/jquery.lazyload.js","js/fly.js"], function(homePage) {
	return {
		init: function() {
			$(".homeBox").html(homePage).show().siblings("div").hide();
			//获取设备高度
			$(function() {
				var h1 = $(window).height(),
					homeH = h1 - 61,
					h2 = h1 - 121;
				$(".scrollHome").css({
					'height': h2 + 'px'
				});
				$(".homeBox").css({
					'height': homeH + 'px'
				});
			});
		},

		//轮播图
		swiper: function() {
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("lunboTmp", responseData);
					$("#imgLunbo").html(htmlStr);
					$("#receiveTmp").empty();
					//设置轮播事件
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 2000, //可选选项，自动滑动(时间:毫秒)
						loop: true, //循环
						pagination: '.swiper-pagination', //分页器
					});
				});
			});
		},

		tmpRequest: function() {
			//菜单模板
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("classifyTmp", responseData);
					$("#classify").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//sale图片请求(原味酸牛奶)
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("saleImgTmp", responseData);
					$("#saleImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//一小时到家
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("storeImgTmp", responseData);
					$("#storeImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});
			//优选水果
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("storeUlIdTmp", responseData);
					$("#storeUlId").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("storesnacksUlTmp", responseData);
					$("#storesnacksUl").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//优选水果
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("fruitImg", responseData);
					$("#fruit").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("fruitListTmp", responseData);
					$("#fruitList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//牛奶面包
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("milkImgTmp", responseData);
					$("#milkImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("milkListTmp", responseData);
					$("#milkList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//卤味熟食
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("cookedImgTmp", responseData);
					$("#cookedImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("cookedListTmp", responseData);
					$("#cookedList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//饮料酒水
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("drinkImgTmp", responseData);
					$("#drinkImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("drinksListTmp", responseData);
					$("#drinksList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//零食大趴
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("snacksImgTmp", responseData);
					$("#snacksImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("snacksListTmp", responseData);
					$("#snacksList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			//方便速食
			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("fastFoodImgTmp", responseData);
					$("#fastFoodImg").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			postRequest("GET", "json/home.json", true, {
				img: "aaa"
			}, function(responseData) {
				$("#receiveTmp").load("tmp/homeTmp.html", function() {
					var htmlStr = baidu.template("fastFoodListTmp", responseData);
					$("#fastFoodList").html(htmlStr);
					$("img.lazy").lazyload();
					$("#receiveTmp").empty();
				});
			});

			$(function() {
				var cartOffset = $("#cartOrder").offset();
				$(".listUl").on('click', '.addThing', function() {
					var imgSrc = $(this).parents("li").find(".lazy").attr("src");
					var flyerImg = $("<img src=" + imgSrc + " style='border-radius:50%'>");
					flyerImg.fly({
						start: {
							left: $(this).parents("li").find("a").offset().left, //开始位置（必填）#fly元素会被设置成position: fixed 
							top: $(this).parents("li").find("a").offset().top //开始位置（必填） 
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

		}

	}
});