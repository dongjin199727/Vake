$(function(){
	biaodan();
})

function biaodan(){
	$(".zhanghao").keydown(function(){
		console.log($(".zhanghao").val());
		if(check(".zhanghao",$(".zhanghao").val())){
			$(".p").html("输入正确");
		}else{
			$(".p").html("请填写正确的登录帐号（手机号码)");
		}
	});
	$(".mima").keydown(function(){
		console.log($(".mima").val());
		if(check(".mima",$(".mima").val())){
			$(".m").html("输入正确");
		}else{
			$(".m").html("密码格式有误，请重新输入");
		}
	});
	//封装正则表达式的判断函数
	function check(Cla,Val){
		switch(Cla){
			case ".zhanghao":
			var reg = /^1[0-9]{9}$/;
			break;
			case ".mima":
			var reg = /^[\w]{5,15}$/;
			break;
		}
		return reg.test(Val);
	}
}
