//版权 北京智能社©, 保留所有权利

//obj=要控制的div,iTarget=目标位置,time=用时

var timer=null;

function move(obj,iTarget,time){
	var start=obj.offsetTop;
	var dis=iTarget-start;
	var count=Math.round(time/30);
	var n=0;
	
	clearInterval(timer);
	timer=setInterval(function(){
		n++;
		
		//办事
		obj.style.top=start+n*dis/count+'px';
		
		if(n==count) clearInterval(timer);	
	},30);
}