$(function(){

	var one=$('.backnav')[0];
	var middleBigBanner=$('#middle-bigbanner');
	var banner=$('.banner',middleBigBanner)[0];
	var imgBox=$('.img-box',banner)[0];
	var imgs=$('div',imgBox);
	var back=$('.back',one)[0];
	var backs=$('div',back);
	var u1=$('.u1',banner)[0];
	var lis=$('li',u1);
   

	console.log(one);
	// console.log(middleBigBanner);
	// console.log(banner);
	// console.log(imgBox);
	// console.log(imgs);
	console.log(back);
	// console.log(backs);
	// console.log(u1);
	console.log(lis);


/**************轮播图****************************/
    var index=0;
    var t;
    imgs[0].style.zIndex=10;
    backs[0].style.zIndex=1;
    lis[0].style.background="white";
    lis[0].style.opacity="1";

    console.log(backs);
   
    function move(){
    	index++;
    	if(index==imgs.length){index=0}
        for(var i=0;i<imgs.length;i++){
        	// imgs[i].style.zIndex=0;
            // backs[i].style.zIndex=0;
            lis[i].style.background="";
            lis[i].style.opacity="0.6";
            animate(imgs[i],{opacity:0},1000);
            animate(backs[i],{opacity:0},1000);
        }
        
        // imgs[index].style.zIndex=10;
        // backs[index].style.zIndex=1;
        lis[index].style.background="white";
        lis[index].style.opacity="1";
        animate(imgs[index],{opacity:1},1000);
        animate(backs[index],{opacity:1},1000);
    }


    t=setInterval(move,2000);
    imgBox.onmouseover=function(){
    	clearInterval(t);
    }
    imgBox.onmouseout=function(){
    	t=setInterval(move,2000);
    }


    for(var j=0;j<lis.length;j++){
    	lis[j].index=j;
    	lis[j].onmouseover=function(){
    		for(var i=0;i<imgs.length;i++){
        	// imgs[i].style.zIndex=0;
            // backs[i].style.zIndex=0;
            lis[i].style.background="";
            lis[i].style.opacity="0.6";
            animate(imgs[i],{opacity:0},1000);
            animate(backs[i],{opacity:0},1000);
        }
        
        // imgs[this.index].style.zIndex=10;
        // backs[this.index].style.zIndex=1;
        lis[this.index].style.background="white";
        lis[this.index].style.opacity="1";
        animate(imgs[this.index],{opacity:1},1000);
        animate(backs[this.index],{opacity:1},1000);
        index=this.index;
    	}
    }

/*********************图片变大*****************************/
    var middle=$('#middle');
    var chaoLiu=$('.chaoliu',middle)[0];
    var chaolis=$('li',chaoLiu);
    var mids=$('.mid',chaoLiu);
    var bots=$('.bot',chaoLiu);


    // console.log(middle);
    // console.log(chaoLiu);
    // console.log(chaolis);
    // console.log(mids);
    // console.log(bots);

    
    for(var i=0;i<mids.length;i++){
        mids[i].onmouseover=function(){
            var midMig=$('img',this)[0];
            animate(midMig,{width:140,top:70,left:30},500);
        }
        mids[i].onmouseout=function(){
            var midMig=$('img',this)[0];
            animate(midMig,{width:120,top:80,left:40},500);
        }
    }

    for(var j=0;j<bots.length;j++){
        bots[j].onmouseover=function(){
            var midMig=$('img',this)[0];
            animate(midMig,{width:140,bottom:20,left:50},500);
        }
        bots[j].onmouseout=function(){
            var midMig=$('img',this)[0];
            animate(midMig,{width:120,bottom:30,left:60},500);
        }
    }

/********************图片移动*********************************/

    var qinZi=$('.qinzi',middle);

    
    function imgMove(obj){
        var qinU1=$('.u1',obj)[0];
        var u1divs=$('div',qinU1);
        var qinDown=$('.down',obj)[0];
        var qinRight=$('.right',qinDown)[0];
        var rightD1=$('.d1',qinRight);

        // console.log(qinU1);
        // console.log(u1divs);
        // console.log(qinRight);
        // console.log(rightD1);
         
        for(var i=0;i<u1divs.length;i++){
            u1divs[i].onmouseover=function(){
               animate(this,{left:66},500);
            }
            u1divs[i].onmouseout=function(){
               animate(this,{left:86},500);
            }
        }

        for(var j=0;j<rightD1.length;j++){
            rightD1[j].onmouseover=function(){
                var d2=$('.d2',this)[0];
                animate(d2,{right:20},500);
            }
            rightD1[j].onmouseout=function(){
                var d2=$('.d2',this)[0];
                animate(d2,{right:0},500);
            }
        }

    }

    

     for(var k=0;k<qinZi.length;k++){
        imgMove(qinZi[k]);
     }
/****************************************************/

/****************遮盖******************************/

    var  hot=$('.hot')[0];
    var  hotTb=$('.hottb',hot)[0];
    var  twFo=$('.twfo',hotTb)[0];
    var  hotlis=$('li',twFo);



    // console.log(hot); 
    // console.log(hotTb);
    // console.log(twFo);
    // console.log(hotlis);


    for(var i=0;i<hotlis.length;i++){
        
        hotlis[i].onmouseover=function(){
            var cover=$('.cover',this)[0];
            cover.style.display="block";
        }
        hotlis[i].onmouseout=function(){
            var cover=$('.cover',this)[0];
            cover.style.display="none";
        }
    }


/******************************************************/
/***************导航***************************/
var daohang=$('#daohang');
var daoBox=$('.box',daohang);
var longs=$('.long');
var sousuo=$('#sousuo');

// console.log(daohang);
// console.log(daoBox);
// console.log(longs);

var tops=[];
for(var i=0;i<longs.length;i++){
    tops.push(longs[i].offsetTop);
}

var colors=["#0AA6E8","#EA5F8D","#F7A945","#19C8A9","#64C333","#F15453","#000000","#000000"]
// console.log(tops);

var flage=true;
var flage2=true;

var yous=$('.you');


// console.log(yous);
var ch=document.documentElement.clientHeight;
var youstop=[];
var flages=[];
for(var i=0;i<yous.length;i++){
    youstop.push(yous[i].offsetTop);
    flages.push(true);
}
// console.log(youstop);
// console.log(ch);
window.onscroll=function(){
     var stop=document.body.scrollTop||document.documentElement.scrollTop;

    for(var i=0;i<youstop.length;i++){
       if(youstop[i]<stop+ch&&flages[i]){
          flages[i]=false;
           var imgs=$('img',yous[i]);
     for(var j=0;j<imgs.length;j++){
         imgs[j].src=imgs[j].getAttribute('asrc');
            }
      }
   }




     if(stop>1000){
                   if(flage){
                    flage=false;
                    daohang.style.display="block";
                   }
                }
                else if(stop<1000){
                    if(!flage){
                        flage=true;
                       daohang.style.display="none";
                    }

                }
          

      if(stop>1000){
                   if(flage2){
                    flage2=false;
                    animate(sousuo,{top:0},500);
                   }
                }
                else if(stop<1000){
                    if(!flage2){
                        flage2=true;
                        animate(sousuo,{top:-50},500);
                    }

                }

     for(var i=0;i<tops.length;i++){
                
        if(tops[i]<stop+200){
            for(j=1;j<daoBox.length-1;j++){
             daoBox[j].style.background="#626262";
            }
          daoBox[i+1].style.background=colors[i];
         }
     }


}

window.onscroll();

for(var i=0;i<daoBox.length;i++){
            daoBox[i].index=i-1;
            daoBox[i].onclick=function(){
                 animate(document.body,{scrollTop:longs[this.index].offsetTop},500);
                 animate(document.documentElement,{scrollTop:longs[this.index].offsetTop},500);
            }
          }

daoBox[daoBox.length-1].onclick=function(){
    animate(document.body,{scrollTop:0},500);
    animate(document.documentElement,{scrollTop:0},500);
}
/*********************************************/
/***************cainixihuan*************************/
var xi=$('.x1');

// var xilis=$('li',xi);

// console.log(xi);
// console.log(xilis);

function xiborder(obj){
    var xilis=$('li',obj);
for(var i=0;i<xilis.length;i++){
   xilis[i].onmouseover=function(){
    this.style.border="1px solid red";
   }
    xilis[i].onmouseout=function(){
    this.style.border="1px solid #fff";
   }
    
 }
}

for(var i=0;i<xi.length;i++){
    xiborder(xi[i]);
}
/**********************************************/
/***************下拉***********************/
var head=$('#head');
var headNav=$('.head_nav',head)[0];
var headRight=$('.head-right',headNav)[0];

var xs=$('.xs',headRight);
var xx=$('.xx',headRight);

console.log(xs);

for(var i=0;i<xs.length;i++){
    xs[i].index=i;
    hover(xs[i],function(){
       var xx=$('.xx',this);
       for(var j=0;j<xx.length;j++){
        xx[j].style.display="block";
       }
    },function(){
       var xx=$('.xx',this);
       for(var j=0;j<xx.length;j++){
        xx[j].style.display="none";
       }
    })
}
/*****************menu***********************/
var bigbannerleft=$('#bigbanner-left');
var bigs=$("li",bigbannerleft);
var menus=$(".menu",bigbannerleft);

console.log(bigbannerleft);
console.log(bigs);
console.log(menus);

for(var i=0;i<bigs.length;i++){
    bigs[i].index=i;
   hover(bigs[i],function(){
     menus[this.index].style.display="block";
     this.style.background="#fff";
   },function(){
    menus[this.index].style.display="none";
    this.style.background="#eeeded";
   })
}
/******************fudong**********************/

var fudong=$(".fudong")[0];
var fus=$('.fu',fudong);
var fufus=$('.fufu',fudong);

console.log(fudong);
console.log(fus);
console.log(fufus);


for(var i=0;i<fus.length;i++){
    fus[i].index=i;
    fus[i].onmouseover=function(){
        var fuw=fufus[this.index].offsetWidth;
        // fufus[this.index].style.display="block";
        animate(fufus[this.index],{opacity:1,left:-fuw},500);
    }
    fus[i].onmouseout=function(){
        var fuw=fufus[this.index].offsetWidth;
        // fufus[this.index].style.display="none";
        animate(fufus[this.index],{opacity:0,left:-(fuw+30)},500);
    }
}
/*******************************************/

})