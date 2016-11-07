$(document).ready(function(){
    $('.footer__scroll__top a').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
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
    } else
    if (a>b) {
        $('.design__rate').css('width', '0%');
        $('.css3__rate').css('width', '0%');
        $('.javascript__rate').css('width', '0%');
    }
});
