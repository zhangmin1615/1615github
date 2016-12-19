define(["backbone"], function(Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			home: "home",
			market: "market",
			order: "order",
			mine: "mine",
			"": "home"
		},
		home: function() {
			require(["modules/home/home.js", "js/swiper.min.js"], function(home) {
				home.init();
				home.swiper();
				home.tmpRequest();
			});
		},
		market: function() {
			require(["modules/market/market.js"], function(market) {
				market.init();
			});
		},
		order: function() {
			require(["modules/order/order.js"], function(order) {
				order.init();
			});
		},
		mine: function() {
			require(["modules/mine/mine.js"], function(mine) {
				mine.init();
			});
		},
	});
	return new Router();
});