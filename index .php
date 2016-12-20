<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wxcc3f5e535a3862da", "e17de944cd1cda40711068a8e4d3d5c0");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no,width=device-width" />
		<title>爱鲜蜂</title>
		<title>主页面</title>
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<script src="js/baiduTemplate.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/common.js" type="text/javascript" charset="utf-8"></script>
		<script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
		<!--<script src="js/jquery.lazyload.js" type="text/javascript" charset="utf-8"></script>-->
	</head>

	<body>
		<!--主体-->
		<div class="homeBox"></div>
		<div class="marketBox"></div>
		<div class="orderBox"></div>
		<div class="mineBox"></div>

		<!--footer菜单-->
		<footer>
			<ul>
				<li>
					<div class="footerBg"><img src="img/footer1-1.png"/></div>
					<a href="#home">首页</a>
				</li>
				<li>
					<div class="footerBg"><img src="img/footer2.png"/></div>
					<a href="#market">闪送超市</a>
				</li>
				<li id="cartOrder">
					<div class="footerBg"><img src="img/footer3.png"/></div>
					<a href="#order">购物车</a>
					<div id="cartNum">0</div>
				</li>
				<li>
					<div class="footerBg"><img src="img/footer4.png"/></div>
					<a href="#mine">我的</a>
				</li>
			</ul>
		</footer>
		<span class="bottomfoot"></span>
		<script type="text/javascript">
			 wx.config({
			    debug: true,
			    appId: '<?php echo $signPackage["appId"];?>',
			    timestamp: <?php echo $signPackage["timestamp"];?>,
			    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
			    signature: '<?php echo $signPackage["signature"];?>',
			     jsApiList: [
			     	'checkJsApi',
			        'onMenuShareWeibo',
			        'onMenuShareQZone',
			        'hideMenuItems',
			        'showMenuItems',
			        'hideAllNonBaseMenuItem',
			        'showAllNonBaseMenuItem',
			        'translateVoice',
			        'startRecord',
			        'stopRecord',
			        'onVoiceRecordEnd',
			        'playVoice',
			        'onVoicePlayEnd',
			        'pauseVoice',
			        'stopVoice',
			        'uploadVoice',
			        'downloadVoice',
			        'chooseImage',
			        'previewImage',
			        'uploadImage',
			        'downloadImage',
			        'getNetworkType',
			        'openLocation',
			        'getLocation',
			        'hideOptionMenu',
			        'showOptionMenu',
			        'closeWindow',
			        'scanQRCode',
			        'chooseWXPay',
			        'openProductSpecificView',
			        'addCard',
			        'chooseCard',
			        'openCard'
			     ]
			  });


			 wx.getLocation({
			    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			    success: function (res) {
			        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			        var speed = res.speed; // 速度，以米/每秒计
			        var accuracy = res.accuracy; // 位置精度
			    }
			});
		</script>
	</body>
	
</html>