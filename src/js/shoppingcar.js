jQuery(function($){
	
		//取出保存的cookie
		var str = getCookie("arr");
		var arr = JSON.parse(str);
		$('.c4').find('span').html(1);
		$('.c4').find('i').html(45);
		for (var i=0; i<arr.length; i++){
			var $tr = $('<tr/>');			
			var $td1 = $('<td/>');
			$('<input type="checkbox" name="check" checked="checked" />').appendTo($td1).addClass('td1');
			$td1.appendTo($tr);
		
			var $td2 = $('<td/>');
			$('<span><img src="' + arr[i].Img + '"></span>').appendTo($td2).addClass('td2');
			$td2.appendTo($tr);
			
			var $td3 = $('<td/>');
			$('<span>' + arr[i].title +'</span>').appendTo($td3).addClass('td3');
			$td3.appendTo($tr);

			var $td4 = $('<td/>');
			$('<span>' + arr[i].price +'</span>').appendTo($td4).addClass('td4');
			$td4.appendTo($tr);
			
			var $td5 = $('<td/>');
			$('<p class="r3-3"><button class="btn1">-</button><lable><input type="text" value="1"/></lable><button class="btn2">+</button></p>').appendTo($td5).addClass('td5');
			$td5.appendTo($tr);
			
			var $td6 = $('<td/>');
			$('<span>'+45.00+'</span>').appendTo($td6).addClass('td6');
			$td6.appendTo($tr);
			
			var $td7 = $('<td/>');
			$('<button>×</button>').appendTo($td7).addClass('td7');
			$td7.appendTo($tr);
			
			//var $tbody1 = $('.tbody1');
			var $table = $('table');
			$tr.appendTo($table);
			
		}
		
		
				
		var $dtt = $(".datalist tbody tr");
		$('#all').click(function(){
			$dtt[this.checked?'addClass':'removeClass']('selected').find(':checkbox').prop('checked',this.checked);			
		});
		
		
		
		$('.all1').click(function(){
			$dtt[this.checked?'addClass':'removeClass']('selected').find(':checkbox').prop('checked',this.checked);
		});
		
		
		var $input = $('.r3-3').find('lable').find('input');
		var $btn1 = $('.btn1');
		var $btn2 = $('.btn2');
		
		var j = 1;
		
		$btn2.on('click',function(){
			j++;
			$input.val(j);
			$('.c4').find('span').html(j);
			$('.c4').find('i').html('￥'+j*45);
			$('.td6').html(j*45);
		});
		
	
		$btn1.on('click',function(){
			j--;
			$input.val(j);
			$('.c4').find('span').html(j);
			$('.c4').find('i').html('￥'+j*45);
			$('.td6').html(j*45);
			if(j <= 1){
				$input.val(1);
				$('.c4').find('span').html(1);
				$('.c4').find('i').html(45);
				$('.td6').html(45);
				j=1;
			}
		});
		
		$('.c4').find('span').val($input.val(j));
			
		var $btn7 = $('.td7');
		$btn7.on('click',function(){
			$dtt.remove();
			$('.c4').find('span').html(0);
			$('.c4').find('i').html(0);
		});
});




