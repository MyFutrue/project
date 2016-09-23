
jQuery(function($){
	
	$('.indexright li').each(function(){
		$('.indexright').find('li').on('mouseenter',function(){
			$(this).find('span').css({
				position:'absolute',
				top:10,
				borderWidth:'5px',
				borderStyle:'solid',
				borderColor:'#ccc',
				width:0,
				height:0,
				'border-left-color':'transparent',
				'border-right-color':'transparent',
				'border-top-color':'transparent'
			});
			
		}).on('mouseleave',function(){
			$(this).find('span').css({
				position:'absolute',
				top:10,
				borderWidth:'5px',
				borderStyle:'solid',
				borderColor:'#ccc',
				width:0,
				height:0,
				'border-left-color':'transparent',
				'border-right-color':'transparent',
				'border-bottom-color':'transparent'
			});		
		});	
	});
	
	var $li = $('.indexright').find('li');
	$.each($li,function(){
		$('.indexright').find('li').eq(1).on('mouseenter',function(){
			$('.show1').slideDown();
		}).on('mouseleave',function(){
			$('.show1').slideUp();
		});
		
		$('.indexright').find('li').eq(2).on('mouseenter',function(){
			$('.show2').slideDown();
		}).on('mouseleave',function(){
			$('.show2').slideUp();
		});
	});

	
	var $total = $('.total');
	var $floor = $('.floor');
	// 滚动
	$(window).on('scroll',function(){
		// 获取滚动过的距离
		var scrollTop = $(window).scrollTop();
		
		// 滚动距离大于600，显示楼层导航，小于600时隐藏
		if(scrollTop > 550){
			$floor.fadeIn();
		}else{
			$floor.fadeOut();
		}
		//$('html,body').animate({scrollTop:$floortop});
		
	});
	

//	$floor.on('click','li',function(){
//		
//		if($(this).hasClass('returntop')){
//			scrollTop = 0;
//		}else{
//			//var index = $(this).index();
//			//保证在正中央:
//			//scrollTop = $(window).offsetTop - (window.height-$total.height)/2
//			var scrollTop = $(document).offset().top;
//		}
//		$('html,body').animate({scrollTop:scrollTop});
//	});
		
	
	
	
});