
jQuery(function(){
	
	//放大镜
	$('#zoom_01').elevateZoom({});
	
	//高亮效果
	var $li = $('.int-detail').find('ul').find('li');
	$.each('$li',function(){
		$(this).on('mouseenter',function(){
			$(this).addClass('ccc');
			$li.eq(0).removeClass('ddd');
		}).on('mouseleave',function(){
			$(this).removeClass('ccc');
			$li.eq(0).addClass('ddd');
		});
	});
	
	
	
	
	var $span = $('.listright').find('li').find('span');
	$span.addClass('redcircel');
	var $span1 = $('.cl1').find('span');
	$span1.addClass('redcircel1');
	
	var $btn4 = $('.btn4');
	var i = 0;
	$btn4.on('click', function(){
		i++;
		$span.html(i);
		$span1.html(i);
		
	});
	
	var $input = $('.r3-3').find('lable').find('input');
	var $btn1 = $('.btn1');
	var $btn2 = $('.btn2');
	
	var j = 0;
	
	$btn2.on('click',function(){
		j++;
		$input.val(j);
		$input.val(j);
	});
	

	$btn1.on('click',function(){
		j--;
		$input.val(j);
		if(j <= 1){
			$input.val(1);
			j=0;
		}
	});
	
	//购物车动画效果
	var $carlist = $('.carlist').find('.cl1');
	
	$btn4.on('click', function(){
		var $detailleft = $('.detailleft').find('p');
		var $img = $detailleft.children('img');
		
		var $cloneImg = $img.clone();
		
		$cloneImg.css({
            position:'absolute',
            width:$img.width(),
            left:$img.offset().left,
            top:$img.offset().top,
        }).appendTo('body');
        
        $cloneImg.animate({
        	left:$carlist.offset().left,
            top:$carlist.offset().top,
            width:10
        },1000,function(){
        	$cloneImg.remove();
        });
        
        
        var str=getCookie("arr");
		var arr=[];
		
		//取出对应的值，保存到cookie
		var $Img = $('#zoom_01').attr('src');
		var $title = $('.tex').find('dt').html();
		var $price = $('.r2-1').find('span').html();
		
		var obj = {};
		obj.Img = $Img;
		obj.title = $title;
		obj.price = $price;
		
		arr.push(obj);
		//将数组的内容添加到cookie,10天过期
		addCookie("arr", JSON.stringify(arr),10);
        
        
        
	});
	
	
	
});
