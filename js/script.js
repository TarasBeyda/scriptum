$(document).ready(function(){
    
    var browserMinWidth = parseInt($('.wrapper').css('min-width'), 10);
    var browserMaxWidth = parseInt($('.wrapper').css('max-width'), 10);
    
    // навігація по сайті
    function navigationScroll(element) {
        
        $(element).on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
        });
        
    };
    
    navigationScroll('.footer__scroll__top a');
    navigationScroll('.menu__nav__about a');
    navigationScroll('.menu__nav__works a');
    navigationScroll('.menu__nav__web a');
    navigationScroll('.menu__nav__skills a');
    navigationScroll('.menu__nav__news a');
    navigationScroll('.menu__nav__quotes a');
    navigationScroll('.menu__nav__contact a');
    
    
    // меню навігації по сайті
    $('#img__menu').on('click', function() {
        
        $(this).toggleClass('active');
        if (browserMinWidth >= 1850) {
           if ($(this).hasClass('active')) {
                $('.menu').animate({
                right: '0px'
                }, 1000);
            } else {
                $('.menu').animate({
                right: '-351.45px'
                }, 1000);
            } 
        } else {
            if ($(this).hasClass('active')) {
                $('.menu').animate({
                right: '0px'
                }, 1000);
            } else {
                $('.menu').animate({
                right: '-203.45px'
                }, 1000);
            }
        }
        
    });
    
    $(document).click(function(e) { 
        
        var menu = $('.menu'); 
        var imgMenu = $('#img__menu');
        if(e.target!=menu[0]&&!menu.has(e.target).length&&e.target!=imgMenu[0]&&!imgMenu.has(e.target).length&&imgMenu.hasClass('active')) { 
            if (browserMinWidth >= 1850) {
                $('.menu').animate({
                    right: '-351.45px'
                }, 1000);
                $('#img__menu').removeClass();
            } else {
                $('.menu').animate({
                    right: '-203.45px'
                }, 1000);
                $('#img__menu').removeClass();
            }
        }
        
    }); 
    
    $('#img__menu__small').on('click', function() {
        
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.menu__small').animate({
            height: '100%'
            }, 1000);
        } else {
            $('.menu__small').animate({
            height: '0%'
            }, 1000);
        }
        
    });
    
    $(document).click(function(e) { 
        
        var menuSmall = $('.menu__small'); 
        var imgMenuSmall = $('#img__menu__small');
        if(e.target!=menuSmall[0]&&!menuSmall.has(e.target).length&&e.target!=imgMenuSmall[0]&&!imgMenuSmall.has(e.target).length&&imgMenuSmall.hasClass('active')) { 
            $('.menu__small').animate({
            height: '0%'
            }, 1000)
            $('#img__menu__small').removeClass();
        } 
        
    });
    
    
    // skills
    $(document).scroll(function(){
        
        var windowHeight = $(window).height();
        var bodyScroll = $('body').scrollTop()+windowHeight;
        var HtmlScroll = $('html').scrollTop()+windowHeight;
        var skillsOffset = $(".skills").offset().top;
        
        if (bodyScroll >= skillsOffset || HtmlScroll >= skillsOffset) {
            if (browserMinWidth >= 1850) {
                $('.design__rate').animate({
                    width: '1093px'
                }, 2700, 'easeOutBounce');
                $('.css3__rate').animate({
                    width: '879px'
                }, 3000, 'easeOutBounce');
                $('.javascript__rate').animate({
                    width: '818px'
                }, 3300, 'easeOutBounce');
            } else if (browserMinWidth < 1850) {
                $('.design__rate').animate({
                    width: '95%'
                }, 2700, 'easeOutBounce');
                $('.css3__rate').animate({
                    width: '85%'
                }, 3000, 'easeOutBounce');
                $('.javascript__rate').animate({
                    width: '80%'
                }, 3300, 'easeOutBounce');
            }
        }
        
    });
    
    
    // parallax
    $(window).scroll(function() {
    
        // паралакс №1
//        var st = $(this).scrollTop();
//
//        function paralaxPlus(block, value) {
//            $(block).css({
//                transform: 'translate(0%, ' + value + '%'
//            });
//        };
//        function paralaxMinus(block, value) {
//            $(block).css({
//                transform: 'translate(0%, -' + value + '%'
//            });
//        };
//
//        if (browserMaxWidth <= 3500) {
//            paralaxPlus('.head img', st/2);
//            paralaxMinus('.about', st/40);
//        }
//        if (browserMaxWidth <= 1849) {
//            paralaxPlus('.head img', st*1.2);
//            paralaxMinus('.about', st/15);
//        }
//        if (browserMaxWidth <= 1199) {
//            paralaxPlus('.head img', st*1.2);
//            paralaxMinus('.about', st/15);
//        }
//        if (browserMaxWidth <= 992) {
//            paralaxPlus('.head img', st*1);
//            paralaxMinus('.about', st/15);
//        }
//        if (browserMaxWidth <= 667) {
//            paralaxPlus('.head img', st*1.2);
//            paralaxMinus('.about', st/15);
//        }
//        if (browserMaxWidth <= 480) {
//            paralaxPlus('.head img', st*1.2);
//            paralaxMinus('.about', st/40);
//        }
        
        // паралакс №2
        var wrapperHeight = parseInt($('.wrapper').css('height')); 
        if (browserMaxWidth <= 991) {
            $('.fixed').css({'height': wrapperHeight-299 + 'px'});
        }        
        if (browserMaxWidth <= 1199) {
            $('.fixed').css({'height': wrapperHeight-399 + 'px'});
        }        
        if (browserMaxWidth <= 1849) {
            $('.fixed').css({'height': wrapperHeight-499 + 'px'});
        }       
        if (browserMaxWidth <= 3500) {
            $('.fixed').css({'height': wrapperHeight-1010 + 'px'});
        }
//        $('.fixed').css({'height': wrapperHeight-499 + 'px'});
        $('.head').css({'top': -$(window).scrollTop()/3})

    });
    
    //slider
    var margin = 100;
    var count = $('.east__morth__slider').children().length;
  
    for ( var i = 0; i < count; i++) {
        $('.east__north__navigation').append($('<span>'));
    }
    
    $('.east__north__navigation span:first-child').addClass('tab-active');
    
    setInterval(function(){
        margin -= 100;
            if (margin/100 < 1 - count) {
                margin = 0;
            }
        update();
    },2500); 

    $('.east__north__navigation span').toArray().forEach(function(element, index, array) {
        (function() {
            $(element).click(function() {
                margin = index * -100;
                update();
            });
        })();
    });  
  
    function update() {
        $('.east__morth__slider').css({'margin-left': margin + '%'});  
        $('.east__north__navigation span').removeClass('tab-active');  
        $('.east__north__navigation span:nth-child(' + (Math.abs(margin/100) + 1) + ')').addClass('tab-active');
    }
    
    
    // анімація картинок в блоці work
    $('.works__img img').mouseover(function() {
        $(this).stop(true).queue('fx', function() {
            $(this).animate({
                'padding': '20px 0',
            })
            .dequeue('fx');
        })
    })    
    $('.works__img img').mouseout(function() {
        $(this).stop(true).queue('fx', function() {
            $(this).animate({
                'padding': '0 0',
            })
            .dequeue('fx');
        })
    })
      
});