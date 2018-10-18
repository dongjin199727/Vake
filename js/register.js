$(function(){
	biaodan();
})

function biaodan(){
	$(".shoujihao").keydown(function(){
		console.log($(".shoujihao").val());
		if(check(".shoujihao",$(".shoujihao").val())){
			$(".s").html("输入正确");
		}else{
			$(".s").html("输入错误，请重新输入！");
		}
	});
	$(".nicheng").keydown(function(){
		console.log($(".nicheng").val());
		if(check(".nicheng",$(".nicheng").val())){
			$(".n").html("输入正确");
		}else{
			$(".n").html("输入错误，请重新输入！");
		}
	});
	$(".xingming").blur(function(){
		console.log($(".xingming").val());
		if(check(".xingming",$(".xingming").val())){
			$(".x").html("输入正确");
		}else{
			$(".x").html("输入错误，请重新输入！");
		}
	});
	$(".shezhi").keydown(function(){
		console.log($(".shezhi").val());
		if(check(".shezhi",$(".shezhi").val())){
			$(".z").html("输入正确");
		}else{
			$(".z").html("输入错误，请重新输入！");
		}
	});
	$(".queren").keydown(function(){
		console.log($(".queren").val());
		if(check(".queren",$(".queren").val())){
			$(".q").html("输入正确");
		}else{
			$(".q").html("输入错误，请重新输入！");
		}
	});
	
	//封装正则表达式的判断函数
	function check(Cla,Val){
		switch(Cla){
			case ".shoujihao":
			var reg = /^1[0-9]{9}$/;
			break;
			case ".nicheng":
			var reg = /^[\w]{2,5}$/;
			break;
			case ".xingming":
			var reg = /^[\u4e00-\u9fa5]{2,6}$/;
			break;
			case ".shezhi":
			var reg = /^[\w]{5,15}$/;
			break;
		}
		return reg.test(Val);
	}
	
}
