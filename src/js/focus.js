;(function($){
	
	// $.fn.myFocus
	$.fn.extend({
		myFocus:function(opts){
			var defaults = {
				imgs:[],//大图列表
				btn:true,//是否显示前后按钮
				speed:2000,	//切换时间
				autoplay:true, //自动轮播
				type:'fade',//left,top
			};
			return this.each(function(){
				var $self = $(this);
				
				var opt = $.extend({},defaults,opts);

				var $bigPic;
				
				// 默认显示第一张
				var index = 0;

				init();

				// 轮播

				if(opt.autoplay){
					var timer;		
					$('.nav ul li').eq(index).addClass('select').siblings().removeClass('select');
					
					$self.on('mouseenter',function(){
						clearInterval(timer);
		
					}).on('mouseleave',function(){
						timer = setInterval(function(){
							index++;
							showPic();
							
							$('.nav ul li').eq(index).addClass('select').siblings().removeClass('select');
						  	
						},opt.speed);
					}).trigger('mouseleave');
					
					//给按钮绑定移入事件 	
				  	$('.nav ul li').each(function(idx){
				  		$(this).on('mouseenter',function(){
				  			index=idx;
				  			$('.nav ul li').eq(index).addClass('select').siblings().removeClass('select');
				  			showPic();
				  			clearInterval(timer);				  			
				  		});               		
				  	});					  	
				}
				

				// 上一张
				$self.on('click','.prev',function(){
					index--;
					showPic();
		  			$('.nav ul li').eq(index).addClass('select').siblings().removeClass('select');
		  			
				})

				// 下一张
				.on('click','.next',function(){
					index++;
					showPic();
		  			$('.nav ul li').eq(index).addClass('select').siblings().removeClass('select');
		  			
				});
				
				 
				// 生成html结构
				function init(){
					// 生成html结构
					// var $myFocus = $('<div/>').addClass('myfocus');
					$bigPic = $('<ul/>').addClass('bigpic');

					// 遍历图片
					/*$.each(opt.imgs,function(idx,imgsrc){

					})*/
					var lis = $.map(opt.imgs,function(imgsrc){
						return '<li><img src="' + imgsrc + '"/></li>'
					});

					// 生成大图
					$bigPic.html(lis);
					$bigPic.appendTo($self)
					
					//创建7个li
				  	for(i=0;i<7;i++){
				  		$('<li/>').appendTo($('.nav ul'));
				  	}
				  	
					  	
				  	
					// 显示前后按钮
					if(opt.btn){
						var $prev = $('<a href="#"/>').html('&lt;').addClass('prev');
						var $next = $('<a href="#"/>').html('&gt;').addClass('next');

						$self.append([$prev,$next]);
					}

					showPic();
				}

				// 图片显示
				function showPic(){
					if(index>=opt.imgs.length){
						index = 0;
					}else if(index<0){
						index = opt.imgs.length -1;
					}
					$bigPic.find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});					
				}
			});
		}
	});
})(jQuery);