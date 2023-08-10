
        var page1=document.getElementById("page1");
        var page2=document.getElementById("page2");
		var page3=document.getElementById("page3");
		var page4=document.getElementById("page4");
		var page5=document.getElementById("page5");
        var anniu=document.getElementById("anniu");
		var anniu2=document.getElementById("anniu2");
		var anniu3=document.getElementById("anniu3");
		var anniu4=document.getElementById("anniu4");
		var anniu5=document.getElementById("anniu5");
		var next=document.getElementById("next");
        var next2=document.getElementById("next2");
		var next3=document.getElementById("next3");
		var next4=document.getElementById("next4");
		var next5=document.getElementById("next5");
		var cuowu=document.getElementById("cuowu")
		var cuowu1=document.getElementById("cuowu1")
		var cuowu2=document.getElementById("cuowu2")
		var cuowu3=document.getElementById("cuowu3")
		var cuowu4=document.getElementById("cuowu4")
		var bg2=document.getElementById("bg2")
		var page6=document.getElementById("page6")
        anniu.onclick=function(){
         var num=null;
         var ti=document.getElementsByName("ti");
            for(var i=0;i<ti.length;i++)
            { if (ti[i].checked)
               { 
                 num=ti[i].value;
               }
            }
           if(num==1){ 
				page1.style.display="none"
				page2.style.display="block"
        	   }
           else{
				cuowu.style.display="block"
        	}
       
		setTimeout(function(){
			cuowu.style.display="none";
			
		},1000) }
		anniu2.onclick=function(){
		 var num=null;
		 var ti=document.getElementsByName("ti");
		    for(var i=0;i<ti.length;i++)
		    { if (ti[i].checked)
		       { 
		         num=ti[i].value;
		       }
		    }
		   if(num==1){ 
				page2.style.display="none"
				page3.style.display="block"
			   }
		   else{
				cuowu1.style.display="block"
			}
		       
		setTimeout(function(){
			cuowu1.style.display="none";
		},1000) }
		anniu3.onclick=function(){
		 var num=null;
		 var ti=document.getElementsByName("ti");
		    for(var i=0;i<ti.length;i++)
		    { if (ti[i].checked)
		       { 
		         num=ti[i].value;
		       }
		    }
		   if(num==3){ 
				page3.style.display="none"
				page4.style.display="block"
			   }
		   else{
				cuowu2.style.display="block"
			}
		       
		setTimeout(function(){
			cuowu2.style.display="none";
			
		},1000) }
		anniu4.onclick=function(){
		 var num=null;
		 var ti=document.getElementsByName("ti");
		    for(var i=0;i<ti.length;i++)
		    { if (ti[i].checked)
		       { 
		         num=ti[i].value;
		       }
		    }
		   if(num==3){ 
				page4.style.display="none"
				page5.style.display="block"
			   }
		   else{
				cuowu3.style.display="block"
			}
		       
		setTimeout(function(){
			cuowu3.style.display="none";
			
		},1000) }
		anniu5.onclick=function(){
		 var num=null;
		 var ti=document.getElementsByName("ti");
		    for(var i=0;i<ti.length;i++)
		    { if (ti[i].checked)
		       { 
		         num=ti[i].value;
		       }
		    }
		   if(num==3){ 
				page5.style.display="none"
				page1.style.display="block"
			   }
		   else{
				cuowu4.style.display="block"
			}
		       
		setTimeout(function(){
			cuowu4.style.display="none";
			
		},1000) }
		
		next.onclick=function(){
			page1.style.display="none"
			page2.style.display="block"
		}
		next2.onclick=function(){
			page2.style.display="none"
			page3.style.display="block"
		}
		next3.onclick=function(){
			page3.style.display="none"
			page4.style.display="block"
		}
		next4.onclick=function(){
			page4.style.display="none"
			page5.style.display="block"
		}
		next5.onclick=function(){
			page5.style.display="none"
			page6.style.display="block"
		}
		