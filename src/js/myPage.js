
$(function(){
  var k = $(window).height();
  var flag=false;
  //点击next往下播放一屏
  $('.next').click(function(event){
    $.fn.fullpage.moveSectionDown();
  });

  //点击再来一次，使得界面回到第一屏
  $('.again-08').click(function (event) {
    $.fn.fullpage.moveTo(1,0);
  });

  $('#fullpage').fullpage({
    //是否显示项目导航
    navigation: true,

    afterLoad: function (anchorLink, index) {
      //第二屏开始
      if (index == 2) {
        $('.next').fadeOut();
        $('.search').show().animate({'right': 370}, 1500, 'easeOutBack', function () {
          //方块开始移动，文字“沙发”显示
          $('.search-words').animate({'opacity': 1}, 500, function () {
            $('.search').hide();
            //方块向右上角移动，并且缩小
            $('.search-02-1').show().animate({'height': 30, 'right': 250, 'bottom': 452}, 1000);
            //沙发图片变大
            $('.goods-02').show().animate({'height': 218}, 1000);
            //白色文字渐渐显示出来
            $('.words-02').animate({'opacity': 1}, 500, function () {
              $('.next').fadeIn();
            })
          })
        })
      }
    },

    //刚开始滚动屏幕就触发的回调函数 onLeave
    //滚动前的回调函数，接收index，nextindex是滚动到的页面的序号，从1开始计算
    //direction是滚动的方向，down或者是up
    onLeave: function (index, nextIndex, direction) {
      $('.next').fadeOut();
      if (index == 2 && nextIndex == 3) {
        //当第二屏往第三屏滚动的时候，沙发往下跑并且第三屏幕白色盒子显示
        //沙发要往第三屏幕走，走的距离就是当前屏幕的高度 ，main到底部的高度
        $('.shirt-02').show().animate({'bottom': -(k - 250), 'width': 207, 'left': 260}, 2000, function () {
          $('.img-01-a').animate({'opacity': 1}, 500, function () {
            $('.btn-01-a').animate({'opacity': 1}, 500, function () {
              $('.next').fadeIn();
            });
          });
        });
        $('.cover').show();
      }
      //从第三屏到第四屏的过渡
      if (index == 3 && nextIndex == 4) {
        $('.shirt-02').hide();
        //沙发的距离，当前屏幕的高度-250+第三屏幕的50
        $('.t1f').show().animate({'bottom': -(k - 250 + 50), 'left': 260}, 2000, function () {
          $('.this').hide();
          $('.car-img').show();
          //购物车开始往右走
          $('.car').animate({'left': '150%'}, 2000, 'easeInElastic', function () {
            $('.note').show();
            $('.note-img,.word-04-a').animate({'opacity': 1}, 1000, function () {
              $('.next').fadeIn();
            });
          });
        });
      }

      //从第四屏到第五屏的过渡
      if (index == 4 && nextIndex == 5) {
        $('.hand-05').animate({'bottom': 0}, 500, function () {
          $('.mouse-05-a').animate({'opacity': 1});
          $('.t1f-05').show().animate({'bottom': 70}, 1000, function () {
            $('.order-05').animate({'bottom': 390}, 1000, function () {
              $('.words-05').addClass('words-05-a');
              $('.next').fadeIn();
            });
          });
        });
      }
      //从第五屏到第六屏的过渡
      //沙发的距离等于 ，当前屏幕的高度减去BOX的BOTTOM值
      if (index == 5 && nextIndex == 6) {
        $('.t1f-05').animate({'bottom': -(k - 500), 'left': '40%', 'width': 65}, 1000, function () {
          $('.t1f-05').hide();
        });
        $('.box-06').animate({'left': '38%'}, 1000, function () {
          $(this).animate({'bottom': 40}, 2000, function () {
            $(this).hide();
            //开车----背景移动
            $('.section6').animate({'backgroundPositionX': '100%'}, 4000, function () {
              //动画背景执行完毕，boy出现
              $('.boy').animate({'height': 305, 'bottom': 116}, 1000, function () {
                $(this).animate({'right': 500}, 500, function () {
                  $('.door').animate({'opacity': 1}, 200, function () {
                    $('.girl').show().animate({'right': 350, 'height': 306}, 500, function () {
                      $('.pop-07').show();
                      $('.next').fadeIn();
                    });
                  });
                });
              });
            });
            $('.words-06-a').show().animate({'left': '30%'}, 2000);
            $('.pop-06').show();
          });
        });
      }
      //从第六屏到第七屏的过渡
      if (index == 6 && nextIndex == 7) {
        $('.star-07').show().animate({'opacity': 1}, 3000, function () {
          $('.good-07').show().animate({'opacity': 1}, 2000);
          $('.next').fadeIn();
        });
      }
      //从第七屏到第八屏的过渡
      if (index == 7 && nextIndex == 8) {
        //手指跟随鼠标运动
        //首先获取鼠标的坐标，然后改变元素的位置，通过JS来改变css
        $(document).mousemove(function(e){
          var x=e.pageX+1+'px';
          var y=e.pageY+1+'px';
          $('.hand-08').css({
            'left':x,
            'top':y
          });
        });
      }
    }
  });
});

