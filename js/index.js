$(function(){
    // $("*").each(function(){
    //     $(this).css("opcity","0.8");
    // })
    $(".top1 li a").each(function(i){
        $('.top1 p img').hide();
    $(this).hover(function(){
        $('.top1 p img').eq(i).fadeIn("slow").css("  z-index","20");
        $(this).css("color","red");
    },function(){
        $('.top1 p img').eq(i).fadeOut("slow");
        $(this).css("color","#333333");
        })
    })
    $(".list2 li").hover(function(){
        $(this).addClass("li-one").siblings().removeClass("li-one");
        var i = $(this).index();
        $('.more1 ul').eq(i).addClass('more').css('display','block').siblings('.more1 ul').css('display','none');
     })


    $(".nav1 li").hover(function(){
       $(this).addClass("first").siblings().removeClass("first");
       var i = $(this).index();
       $('.tab1>li').eq(i).addClass('one').css('display','block').siblings('.tab1>li').css('display','none');
    })
    $('.center>ul li').each(function(i){
        $(this).hover(function(){
            $('.center>ul li').eq(i).animate({"margin-left":"10px"},300).css("color","red");      
        },function(){
            $('.center>ul li').eq(i).animate({"margin-left":"0px"},100).css("color","#333333"); 
           
        })
    })
    $('.what>ul li').each(function(i){
        $(this).hover(function(){
            $('.what>ul li p').eq(i).animate({"margin-left":"10px"},300).css("color","red");      
        },function(){
            $('.what>ul li p').eq(i).animate({"margin-left":"0px"},100).css("color","#333333"); 
           
        })
    })
    $('.block ul').each(function(i){
        $(this).hover(function(){
            $('.block ul div a').eq(i).css("color","red");      
        },function(){
            $('.block ul div a').eq(i).css("color","#ffffff"); 
           
        })
    })
    $('.newa-left li').each(function(i){
        $(this).hover(function(){
            $('.newa-left li p').eq(i).css("color","red");      
        },function(){
            $('.newa-left li p').eq(i).css("color","#ffffff"); 
           
        })
    })
    $('.newa-bottom li').each(function(i){
        $(this).hover(function(){
            $('.newa-bottom li p').eq(i).css("color","red");      
        },function(){
            $('.newa-bottom li p').eq(i).css("color","#ffffff"); 
           
        })
    })
    $(' #new .new-left .infor li').each(function(i){
        $(this).hover(function(){
            $(' #new .new-left .infor li p').eq(i).css("color","red");      
        },function(){
            $(' #new .new-left .infor li p').eq(i).css("color","#ffffff"); 
           
        })
    })

   
    $('.star-ul li').each(function(i){
    $(this).hover(function(){
        $(".star-ul div").eq(i).slideDown("slow");
        $(".star-ul li p").eq(i).css("display","none");
    },function(){
        $(".star-ul div").eq(i).slideUp("slow"); 
        $(".star-ul li p").eq(i).css("display","block");
       
    })
})
$('.star-ul2 li').each(function(i){
    $(this).hover(function(){
        $(".star-ul2 div").eq(i).slideDown("slow");
        $(".star-ul2 li p").eq(i).css("display","none");
    },function(){
        $(".star-ul2 div").eq(i).slideUp("slow"); 
        $(".star-ul2 li p").eq(i).css("display","block");
       
    })
})
$('#mobile ul').each(function(i){
    $(this).hover(function(){
        $("#mobile ul li .hidden").eq(i).fadeIn("slow");
        $("#mobile>ul>li").eq(i).animate({ bottom: 20 }, 300).css("z-index",100);   
    },function(){
        $("#mobile ul li .hidden").eq(i).fadeOut("slow");
        $("#mobile>ul>li").eq(i).animate({ bottom: 0 }, 300).css("z-index",'');    
    })
})
////////////tow
$('.pinpai ul li').each(function(i){
    $(this).hover(function(){
        $(".pinpai ul li b").eq(i).slideDown("slow");
    },function(){
        $(".pinpai ul li b").eq(i).slideUp("slow");
    })
})
    $('.trend-left li').each(function(i){
        $(this).hover(function(){
            $('.trend-left li p b').eq(i).css("color","red");      
        },function(){
            $('.trend-left li p b').eq(i).css("color","#ffffff"); 
           
        })
    })
        $('.trend-right .right-li ').each(function(i){
        $(this).hover(function(){
            $('.trend-right .right-li p b').eq(i).css("color","red");      
        },function(){
            $('.trend-right .right-li p b').eq(i).css("color","#ffffff"); 
           
        })
    })
////////////three

   $("#nav ul .right1").hover(function(){
        $('#nav .app').fadeIn("slow").css("z-index","100");     
    },function(){
        $('#nav .app').fadeOut("slow").css("z-index","100");
    });
       $("#nav ul .right2").hover(function(){
        $('#nav .app1').fadeIn("slow").css("z-index","100");     
    },function(){
        $('#nav .app1').fadeOut("slow").css("z-index","100");
    })

     $(".special-top li").hover(function(){
        $(this).addClass("first").siblings().removeClass("first");
        var i = $(this).index();
        $('special-bottom').eq(i).addClass('special-first').css('display','block').siblings('.special-bottom').css('display','none');
     })




// $(function(){
// 	// var  i= $(".xinpin-left ul").length;
//     i = $(this).index();
// 	$('.xinpin-left .bu-right').click(function(){
//         i++;
//         $('.xinpin-left ul').eq(i).animate({'margin-left':"-790px"},500).siblings('.xinpin-left ul').css('display',"block");
       
		
//     })
    

//     $('.xinpin-left .bu-left').click(function(){
//        i--;
//        $('.xinpin-left ul').eq(i).animate({'margin-left':"790px"},500).siblings('.xinpin-left ul').css('display',"none");
// })
// })
 })
