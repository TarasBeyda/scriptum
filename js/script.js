$(document).ready(function(){
    
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
        if ($(this).hasClass('active')) {
            $('.menu').animate({
            right: '0px'
            }, 1000);
        } else {
            $('.menu').animate({
            right: '-203.45px'
            }, 1000);
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
    
});

$(document).scroll(function(){
    var b = $('body').scrollTop()+900;
    var a = $(".skills").offset().top;
    var c = $('.telephone').offset().top;
    console.log(a);
    console.log(b);
    if (a<b) {
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
    if (a>b) {
        $('.design__rate').css('width', '0%');
        $('.css3__rate').css('width', '0%');
        $('.javascript__rate').css('width', '0%');
    }
});
