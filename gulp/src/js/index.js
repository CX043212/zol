$(function(){
	var index = 0;
	var $li = $('#banner #lunbo li');
	$('#banner #right').click(function(){
		index++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	})
	$('#banner #right').mouseenter(function(){
		$('#right').css({'background':'gray','opacity':0.3});
	}).mouseleave(function(){
		$('#right').css({'background':"",'opacity':0.3});
	})
	$('#banner #left').click(function(){
		index--;
		if(index==-1){
			index = $li.length - 1;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	})
	$('#banner #left').mouseenter(function(){
		$('#left').css({'background':'gray','opacity':0.3});
	}).mouseleave(function(){
		$('#left').css({'background':"",'opacity':0.3});
	})
	var timer=null;
	timer = setInterval(function(){
		index++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	},5000)
})
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=1000){
			$('#huiding').fadeIn(1000);
		}else{
			$('#huiding').fadeOut(1000);
		}
	})
	$('#huiding #rutn').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	})
})
// $(function(){
// 	var $a = $('#line a');
// 	var $one = $('#line li');
// 	var $two= $(div);
// 	$.getJSON('menu.json',function(json){
// 		var myMenu = json.menu;
// 		var myOne = myMenu.one;
// 		var myTwo = myMenu.two;
// 		$.each(myTwo,function(i){
// 			$("<div>" + myTwo[i] + "</div>").appendTo("#div");})
// 				$one.mouseover(function() {
// 					$(this).css("background", "red");
// 					$two.css('display','block');
// 				});
// 				$one.mouseout(function(){
// 					$(this).css("background", "");
// 					$two.css('display','none');
// 				})
// 			});
// 		
// 		});
// 	})
//})

		