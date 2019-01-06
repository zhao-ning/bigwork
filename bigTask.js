window.onload=function(){
	var top=document.getElementsByClassName('top')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		var wi=(parseInt(screen.width)-1195)/2;
		var wid=wi+"px";
		if(st>180){
			top.style.position='fixed';
			top.style.left=wid;

		}else{
			top.style.position='static';

		}
	}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
				//parseInt是强制类型转换用的，意在把px去掉，只取其中数值
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box = document.getElementById('box');
		//nav是底下小圆圈
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('L');
		var right = document.getElementById('R');
		var index = 1;
		var timer;
		var isMoving = false;
		//鼠标划入时使两箭头的透明度变为0.5，而且图片变为不滚动
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		//鼠标在外时将两箭头隐藏，图片3秒一滚动
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		//设置点击小圆圈后发生的事件
		for( var i=0; i<oNavlist.length; i++ ){
			(function(i){
				oNavlist[i].onclick = function(){
					index = i+1;
					navmove();
					animate(slider,{left:-800*index});
				}
			})(i);
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==6){
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = '-800px';
					index = 5;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >5 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[4].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);
var posi=document.getElementById('posi').children;
	function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, null)[attr];
	}
	}
var v=document.getElementById('v');
for(var i=0;i<posi.length;i++){
	posi[i].onmouseover=function() {

		if(this==posi[2]){
			v.src='img/erwei.png';
			v.style.left="15px;"
			v.style.bottom="1px";
			
		}
		var a=this;
		var tim=setInterval(function(){
			clearInterval(tim);
			var now =parseInt(getStyle(a,"right"));
			a.style.right=0+'px';

			/*var spped=80;*/
			if(now==0){
				clearInterval(tim);
			}
			/*else{
				var p=now+spped;
				var K=p>0?0:p;
				a.style.right=p+'px';
				console.log(posi[i].style.right);
			}*/
		},30)
		
	}
	posi[i].onmouseout=function(){
		var b=this;
		if(this==posi[2]){
			v.src='img/serwei.png';
			v.style.left="12px;"
			v.style.bottom="-35px";
			
		}

		var tim=setInterval(function(){
			clearInterval(tim);
			var now =parseInt(getStyle(b,"right"));
			//var spped=20;
			b.style.right=-80+'px';
			if (now==-80) {
				clearInterval(tim);
			}
			/*else{
				var p=now-spped;
				//var K=p>-80?p:-80;
				b.style.right=p+'px';
			}*/
		},30)
	}
}


//右侧广告
     var ad =document.getElementById('ad');
                var con1 = document.getElementById('l11');
                var con2 = document.getElementById('l22');
                con2.innerHTML=con1.innerHTML;
                function scrollUp(){
                if(ad.scrollTop>=con1.offsetHeight){
                    ad.scrollTop=0;
                }else{
                    ad.scrollTop++;
                }
                }                
                var time = 50;
                var mytimer=setInterval(scrollUp,time);
                ad.onmouseover=function(){
                    clearInterval(mytimer);
                }
                ad.onmouseout=function(){
                    mytimer=setInterval(scrollUp,time);
                }

//充值数值
	


var selected=document.getElementById('selected');

	for (var i = 4; i<=50 ; i++) {
		var op=document.createElement('option');
		var text=document.createTextNode(i);
		op.value=i;
		op.appendChild(text);
		selected.appendChild(op);
	}
	selected.onchange=function () {
		var count=document.getElementById('recharge');
		var stedindex=selected.selectedIndex;
		var c=selected.options[stedindex].value;
		count.innerHTML='￥' +'&nbsp;'+ c;
				console.log(count.innerHTML);
	}
	













}
