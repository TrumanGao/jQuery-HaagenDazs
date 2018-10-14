// 轮播图
// 自动淡出当前index图片，淡入下一张index+1图片

// 设置索引
var index = 0;

// 注意：var声明auto定时器，必须写在全局作用域中。函数内部重新设置定时器时不能再写var声明了，否则会无法清除
// var auto;

// 生成定时器auto，打开网页自调用 √
var auto = setInterval(function () {
	index++;
	// 当index大于轮播大图的数量，index回到0
	if(index > $("#pics-wraper img").length - 1){
		index = 0;
	}
	// 当前index位置大图淡入，其余大图淡出
	$("#pics-wraper img").eq(index)
	.fadeIn()
	.siblings()
	.fadeOut()
}, 800)

// 问题：为什么打印auto定时器结果是1？
// console.log(auto)

// // 鼠标移入/移出大图，设置轮播停止/继续功能 √
$("#pics-wraper img").hover(function () {
	// 鼠标移入大图，停止轮播 
	// stop(停止被选元素的所有加入队列的动画, 允许完成当前的动画)
	$("#pics-wraper img").stop(false, true);
	// 清除定时器
	clearInterval(auto);
}, function () {
	// 鼠标移出大图，重新生成定时器
	auto = setInterval(function () {
		index++;
		// 当index大于轮播大图的数量，index回到0
		if(index > $("#pics-wraper img").length - 1){
			index = 0;
		}
		
		// 当前index位置大图淡入，其余大图淡出
		$("#pics-wraper img").eq(index)
		.fadeIn()
		.siblings()
		.fadeOut()
	}, 800)
})

// 鼠标移入/移出导航小图，设置轮播停止/继续功能
// 注意：获取$(this).index只能获取到同级元素$(".pics-nav-all")div的index，不能获取到img的index，因为img是$(".pics-nav-all")div的子级a的子级。不管鼠标移动到哪个img，其index都是0
$(".pics-nav-all").hover(function () {
	// 鼠标移入导航小图，停止轮播 
	// stop(停止被选元素的所有加入队列的动画, 允许完成当前的动画)
	$("#pics-wraper img").stop(false, true);
	// 清除定时器
	clearInterval(auto);
	
	index = $(this).index();
	$("#pics-wraper img").eq(index)
	.fadeIn()
	.siblings()
	.fadeOut()
}, function () {
	// 鼠标移出导航小图，重新生成定时器，继续轮播
	auto = setInterval(function () {
		index++;
		// 当index大于轮播大图的数量，index回到0
		if(index > $("#pics-wraper img").length - 1){
			index = 0;
		}
		
		// 当前index位置大图淡入，其余大图淡出
		$("#pics-wraper img").eq(index)
		.fadeIn()
		.siblings()
		.fadeOut()
	}, 800)
});

// 右下角分享按钮添加鼠标移入移出事件 √
$("#weibo").hover(function () {
	$("#share").show()
}, function () {
	$("#share").hide()
})