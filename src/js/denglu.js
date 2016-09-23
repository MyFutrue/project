
jQuery(function($){
	
				// 表单验证插件
			$("form").validate({

					// 设置验证规则
				rules:{
						//user:{required:true,rangelength:[3,10]},
						email:{email:true,required:true},
						psw:{required:true,rangelength:[3,15]}
//						url:{url:true},
//						tel:{number:true}
					},

					// 设置提示信息
					messages:{
						//user:{required:'必填'},
						email:{email:'邮箱地址不正确'},
						psw:{required:'密码不正确'}
					}
					
			});
				
				
			//保存cookie
			
			var $user = $('.user');			
			var $psw = $('.psw');
			var $btn = $('.btn');
			//点击提交后保存到cookie
			$btn.on('click',function(){
				
				var $str1 = $user.val();
				var $str2 = $psw.val();
				
				
				var $oDate = new Date();
				//设置保存的时间
				$oDate.setDate($oDate.getDate() + 10);
				
				document.cookie = "name1=" + $str1 + ";expires=" + $oDate;
				document.cookie = "name2=" + $str2 + ";expires=" + $oDate;
			
				
				if($str1 && $str2){
					alert("登录成功");
				}else{
					alert("登录不成功");
				}
				
			});
			
			
			
			//cookie
//			var $save = $('#savecheck');
//			var $btn = $('.btn');
//			var $user = $('.user');
//			var $psw = $('.psw');
//			
//			var str = document.cookie;
//			var obj = {};
//			var arr = str.split(';');
//			for(var i=0; i<arr.length; i++){
//				var arr2 = arr[i].split('=');
//				var name = arr2[0];
//				var val = arr2[1];
//				
//				obj[name] = val;
//				
//			}
//			
//			$btn.on('click',function(){
//				var $aa = $user.val();
//				var $bb = $psw.val();
//				if(($aa == obj.name1) && ($bb == obj.name2)){
//					alert("登录成功！")
//				}else{
//					alert("用户名不存在或密码不正确")
//				}
//				
//			});
			
	
});
