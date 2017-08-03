$(function(){
	
	
//	轮播
	$(".main .banner .banner-img ol li").click(function(){
		
		$(".main .banner .banner-img ol li").removeClass("active");
		$(".main .banner .banner-img ul li").removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$(".main .banner .banner-img ul li:eq("+index+")").addClass("active");
	});
	var i = 0;
	setInterval(function(){
		if(i>=5){
			i=0;
		}
		$(".main .banner .banner-img ul li").removeClass("active");
		$(".main .banner .banner-img ol li").removeClass("active");
		$(".main .banner .banner-img ul li:eq("+i+")").addClass("active");
		$(".main .banner .banner-img ol li:eq("+i+")").addClass("active");
		i++;
	},2000);
	
	
	


//  导航
	$(".rightnav p").mouseover(function(){
		$(".rightnav p a").removeClass("active");
		$(".rightnav p span").removeClass("active");
		$(this).find("a").addClass("active");
		$(this).find("span").addClass("active");
	});
	
	
//	导航点击滚动
	$(".rightnav .menu p").click(function(){
		var index = $(this).index();
		var tHeight = $(".navcli:eq("+index+")").offset().top;
		$('html,body').animate({
			scrollTop:tHeight
		},1000);
	});
	
	
	
//	滚动触发动画
	var height = $(window).height();
	
	$(window).scroll(function(){
//		各块头部动画
		var top = $(window).scrollTop();
		for(var i =0;i <$("h3").length;i++){
			if(top + height >$("h3:eq("+i+")").offset().top){
				$("h3:eq("+i+")").addClass("active");
			}else{
				$("h3:eq("+i+")").removeClass("active");
			}
		}	
//介绍部分动画
		for(var i =0;i<$(".introduce").length;i++){
			if(top + height > $(".introduce:eq("+i+")").offset().top){
				$(".introduce:eq("+i+")").addClass("active");
			}else{
				$(".introduce:eq("+i+")").removeClass("active");
			}
		}
		
//	图片部分动画
		for(var i =0;i<$(".bigli").length;i++){
			if(top + height > $(".bigli:eq("+i+")").offset().top){
				$(".bigli:eq("+i+")").addClass("active");
			}else{
				$(".bigli:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".our ul li").length;i++){
			if(top + height > $(".our ul li:eq("+i+")").offset().top){
				$(".our ul li:eq("+i+")").addClass("active");
			}else{
				$(".our ul li:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".solution ul li").length;i++){
			if(top + height > $(".solution ul li:eq("+i+")").offset().top){
				$(".solution ul li:eq("+i+")").addClass("active");
			}else{
				$(".solution ul li:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".process ul li").length;i++){
			if(top + height > $(".process ul li:eq("+i+")").offset().top){
				$(".process ul li:eq("+i+")").addClass("active");
			}else{
				$(".process ul li:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".ceses ul li").length;i++){
			if(top + height > $(".ceses ul li:eq("+i+")").offset().top){
				$(".ceses ul li:eq("+i+")").addClass("active");
			}else{
				$(".ceses ul li:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".brand ul li").length;i++){
			if(top + height > $(".brand ul li:eq("+i+")").offset().top){
				$(".brand ul li:eq("+i+")").addClass("active");
			}else{
				$(".brand ul li:eq("+i+")").removeClass("active");
			}
		}
		for(var i =0;i<$(".contact ul li").length;i++){
			if(top + height > $(".contact ul li:eq("+i+")").offset().top){
				$(".contact ul li:eq("+i+")").addClass("active");
			}else{
				$(".contact ul li:eq("+i+")").removeClass("active");
			}
		}
		
		if(top + height > $(".fot").offset().top){
			$(".fot").addClass("active");
		}else{
			$(".fot").removeClass("active");
		}	

		
	});
	
	
//移动端导航
//
//	if($(window).width()<768){
//		$(".rightnav .menu").hide();
//	}
//	$(".rightnav .cli").click(function(){
////		if($(".rightnav .menu").hide()){
//			$(".rightnav .menu").slideToggle();
////		}
//	});
});



