$(function(){
	$('#fada').hover(function(){
		$('#fada #big').css('display','block');
		$('#fada #move').css('display','block');
	},function(){
		$('#fada #big').css('display','none');
		$('#fada #move').css('display','none');
	});
	$('#small').mousemove(function(evt){
		var x=evt.pageX;
		var y=evt.pageY;
		 var nx = x - $('#fada').offset().left - $('#fada #move').width()/2;
		var ny = y - $('#fada').offset().top - $('#fada #move').height()/2;
		if(nx <= 0){
			nx = 0;
		}else if(nx >= $('#small').width()-$('#fada #move').width()){
			nx = $('#small').width()-$('#fada #move').width();
		}
		if(ny <= 0){
			ny = 0;
		}else if(ny >= $('#small').height()-$('#fada #move').height()){
			ny = $('#small').height()-$('#fada #move').height();
		}
		$('#fada #move').css({
			left:nx + 'px',
			top:ny + 'px'
		})
		$('#big>img').css({
				left:-nx/($('#small').width()-$('#move').width())*($('#big img').width()-$('#big').width())+ 'px',
				top:-ny/($('#small').height()-$('#move').height())*($('#big img').height()-$('#big').height())+ 'px'
			})
	})
	
})
