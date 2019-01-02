$(function(){
	var index = 0;
	var $li = $('#banner #lunbo li');
// 	$('#banner #right').click(function(){
// 		index++;
// 		if(index == $li.length){
// 			index = 0;
// 		}
// 		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
// 		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
// 	})
// 	$('#banner #right').mouseenter(function(){
// 		$('#right').css({'background':'gray','opacity':0.3});
// 	}).mouseleave(function(){
// 		$('#right').css({'background':"",'opacity':0.3});
// 	})
// 	$('#banner #left').click(function(){
// 		index--;
// 		if(index==-1){
// 			index = $li.length - 1;
// 		}
// 		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
// 		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
// 	})
// 	$('#banner #left').mouseenter(function(){
// 		$('#left').css({'background':'gray','opacity':0.3});
// 	}).mouseleave(function(){
// 		$('#left').css({'background':"",'opacity':0.3});
// 	})
	var timer=null;
	timer = setInterval(function(){
		index++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).ani.siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	},5000)
})
// $(function(){
// 	var index = 0;
// 	var $li = $('#appliance #left #top ul li');
// 	var timer=null;
// 	timer = setInterval(function(){
// 		index++;
// 		if(index == $li.length){
// 			index = 0;
// 		}
// 		$('#top ul').animate({left:-index * $('#top ul li img').width()}},1000);
// 	},5000)
// })
// $(function(){
// 	var index = 0;
// 	var $lis = $('#earphone #first #lunbo li');
// 	var timer=null;
// 	timer = setInterval(function(){
// 		index++;
// 		if(index == $lis.length){
// 			index = 0;
// 		}
// 		$lis.eq(index).animate({width:595});
// 	},5000)
// })
// $(function(){
// 	var index = 0;
// 	var $lis = $('#game1 #left #bottom li');
// 	var timer=null;
// 	timer = setInterval(function(){
// 		index++;
// 		if(index == $lis.length){
// 			index = 0;
// 		}
// 		$lis.eq(index).fadeIn(1000).siblings().fadeOut(1000);
// 	},5000)
// })
$(function(){
	var $sh=$('#group #pre #show');
	var index=0;
	$('#group #pre li').mouseenter(function(){
		index++;
		$sh.stop(true,true).animate({height:50,opacity:'show'},500)
	}).mouseleave(function(){
		$sh.stop(true,true).animate({height:0,opacity:'none'},500)
	});
})
// $(function(){
// 	$(document).ready(function(){
// 	$("#group #pre li").next("#show").slideDown();//默认显示
// 	$("#group #pre li").hover(function(){
// 	$(this).next("#show").slideToggle("slow");//显示切换
// 	});
// 	});
// })


// $(function(){
// 	var $sh=$('#group #next #show');
// 	$sh.mouseenter(function(){
// 		$sh.stop(true,true).animate({height:50,opacity:'show'},500)
// 	}).mouseleave(function(){
// 		$sh.stop(true,true).animate({height:0,opacity:'none'},500)
// 	});
// })
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

		