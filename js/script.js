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
            $('.menu').animate({
            right: '-203.45px'
            }, 1000);
            $('#img__menu').removeClass();
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
        var b = $('body').scrollTop()+windowHeight;
        var a = $(".skills").offset().top;
        if (b>=a) {
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
            } else {
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
    
    $(window).scroll(function() {
    
        var st = $(this).scrollTop();

        function paralaxPlus(block, value) {
            $(block).css({
                transform: 'translate(0%, ' + value + '%'
            });
        };
        function paralaxMinus(block, value) {
            $(block).css({
                transform: 'translate(0%, -' + value + '%'
            });
        };

        if (browserMaxWidth <= 3500) {
            paralaxPlus('.head img', st/2);
            paralaxMinus('.about', st/40);
            paralaxMinus('.works', st/38);
            paralaxMinus('.web__develp', st/30);
            paralaxMinus('.skills', st/17);
            paralaxMinus('.telephone', st/17);
            paralaxMinus('.news', st/16);
            paralaxMinus('.east__north', st/23);
            paralaxMinus('.contact__us', st/17);
        //    paralaxMinus('.footer', st*1.15);
        }
        if (browserMaxWidth <= 1849) {
            paralaxPlus('.head img', st*1.2);
            paralaxMinus('.about', st/15);
            paralaxMinus('.works', st/18);
            paralaxMinus('.web__develp', st/14);
            paralaxMinus('.skills', st/7.5);
            paralaxMinus('.telephone', st/8.5);
            paralaxMinus('.news', st/8.5);
            paralaxMinus('.east__north', st/15.3);
            paralaxMinus('.contact__us', st/11.3);
        //    paralaxMinus('.footer', st*1.15);
        }
        if (browserMaxWidth <= 1199) {
            paralaxPlus('.head img', st*1.2);
            paralaxMinus('.about', st/15);
            paralaxMinus('.works', st/18);
            paralaxMinus('.web__develp', st/10);
            paralaxMinus('.skills', st/8);
            paralaxMinus('.telephone', st/8.5);
            paralaxMinus('.news', st/8);
            paralaxMinus('.east__north', st/8.5);
            paralaxMinus('.contact__us', st/10);
        //    paralaxMinus('.footer', st*1.15);
        }
        if (browserMaxWidth <= 992) {
            paralaxPlus('.head img', st*1.2);
            paralaxMinus('.about', st/15);
            paralaxMinus('.works', st/19.5);
            paralaxMinus('.web__develp', st/10);
            paralaxMinus('.skills', st/12);
            paralaxMinus('.telephone', st/35);
            paralaxMinus('.news', st/15);
            paralaxMinus('.east__north', st/13);
            paralaxMinus('.contact__us', st/17.5);
        //    paralaxMinus('.footer', st*1.15);
        }
        if (browserMaxWidth <= 667) {
            paralaxPlus('.head img', st*1.2);
            paralaxMinus('.about', st/15);
            paralaxMinus('.works', st/30);
            paralaxMinus('.web__develp', st/29);
            paralaxMinus('.skills', st/15);
            paralaxMinus('.telephone', st/60);
            paralaxMinus('.news', st/65);
            paralaxMinus('.east__north', st/29);
            paralaxMinus('.contact__us', st/27);
        //    paralaxMinus('.footer', st*1.15);
        }
        if (browserMaxWidth <= 480) {
            paralaxPlus('.head img', st*1.2);
            paralaxMinus('.about', st/40);
            paralaxMinus('.works', st/30);
            paralaxMinus('.web__develp', st/29);
            paralaxMinus('.skills', st/15);
            paralaxMinus('.telephone', st/70);
            paralaxMinus('.news', st/55);
            paralaxMinus('.east__north', st/33);
            paralaxMinus('.contact__us', st/27);
        //    paralaxMinus('.footer', st*1.15);
        }

    });
    
});