//轮播图
var i = 0 ;
var timer;
 
 $(document).ready(function(){

  //用jquery方法设置第一张图片显示，其余隐藏
   $('.pic').eq(0).show().siblings('.pic').hide();
   $('.pic1').eq(0).show().siblings('.pic1').hide();
   $('.pic2').eq(0).show().siblings('.pic2').hide();
   $('.pic3').eq(0).show().siblings('.pic3').hide();
    $('.first-block').eq(0).show().siblings('.first-block').hide();
   
   
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
    $('.round1').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
  $('.round2').hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  },function(){
    //
    showTime();
  });
    $('.round3').hover(function(){
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
   $('.bu-left').click(function(){
    clearInterval(timer);
    if(i == 0){
      i = 3;//注意此时i的值
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
  $('.bu-right').click(function(){
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
    if(i==6){
      i=0;
    }
  },3000);
}
//创建一个Show函数
function Show(){
  //在这里可以用其他jquery的动画
    $('.pic').eq(i).fadeIn(300).siblings('.pic').fadeOut(300);
    $('.pic1').eq(i).fadeIn(300).siblings('.pic1').fadeOut(300);
    $('.pic2').eq(i).fadeIn(300).siblings('.pic2').fadeOut(300);
    $('.pic3').eq(i).fadeIn(300).siblings('.pic3').fadeOut(300);
    $('.first-block').eq(i).fadeIn(300).siblings('.first-block').fadeOut(300);
   
  //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
  $('.round').eq(i).addClass('bg').siblings('.round').removeClass('bg');
  $('.round1').eq(i).addClass('bg').siblings('.round1').removeClass('bg');
  $('.round2').eq(i).addClass('bg').siblings('.round2').removeClass('bg');
  $('.round3').eq(i).addClass('bg').siblings('.round3').removeClass('bg');
   
  /*
   * css中添加的代码：
   * .bg{ background-color: #f00; }
   * */
}