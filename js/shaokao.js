


var zhuyi=document.getElementById("zhuyi")
var lishi=document.getElementById("lishi")
var page1=document.getElementById("page1")
var page1_1=document.getElementById("page1_1")
var fanhui=document.getElementById("fanhui")
var duihua1=document.getElementById("duihua1")
var duihua2=document.getElementById("duihua2")
var dianji=document.querySelector(".dianji")
var aa=document.getElementById("aa")
var daduihua=document.getElementById("daduihua")
var duihua3=document.getElementById("duihua3")
var caidan1=document.querySelector(".caidan1")
var divright=document.querySelector('.divright')
zhuyi.onclick=function(){
	page1.style.display="none";
	page1_1.style.display="block";
	page1.style.animationPlayState="paused";
}

fanhui.onclick=function(){
	page1_1.style.display="none";
	page1.style.display="block";
}
aa.onclick=function(){
	daduihua.style.animationPlayState="running";
	caidan1.style.display="block";
	daduihua.style.animationPlayState="running";
}
var caidan=document.getElementById("caidan")
var page2=document.getElementById("page2")
var page3=document.getElementById("page3")
var ann=document.querySelector(".ann")
var page2_1=document.getElementById("page2_1")
var next=document.getElementById("next")
caidan.onclick=function(){
	page1.style.display="none";
	page1_1.style.display="none";
	page2.style.display="block";
}
/*ann.onclick=function(){
	
	page1.style.display="none"
	page1_1.style.display="none"
	page2.style.display="none"
	page3.style.display="none"
	page2_1.style.display='block'
	
}*/

next.onclick=function(){
	page2_1.style.display='none';
	page3.style.display='block';
}

/*音乐*/
var yinyue1=document.getElementById("yinyue1")
	var yinyue2=document.getElementById("yinyue2")
	var yy=document.getElementById("yy")
	
yinyue1.onclick = function() {
	
		if(yinyue1.style.animationPlayState=='running')
		{
			yinyue1.style.animationPlayState='paused';
			yy.pause();
		}
		else {
			yinyue1.style.animationPlayState='running';
			yy.play();
		}
	}
	
	
	
//闹钟
// var alarm=document.querySelector(".alarm")
// var ann3=document.querySelector(".ann3")
// ann3.onclick=function(){
// 	if(alarm.style.animationPlayState="running")
// 	{
// 	alarm.style.animationPlayState="paused";
// 	alarm.paused();
// 	}
// 	else{
// 	alarm.style.animationPlayState="running";
// 	alarm.running();
// 	}
// }
// 	//使用匿名函数方法 一秒调一次 更改提示数值
// 	var myVar = setInterval(function(){ countDown() }, 1000);
// 	 // 函数方法
// 	 function countDown(){
// 	  // 获取提示数值
// 	 var time = document.getElementById("Time");
// 	 //获取到id为time标签中的内容，现进行判断
// 	 if(time.innerHTML == 0){
// 	 //等于0时清除计时
// 	  clearInterval(myVar);
// 	 console.log('停止')
// 	 }else{
// 	 time.innerHTML = time.innerHTML-1;
// 	 }
// 	 }
 var ann3=document.querySelector(".ann3")
	 var ti=document.querySelector(".ti")
	 var nnnn=document.getElementById("nnnn")
	//  ann3.onclick=function(){
	// 	if(nnnn.style.animationPlayState=='running')
	// 	{
	// 		nnnn.style.animationPlayState='paused';
	// 		ann3.paused();
	// 	}
	// 	else {
	// 		nnnn.style.animationPlayState='running';
	// 		ann3.running();
	// 	}
	// }
	var time=document.getElementById("time");
		var i=30;
		var t=setInterval(function(){
			if(i>=1){
				time.innerHTML=i;
				i--;
			}
			else{
				time.innerHTML="0";
				console.log('停止');
				clearInterval(t);
			}
			time.onclick = function(){
			            clearInterval(t)
			        }

		}
		,1000)
	 
	 
	 
	 // 拖动
	var yu2=document.querySelector(".yu2")
	var kaochang=document.querySelector(".kaochang")
	var xiebang2=document.querySelector(".xiebang2")
	var peigen2=document.querySelector(".peigen2")
	var wuhua2=document.querySelector(".wuhua2")
	var yu3=document.querySelector(".yu3")
	yu2.onclick=function(){
		yu2.style.animationPlayState="running";
		yu3.style.animationPlayState="running";
	}
	kaochang.onclick=function(){
		kaochang.style.animationPlayState="running";
	}
	xiebang2.onclick=function(){
		xiebang2.style.animationPlayState="running";
	}
	peigen2.onclick=function(){
		peigen2.style.animationPlayState="running";
	}
	wuhua2.onclick=function(){
		wuhua2.style.animationPlayState="running";
	}
	// 开烤
	var kaikao=document.getElementById("kaikao")
	var ann3=document.querySelector(".ann3")
	var xia2=document.querySelector(".xia2")
	var nnnn=document.getElementById('nnnn')
	ann3.onclick=function(){
		kaikao.style.display="none";
		nnnn.style.display="block";
		nnnn.style.animationPlayState="running";
		xia2.style.animationPlayState="running";
	}
	
	
	// 开吃
	var cong=document.querySelector(".cong")
	cong.onclick=function(){
		cong.style.animationPlayState="running";
	}
	
	// var yu4=document.querySelector(".yu4")
	// yu4.onclick=function(){
	// 	yu4.style.animationPlayState="running";
	// }
	// var kaochang4=document.querySelector(".kaochang4")
	// kaochang4.onclick=function(){
	// 	kaochang4.style.animationPlayState="running";
	// }
	// 
	var xia4=document.querySelector(".xia4")
	var kaochang4=document.querySelector('.kaochang4')
	var yu4=document.querySelector('.yu4')
	xia4.onclick=function(){
		xia4.style.animationPlayState="running";
	}
	kaochang4.onclick=function(){
		kaochang4.style.animationPlayState='running';
	}
	yu4.onclick=function(){
		yu4.style.animationPlayState='running';
	}
	var kaichi=document.getElementById("kaichi")
	var page3=document.getElementById("page3")
	var page3_1=document.getElementById("page3_1")
	kaichi.onclick=function(){
		page1.style.display="none";
		page2.style.display="none";
		page1_1.style.display="none";
		
		
		page3.style.display="none";
		page3_1.style.display="block";
	}
	
	
	// 
	var kaichi2=document.getElementById("kaichi2")
	var zi4=document.getElementById("zi4")
	var cai=document.getElementById("cai")
	var fanhui2=document.getElementById("fanhui2")
	kaichi2.onclick=function(){
		zi4.style.display="block";
		cai.style.display="none";
		kaichi2.style.display="none";
		fanhui2.style.display="block";
	}
	fanhui2.onclick=function(){
		page3_1.style.display="none";
		page1.style.display="block";
	}
    
    
    //菜单
    var anniu=document.getElementById("anniu")
    var furit=document.getElementsByName("furit")
    var txt=document.getElementById("txt")
    
    anniu.onclick=function(){
     var num=[];   
    for(var i=0;i<furit.length;i++)
    { if (furit[i].checked)
       { 
         num=num+furit[i].value;
         
       }
       localStorage.setItem("num", num);
     //console.log(num);
    }
    //txt.style.display="block";
    //txt.innerHTML = num;
    //show(num);
    //alert(num);
    page1.style.display="none";
    page1_1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page2_1.style.display='block';
    var num = localStorage.getItem("num");
    document.getElementById("myOutput").innerText = num;
    }