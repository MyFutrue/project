
jQuery(function($){	
		
		$("form").validate({
			// 设置验证规则
			rules:{
				email:{email:true,required:true},
				psw:{required:true,rangelength:[3,15]}
			},
			// 设置提示信息
			messages:{
				email:{email:'邮箱地址不正确'},
				psw:{required:'密码不正确'}
			}
				
		});
				
				
		//保存cookie			
		var $user = $('.user');			
		var $psw = $('.psw');
		var $btn = $('.btn');
		var $str1 = $user.val();
		var $str2 = $psw.val();	
		//点击提交后保存到cookie
		$btn.on('click',function(){
							
			var $oDate = new Date();
			//设置保存的时间
			$oDate.setDate($oDate.getDate() + 10);
			
			document.cookie = "name1=" + $str1 + ";expires=" + $oDate;
			document.cookie = "name2=" + $str2 + ";expires=" + $oDate;
	
			
		});
						
			
	
});
