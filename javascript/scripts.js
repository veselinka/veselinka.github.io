

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



// $( document ).ready(function() {
// console.log(1)

//     $(".subHamburger").click(function(e) {
    	
// 		console.log(2)    	
//         $(".subHamburger").toggleClass("subHamburger");
//         e.preventDefault();
//     });
// });








// $('.hor-nav').find('> li').click(function(e) {
// 	e.preventDefault();
//     $('.hor-nav > li').not(this).find('ul').slideUp();
//     $(this).find('ul').stop(true, true).slideToggle(400);
//     return false;

// })