

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

        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');    
        } else {
            $('.hor-nav>li').removeClass('open');
            $(this).parent().toggleClass('open');
        }

        


    });




    $(".searchPanel").click(function(e) {
        $(".searching").toggleClass("menuOpen");
        if (  $('.hamburger').hasClass('menuOpen') ) {
            $('.hamburger').removeClass('menuOpen');
        }
        e.preventDefault();
    });

});




