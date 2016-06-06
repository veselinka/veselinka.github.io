

$( document ).ready(function() {

	// toggle mobile navigation
    $(".menuExpand").click(function(e) {
        $(".hamburger").toggleClass("menuOpen");
        if (  $('.searching').hasClass('menuOpen') ) {
            $('.searching').removeClass('menuOpen');
        }
         $('.hor-nav>li ul').removeClass('open');
        e.preventDefault();
    });

    $('.hor-nav>li span').click(function(e) {
        $(this).parent().siblings().children('ul').removeClass('open');
    	$(this).parent().children('ul').toggleClass('open');


    });




    $(".searchPanel").click(function(e) {
        $(".searching").toggleClass("menuOpen");
        if (  $('.hamburger').hasClass('menuOpen') ) {
            $('.hamburger').removeClass('menuOpen');
        }
        e.preventDefault();
    });

});




