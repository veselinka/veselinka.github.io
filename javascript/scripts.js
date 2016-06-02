

$( document ).ready(function() {

	// toggle mobile navigation
    $(".menuExpand").click(function(e) {
        $(".hamburger").toggleClass("menuOpen");
        e.preventDefault();
    });


    //
    $('.hor-nav>li span').click(function(e) {
    	$(this).parent().children('ul').toggleClass('open');
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