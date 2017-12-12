
var i = 0 ;
var timer;
 
 $(document).ready(function(){

  //用jquery方法设置第一张图片显示，其余隐藏
   $('.pic').eq(0).show().siblings('.pic').hide(); 
  //调用showTime()函数（轮播函数）
  showTime();
   
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $('.round').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
  
  //鼠标点击左侧的箭头
  $('.btn1').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 6;//注意此时i的值
    }
    i--;
    Show();
    showTime();
  });
 

   
  //鼠标点击右侧的箭头
  $('.btn2').click(function(){
    clearInterval(timer);
    if(i == 5){
      i = -1;//注意此时i的值
    }
    i++;
    Show();
    showTime();
  });
   
//创建一个showTime函数
function showTime(){
  //定时器
  timer = setInterval(function(){
    //调用一个Show()函数
    Show();
    i++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(i==5){
      i=0;
    }
  },3000);
}
//创建一个Show函数
function Show(){
  //在这里可以用其他jquery的动画
    $('.pic').eq(i).fadeIn(300).siblings('.pic').fadeOut(300);
   
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.round').eq(i).addClass('bg').siblings('.round').removeClass('bg');
  
  /*
   * css中添加的代码：
   * .bg{ background-color: #f00; }
   * */
}


var i = 0 ;
var timer;
 
 $(document).ready(function(){

  //用jquery方法设置第一张图片显示，其余隐藏
  $('.picture').eq(0).show().siblings('.picture').hide();  
  //调用showTime()函数（轮播函数）
  showTime();
   
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $('.rounds').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
  //鼠标点击左侧的箭头
  $('.btn3').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 3;//注意此时i的值
    }
    i--;
    Show();
    showTime();
  });

   
  //鼠标点击右侧的箭头
  $('.btn4').click(function(){
    clearInterval(timer);
    if(i == 2){
      i = -1;//注意此时i的值
    }
    i++;
    Show();
    showTime();
  });
   
});

   
//创建一个showTime函数
function showTime(){
  //定时器
  timer = setInterval(function(){
    //调用一个Show()函数
    Show();
    i++;
    //当图片是最后一张的后面时，设置图片为第一张
    if(i==2){
      i=0;
    }
  },3000);
}
//创建一个Show函数
function Show(){
  //在这里可以用其他jquery的动画
  $('.picture').eq(i).fadeIn(300).siblings('.picture').fadeOut(300);  
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.rounds').eq(i).addClass('bg').siblings('.rounds').removeClass('bg');
   
  /*
   * css中添加的代码：
   * .bg{ background-color: #f00; }
   * */
}
 });

 	$(function(){
	$(".back-top").click(function(){
          	var speed=500;//滑动的速度
            $('body,html').animate({ scrollTop: 0 }, speed);
            return false;
          })	
	})