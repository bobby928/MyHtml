$(document).ready(function(){
    /*max-width=500px  下拉菜单点击事件*/
    (function () {
        var navBtn=$(".nav-list-btn");
        var navUl=$("header .nav");
        var clickNum=0;
        navBtn.click(function () {
            if(clickNum%2==0)
            {
                navUl.css("height","240px");
            }
            else{
                navUl.css("height","0px");
            }
            clickNum++;
        });

    })();
    /*banner的文字轮播*/
    (function () {
        var dotArr=$(".banner-dot .dot");//dom对象数组
        var textArr=$(".banner-list");
        var textAera=$(".banner-text");
        var index=0;
        for (var i=0;i<dotArr.length;i++)
        {
            var  dot=$(dotArr[i]);
            bandClick(dot);
        }
        function bandClick(obj){  //为圆点绑定点击事件

            obj.click(function () {
                obj.css({"background-color":"#E63A28","border":"3px solid #E63A28"});
                // index=y;
                var y=parseInt(obj.attr("name"))-1;
                index=y;//当前处于激活状态的点
                changeText(y);
            });
        }

        function changeText(i) { //文字区域的滚动
            for (var x=0;x<textArr.length;x++)
            {
                var text=$(textArr[x]);
                var  dot=$(dotArr[x]);
                if(x===i)
                {
                    text.css("display","block");
                }
                else{
                    text.css("display","none");
                    dot.css({"background-color":" #BBBBB7","border":"3px solid #8e8e8e"});
                }
            }
        }
        var timer=autoPlay();
        function autoPlay() {
            var time=window.setInterval(function () {//每隔5秒滚动一次
                if(index<dotArr.length-1)
                    index++;
                else
                    index=0;
                var  dot=$(dotArr[index]);
                dot.click();
            },4000);

            return {
                thisTime:function () {
                    return time;
                }
            }
        }
        textAera.hover(  //鼠标滑过text区域停止自动播放
            function () {
             window.clearInterval(timer.thisTime());
            },function () {
               timer=autoPlay();
            })
     })();


    /*食物的图片滚动*/
    ( function () {
        var pre_dot= $(".c2-dot ul li:nth-child(1) .dot ");
        var next_dot= $(".c2-dot ul li:nth-child(2) .dot ");
        console.log("next"+next_dot);
        console.log("pre"+pre_dot);
        var box= $(" .c2-slide-box ul");
        var flag=0;
        var timer=window.setInterval(function () {
            // console.log(" pre_dot");
            change();
         },3000);
         function change() {
             if(box.is(':animated')){//当前处于动画状态
                 box.stop(true,true);//停止被选元素所有加入列队的动画、完成当前动画
             }
             move(1,1);
         }
         pre_dot.click(function () {
             if(box.is(':animated')){//当前处于动画状态
                 box.stop(true,true);//停止被选元素所有加入列队的动画、完成当前动画
                         }
              move(0,0);
            });
        next_dot.click(function () {
            if(box.is(':animated')){//当前处于动画状态
                  box.stop(true,true);//停止被选元素所有加入列队的动画、完成当前动画
               }
               move(0,2);
            });

         function move(x,y) {

             if(box.is(':animated')){//当前处于动画状态
               box.stop(true,true);//停止被选元素所有加入列队的动画、完成当前动画
             }
             var window_width= $(window).width();
             // var pic_width=Math.floor(window_width/4);
             var pic_width=Math.ceil(window_width/2);
             var curr_left=box.position().left;
             if(-curr_left>=window_width-pic_width||y==2)//第二个圆点变红
             {

                 pre_dot.css("background-color","#F6A59E");
                 next_dot.css("background-color","#E63A28");
             }
             console.log("-curr_left1="+curr_left+" pic_width="+pic_width);
             if(-curr_left>=window_width)
             {
                 console.log("-curr_left2="+curr_left+" window_width="+window_width);
                 pre_dot.css("background-color","#E63A28");
                 next_dot.css("background-color","#F6A59E");
                 x=y=0;
             }
                 var newleft=curr_left*x-pic_width*y;
                 // console.log("newleft="+newleft+"picwith="+pic_width+"curr-left="+curr_left);
                 box.animate({
                     left: newleft
                 },500);

             }
      $(window).resize(function () {
          move(0,0);
      });
    })();
});/**
 * Created by Administrator on 2016/10/18.
 */
