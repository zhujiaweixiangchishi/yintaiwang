window.onload=function(){
var  bn_imgs=document.getElementsByClassName("bn_img");
var  btns=document.getElementsByClassName("zt-bbox-middle-y");
var  banner_boxs=document.getElementsByClassName("zt-bbox")[0]
var  boxcolor=["#f7f7f5","#a8d9f9","#008acb","#aa303f"]
var  ztbbox=document.getElementsByClassName("zt-bbox")[0]
	for (var i = 0; i < bn_imgs.length; i++) {
		 btns[i].index=i;
		 btns[i].onmouseover=function(){
		 for (var i = 0; i < bn_imgs.length; i++) {
		 	   btns[i].style.background="#555"
		 	   bn_imgs[i].style.zIndex="1";
		 };
        btns[this.index].style.background="red"
        bn_imgs[this.index].style.zIndex="2";
        banner_boxs.style.backgroundColor=boxcolor[this.index]
		 }
	};
var t=setInterval(move,3000);//move为回调函数
     var num=0;
     function move(){
        num++;
        if(num==btns.length){
            num=0;
            }
        for (var i = 0; i < bn_imgs.length; i++) {
            bn_imgs[i].style.zIndex="1";
            btns[i].style.backgroundColor="#555";
        }
        btns[num].style.backgroundColor="red";
        bn_imgs[num].style.zIndex="2";
        banner_boxs.style.backgroundColor=boxcolor[num];

     ztbbox.onmouseover=function(){
            clearInterval(t)
     }
     ztbbox.onmouseout=function(){
            t=setInterval(move,3000)
     }
     }






//左侧点击切换图片
	var  boxs=getClass("box");//获取
	var  lefts=getClass("left");
	var  rights=getClass("right");
	var  inners=getClass("inner")

	//出进效果
  for (var i = 0; i < 9; i++) {
      lunboxiao(boxs[i],lefts[i],rights[i],inners[i])

  };
  function lunboxiao(boxs,lefts,rights,inners){
    boxs.onmouseover=function(){
    	animate(lefts,{left:0},200)
    	animate(rights,{right:0},200)
    }
    boxs.onmouseout=function(){
    	animate(lefts,{left:-30},200)
    	animate(rights,{right:-30},200)
    }

    //当鼠标移入时变色
    lefts.onmouseover=function(){
    	this.style.backgroundPosition="left bottom"
    }
    rights.onmouseover=function(){
    	this.style.backgroundPosition="right bottom"
    }
     lefts.onmouseout=function(){
    	this.style.backgroundPosition="left top"
    }
    rights.onmouseout=function(){
    	this.style.backgroundPosition="right top"
    }
    //点击切换图片
    rights.onclick=moveright;
    lefts.onclick=moveleft;
    function moveright(){
    	animate(inners,{marginLeft:-390})
    }
    function moveleft(){
    	animate(inners,{marginLeft:0})
    }


}



//点击出现线条

        function border(obj,time){
          obj.style.position="relative";
          var div1=document.createElement("div");
          var div2=document.createElement("div");
          var div3=document.createElement("div");
           var div4=document.createElement("div");
          div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px;"
          div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px;"
          div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px;"
          div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px;"

              obj.appendChild(div1)
              obj.appendChild(div2)
              obj.appendChild(div3)
              obj.appendChild(div4)
              var width=parseInt(getStyle(obj,"width"));+2
              var height=parseInt(getStyle(obj,"height"))+2
              obj.onmouseover=function(){
                animate(div1,{width:width},time)
                animate(div2,{height:height},time)
                animate(div3,{width:width},time)
                animate(div4,{height:height},time)
              }
               obj.onmouseout=function(){
                animate(div1,{width,width:0},time)
                animate(div2,{height,height:0},time)
                animate(div3,{width,width:0},time)
                animate(div4,{height,height:0},time)
              }
        }

        var one=$(".cpxz_box11");
        var two=$(".cpxz_box12");
        var three=$(".cpxz_box13");
        var four=$(".cpxz_box14");

        for (var i = 0; i < one.length; i++) {
         border(one[i],500);
        };
         for (var i = 0; i < two.length; i++) {
         border(two[i],500);
        };
         for (var i = 0; i <three.length; i++) {
         border(three[i],500);
        };
         for (var i = 0; i < four.length; i++) {
         border(four[i],500);
        };
      


//遮罩部分

var items=document.getElementsByClassName("item");
    var masks=document.getElementsByClassName("mask");
    for (var i = 0; i < items.length; i++) {
        items[i].index=i;
        items[i].onmouseover=function(){
        masks[this.index].style.opacity="0.8"
    }
    items[i].onmouseout=function(){
        masks[this.index].style.opacity="0"
    }
    };

//侧导航部分
/*var topbar=$(".topbar")[0];*/
    var floor=$(".rightsidebarbox")[0];
    document.documentElement.scrollTop=1;
    if(document.documentElement.scrollTop==1){
      var scrollobj=document.documentElement;
    }else{
      var scrollobj=document.body;
    }
    var flag=true,flag2=false;
    window.onscroll=function(){
      var st=scrollobj.scrollTop;
      if(st>650){
        if(flag){
          flag=false; flag2=true;
/*        animate(topbar,{top:0})*/
        animate(floor,{width:52,height:555})
        }
      }else{
        flag=true;flag2=false;
 /*       animate(topbar,{top:-40})*/
        animate(floor,{width:0,height:0})
      }
    }
    //通过点击不同的按钮 获取对应楼层的offsetTOP
    //再把获取道德这个值通过动画
    //赋给可视窗口的scrollTop
    var floorbtn=$(".mask");
    var contents=$(".cpxzboxtop");
    for (var i = 0; i < floorbtn.length; i++) {
      floorbtn[i].index=i;
      floorbtn[i].onclick=function(){
        var ot=contents[this.index].offsetTop;
        animate(scrollobj,{scrollTop:ot})
      }
    };

//超值特卖选项卡
  var btnsx=document.getElementsByClassName("ztx_bbox2")//表示他是一个集合
        var consx=document.getElementsByClassName("ztx_bbox4")
        var  ztx_bbox3x=document.getElementsByClassName("ztx_bbox3x")
        for (var i = 0; i < btnsx.length; i++) {
            btnsx[i].index=i;//添加属性
            btnsx[i].onmouseover=function(){
          for (var i = 0; i < ztx_bbox3x.length; i++) {
            ztx_bbox3x[i].style.backgroundColor="#000";
            consx[i].style.display="none";
            btnsx[i].style.color="#000";
            consx[i].style.background="";
          };
                
                consx[this.index].style.display="block";
                this.style.color="red";
                ztx_bbox3x[this.index].style.backgroundColor="red";
               /* btnsx[i].style.background="blue";*/
                
                /*this.style.background="yellow";*/
            }
        }; 

//选项卡下
 var btnsxl=document.getElementsByClassName("tuijian_bbox")//表示他是一个集合
        var consxl=document.getElementsByClassName("tuijian_bboxa")
        var  ztx_bbox3xl=document.getElementsByClassName("tubiaol")
        for (var i = 0; i < btnsxl.length; i++) {
            btnsxl[i].index=i;//添加属性
            btnsxl[i].onmouseover=function(){
        for (var i = 0; i < consx.length; i++) {
          for (var i = 0; i < ztx_bbox3xl.length; i++) {
            ztx_bbox3xl[i].style.backgroundColor="#000";
            consxl[i].style.display="none";
            btnsxl[i].style.color="#000";
            consxl[i].style.display="#fff";
          };
                
                consxl[this.index].style.display="block";
                this.style.color="red";
                ztx_bbox3xl[this.index].style.backgroundColor="red";
               /* btnsx[i].style.background="blue";*/
            }
                
                /*this.style.background="yellow";*/
            }
        }; 


   //下拉导航
  var lists=$(".topfive");
  var nav2s=$(".nav2");
  for (var i = 0; i < nav2s.length; i++) {
    var lis=$("li",nav2s[i]);
    var height=lis.length*130;
    nav2s[i].height=height;
  };
for (var i = 0; i < lists.length; i++) {//遍历lists的长度
    lists[i].index=i;
  hover(lists[i],function(){  //鼠标经过执行
    nav2s[this.index].style.display="block";//设置下拉导航显示
    animate(nav2s[this.index],{height:nav2s[this.index].height})//动画显示下拉导航
  },function(){
    nav2s[this.index].style.display="none";
    nav2s[this.index].style.height="0";
    })
  }     

//返回顶部
  var obj=document.documentElement;
        var hhtop=$(".maskst")[0];
            hhtop.onclick=function(){
                var obj=document.body.scrollTop==0?document.documentElement:document.body;
                animate(obj,{scrollTop:0})
            }  




     //左侧小轮播
  var zj5three2=getClass("cpxzboxtpb");
  // console.log(zj5three2)
  var zj5threeleft=getClass("cpxzboxl");
  var zj5threeright=getClass("cpxzboxr");
function lunbo2(zj5three2,zj5threeleft,zj5threeright){//通过封装函数多次调用
    zj5threeright.onclick=function(){
      animate(zj5three2,{marginLeft:-159},1000,function(){
        var first=getFirst(this);
        this.appendChild(first)
        this.style.marginLeft="0px";
      })
    }
    zj5threeleft.onclick=function(){
      var last=getLast(zj5three2);
      var first=getFirst(zj5three2);
      zj5three2.insertBefore(last,first)
      zj5three2.style.marginLeft="-159px"
      animate(zj5three2,{marginLeft:0},1000)
    }
  }
for (var i = 0; i < zj5threeleft.length; i++) {//调用上面的函数 进行多个使用
  lunbo2(zj5three2[i],zj5threeleft[i],zj5threeright[i])
};


//图片移动
/*var ztbboxl=document.getElementsByClassName("zt-bbox-l")[0] 
  ztbboxl.onmouseover=function(){
     animate(ztbboxl,{left:1},500)
  }
  ztbboxl.onmouseout=function(){
     animate(ztbboxl,{right:-1},500)
  }
*/
























}
