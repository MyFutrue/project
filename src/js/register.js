jQuery(function($){
	
			//高亮效果
			
		var $middle1 = $('.middle1');
		var $li = $middle1.find('li');
		$.each($li,function(){
			$(this).on('mouseenter',function(){
				$(this).addClass('another');
				$li.eq(0).removeClass('three-one');
			}).on('mouseleave',function(){
				$(this).removeClass('another');
				$li.eq(0).addClass('three-one');
			})
		});

		//验证邮箱
		var oLb = document.getElementsByClassName("lb")[0];
		var oSpan = document.getElementsByTagName("span")[0];
		oLb.oninput = function(){
			var str = this.value;
			var reg=/\w{1,}@[a-zA-Z0-9]+\.[a-zA-Z]+/;
			var flag = reg.test(str);
			if(flag===false){
				oSpan.innerHTML = "您输入的邮箱错误";
			}else{
				oSpan.innerHTML = "邮箱正确";
			}
			
		}
		
		//验证登录密码
		var oPsw = document.getElementsByClassName("psw")[0];
		var oPw = document.getElementsByClassName("pw")[0];
		var oSpan1 = document.getElementsByTagName("span")[1];
		
		oPsw.oninput = function(){
			var str1 = this.value;
			var reg=/^\w{6,20}$/;
			var flag1 = reg.test(str1);
			if(flag1===false){
				oSpan1.innerHTML = "密码不可用";
			}else{
				oSpan1.innerHTML = "密码可用";
			}
		}
		//验证重复密码
		oPw.oninput = function(){
			var oSpan2 = document.getElementsByTagName("span")[2];
			var A = document.getElementsByClassName("psw")[0].value;
			var B = document.getElementsByClassName("pw")[0].value;
			if(A !== B){
				oSpan2.innerHTML = "两次密码输入不一致";
			}else{
				oSpan2.innerHTML = "密码一致";
			}
		}
		
		
		//生成验证码
		var oShuaxin2= document.getElementsByClassName("shuaxin2")[0];
		var oShuaxin3 = document.getElementsByClassName("shuaxin3")[0];
		var d = parseInt((Math.random()*9+1)*1000);
		oShuaxin2.innerHTML = d;
		oShuaxin3.click = function(e){
			e = e || window.event;
			var d = parseInt((Math.random()*9+1)*1000);
			oShuaxin2.innerHTML = d;
			e.preventDefault();
			
		}
		
		
		var oshuaxin1 = document.getElementsByClassName("shuaxin1")[0];
		var oSpan3 = document.getElementsByTagName("span")[3];
		var aa = oshuaxin1.getElementsByTagName("input")[0];
		
		aa.oninput = function(){
			var str2=this.value;
			if(str2 != d){
				oSpan3.innerHTML = "验证码错误";
			}else{
				oSpan3.innerHTML = "验证码正确";
			}
			
			
		}
				
		//保存cookie
		
		var $register = $('.register');
		var $lb = $('.lb');
		var $psw = $('.psw');
		var $pw = $('.pw');
		var $aa = $('.aa');
		//点击提交后保存到cookie
		$register.on('click',function(){
			
			var $str3 = $lb.val();
			var $str4 = $psw.val();
			var $str5 = $pw.val();
			var $str6 = $aa.val();
			var $oDate = new Date();
			//设置保存的时间
			$oDate.setDate($oDate.getDate() + 10);
			
			document.cookie = "name1=" + $str3 + ";expires=" + $oDate;
			document.cookie = "name2=" + $str4 + ";expires=" + $oDate;
			document.cookie = "name3=" + $str5 + ";expires=" + $oDate;
			
			
			if($str3 && $str4 && $str5 && ($str6 == d)){
				alert("注册成功!");
				location.href = "登录.html";
			}else{
				alert("注册不成功");
			}
			
		});
				
								
});
