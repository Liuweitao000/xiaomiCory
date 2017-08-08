/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
    //1.发生的目标元素 a
    //2.什么事件 mouseover mouseout
    //3.改变链接颜色
    //========头部特效========
    $('.top a').mouseover(function () {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    })
    //==========购物车特效============
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#ff6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    })
    //=========头部特效、输入框特效=========
    var flag = true;
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid rgb(224,224,224)');
            $('.ser2').css('border', '1px solid rgb(224,224,224)').css('borderLeft', 'none');
        }
    })
    //=========热门搜索的移入效果=========
    $('.hot a').mouseover(function () {
        $(this).css({'color': '#fff', 'background': 'orangered'})
    }).mouseout(function () {
        $(this).css({'color': '#757575', 'background': '#eee'})
    })
    //===========按钮移入后的效果
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({'border': '1px solid #ccc','border-righg': 'none'});
            $(this).css({'background': 'rgb(255,103,0)', 'color': '#fff', 'border': '1px solid rgb(255,103,0)', 'border-left': 'none'})
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid rgb(224,224,224)');
            $(this).css({'background': '#fff', 'color': 'rgb(105,110,108)', 'border': '1px solid #ccc', 'border-left': 'none'
            });
        }
    })
    $('.ser1 input').focus(function () {
        flag = false;
        $('.hot').css('display', 'none');
        $(this).css('border-color', 'rgb(255,103,0)');
        $('.ser2').css('border-color', 'rgb(255,103,0)');
        $('.keywordsList').show().css('border-color', 'rgb(255,103,0)');
    }).blur(function () {
        flag = true;
        $('.hot').css('display', 'block');
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
    })
    //===========导航效果===========
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#FF6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();//停止哦当前动画和动画队列
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', 'black');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();//停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    })
    //===========轮播图=========
    var num = 0;
    var timer;
    timer = setInterval(autoplay, 5000)
    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();displayImg();
    })
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 5000)
    })
    $('.direc-L').click(function () {
        //上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0) {num = 4;}
        displayImg();
    })
    $('.direc-R').click(function () {
        //下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4) {num = 0;}
        displayImg();
    })
    function displayImg() {
        $('.round li').eq(num).css('background', '#fff').siblings().css({'background': '#342416', 'opacity': '.8'});
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay() {
        num++;
        if (num > 4) {num = 0;}
        displayImg();
    }
    $('.navB-ul li').mouseover(function () {
        $(this).find('a').css('color','white');
    }).mouseout(function () {
        $(this).find('a').css('color','#cfcdcb');
    })
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    })
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    })
    //===========明星单品=============
    function starResult(obj1,obj2,n) {
        obj1.mouseover(function () {
            if($('.mistar-main').eq(n).css('display') != 'block') {
                $(this).css('color', '#ff6700');
            }
        }).click(function () {
            obj1.css('color', 'rgb(223,223,224)');
            obj2.css('color', 'rgb(176,180,188)');
            $('.mistar-main').eq(n).removeClass('hide').siblings('ul').addClass('hide');
        }).mouseout(function () {
            if($('.mistar-main').eq(n).css('display') != 'block') {
                $(this).css('color','rgb(176,180,188)');
            }else {$(this).css('color','rgb(223,223,224)');}
        })
    }
    starResult($('.mistarR1'),$('.mistarL1'),1);
    starResult($('.mistarL1'),$('.mistarR1'),0);
    var m = 0;
    m = setInterval(function () {
        m++;
        if (m > 2) {m = 0;}
        $('.mistar-head div').eq(m).css('color', 'rgb(176,180,188)').siblings('div').css('color', 'rgb(223,223,224)');
        $('.mistar-main').eq(m).removeClass('hide').siblings('ul').addClass('hide');
    }, 5000)
    //===========列表单品
    $('.lookUp').mouseover(function () {
        $('.lookUp a').css('color', '#ff6700');
        $('.lookUp div').css('background', '#ff6700');
    }).mouseout(function () {
        $('.lookUp a').css('color', '#000');
        $('.lookUp div').css('background', 'rgb(176,176,176)');
    })
    $('.inHardware-ul li').mouseover(function () {
        $(this).css({'margin-top': '19px', 'box-shadow': '0 0 30px rgb(170,170,170)'
        }).find('.service').stop(true, false).slideDown().removeClass('hide');
    }).mouseout(function () {
        $(this).css({'margin-top': '20px', 'box-shadow': '0 0 0 rgb(160,160,160)'
        }).find('.service').stop(true, false).slideUp().addClass('hide');
    })
