
var posi=document.getElementById('name').children;
console.log(posi);
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}
	else{
		return getComputeredStyle(obj)[style];
	}
}
for(var i=0;i<posi.length;i++){
	posi[i].onmouseover=function() {
		var timer=setIntervar(function(){
			var now =parseInt(getStyle(posi[i],'right'));
			var spped=(123+now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(now==123){
				clearIntervar(timer);
			}
			else{
				posi[i].style.right=now +speed+"px";
			}
		},30)
		
	}
	posi[i].onmouseout=function(){
		var timer=setIntervar(function(){
			var now =parseInt(getStyle(posi[i],'right'));
			var spped=(123+now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if (now==-78) {
				clearIntervar(timer);
			}
			else{
				posi[i].style.right=now+speed+"px";
			}
		},30)
	}
}
