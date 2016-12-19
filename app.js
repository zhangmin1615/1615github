require.config({
	paths:{
		//默认js文件省略掉文件类型,键值对定义文件缩写,路劲可写成数组，设置备选方案，jquery-1.11.2加载错误按顺序加载jquery-1.8.1
		"jquery":["js/jquery-1.8.1"],
		"backbone":"./js/backbone",
		"underscore":"./js/underscore",
		"text":"./js/text",
		"$css":"./js/css",
		"router":"./router"
		
	}
});


//使用backbone 路由
require(["jquery", "backbone", "router"], function($, Backbone, router){
	Backbone.history.start();
});

//加事件
//require(['jquery'],function($){
//	$("ul").on('click','li',function(){
//		var index = $(this).index();
//		switch(index){
//			case 0:
//				require(['./modules/home/home.js'],function(home){
//					home.init();
//				});
//				break;
//			case 1:
//				require(['./modules/market/market.js'],function(market){
//					market.init();
//				});
//				break;
//			case 2:
//				require(['./modules/order/order.js'],function(order){
//					order.init();
//				});
//				break;
//			case 3:
//				require(['./modules/mine/mine.js'],function(mine){
//					mine.init();
//				});
//				break;
//			default:
//				break;
//		}
//	});
//});