//    ===========Tab切换效果=========
    function tabChange(obj1,obj2) {
        obj1.mouseover(function () {
            obj1.css({'color': '#000', 'border-bottom': '2px solid transparent'});
            $(this).css({'color': '#ff6700', 'border-bottom': '2px solid #ff6700'})
            obj2.eq($(this).index() + 1).removeClass('hide').siblings('ul').addClass('hide');
        })
    }
    tabChange($('.matchH31 li'),$('.match1 ul'));
    tabChange($('.matchH32 li'),$('.match2 ul'));
    tabChange($('.matchH33 li'),$('.match3 ul'));
//============为你推荐===================
    function mistarRLD(obj,n) {
        obj.mouseover(function () {
            if($('.recommendUl').eq(n).css('display') != 'block'){
                $(this).css('color', '#ff6700');
            }else {$(this).css('color','rgb(223,223,224)');}
        }).mouseout(function () {
            if($('.recommendUl').eq(n).css('display') != 'block'){
                $(this).css('color', 'rgb(176,180,188)');
            }else {$(this).css('color','rgb(223,223,224)');}
        })
    }
    mistarRLD($('.mistarR2'),3);
    mistarRLD($('.mistarL2'),0);
    var w = 0;
    function mistarRLQ(obj) {
        obj.css('color', 'rgb(176,180,188)');
        $('.recommendUl').eq(w).removeClass('hide').siblings('ul').addClass('hide');
    }
    $('.mistarR2').click(function () {
        ++w;
        if (w <= 3) {
           mistarRLQ($('.mistarL2'));
        } else { w--;}
    })
    $('.mistarL2').click(function () {
        w--;
        if (w >= 0) {
            mistarRLQ($('.mistarR2'));
        } else { w++;}
    })
//============= 内容 =======================
    $('.contList li').mouseover(function () {
        $(this).find('.p2').css('background', 'rgb(176, 176, 176)');
    }).mouseout(function () {
        $(this).find('.p2').css('background', 'rgb(255, 255, 255)');
    })
    $('.round2 p').click(function () {
        $(this).css({
            'background': 'white',
            'border': '2px solid #ff6700'
        }).siblings('p').css({'background': 'rgb(176,176,176)', 'border': '2px solid white'});
    }).mouseover(function () {
        if($(this).css('background-color') == 'rgb(176, 176, 176)'){
            $(this).css('background','#ff6700');
        }
    }).mouseout(function () {
        if($(this).css('background-color') == 'rgb(255, 103, 0)'){
            $(this).css('background','#b0b0b0');
        }
    })
    var n1 = 0,n2 = 0,n3 = 0,n4 = 0;
    function contentChange(obj1,obj2,obj3,obj4,n) {
        obj1.click(function () {
            n = $(this).index();
            obj2.eq(n).removeClass('hide').siblings('li').addClass('hide');
        })
        obj3.click(function () {
            ++n;
            if (n <= 3) {contentResult();
            } else {n--;}
        })
        obj4.click(function () {
            n--;
            if (n >= 0) {contentResult();
            } else {n++;}
        })
        function contentResult() {
            obj2.eq(n).removeClass('hide').siblings('li').addClass('hide');
            obj1.eq(n).css({'background':'white','border':'2px solid #ff6700'}).siblings('p').css({'background':'rgb(176,176,176)','border':'2px solid white'})
        }
    }
    contentChange($('.roundP1 p'),$('.contBox li'),$('.contList .R1'),$('.contList .L1'),n1);
    contentChange($('.roundP2 p'),$('.contListLi2 li'),$('.contList .R2'),$('.contList .L2'),n2);
    contentChange($('.roundP3 p'),$('.contListLi3 li'),$('.contList .R3'),$('.contList .L3'),n3);
    contentChange($('.roundP4 p'),$('.contListLi4 li'),$('.contList .R4'),$('.contList .L4'),n4);
//    ================ 视频 ===============
    $('.toAll').mouseover(function () {
        $('.toAll a').add('.toAll i').css('color','#ff6700');
    }).mouseout(function () {
        $('.toAll a').css('color','black');
        $('.toAll i').css('color','rgb(176,176,176)');
    })
    $('.videoList li img').mouseover(function () {
        $(this).next('.videoList div').css('color','#ff6700');
    }).mouseout(function () {
        $(this).next('.videoList div').css('color','white');
    })
    $('.videoList div').mouseover(function () {
        $(this).css('color','#ff6700');
    })
    //================= 底部 =====================
    $('.nav1 li').mouseover(function () {
        $(this).find('a').css('color','#ff6700');
    }).mouseout(function () {
        $('.nav1 li a').css('color','black');
    })
})