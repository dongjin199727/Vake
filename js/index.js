let s1 = new Slider($(".section"),982,390,["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"],
				-1,1500);
				
$(".right .aa a").each(function(){
	$(this).hover(
		function(){
			$(this).css({
				transition:"all 2s linear",
				transform:"scale(1.5)"
			})
		},
		function(){
			$(this).css({
				transition:"all 2s linear",
				transform:"scale(1)"
			})
		}
	)
})
