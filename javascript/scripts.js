

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

var minPrice=jQuery(this).data('min-price');
var maxPrice=jQuery(this).data('max-price');
var selectedPrice=minPrice+"&"+maxPrice;
hrefString.join("&")+selectedPrice



            if(selectedPrice!==("undefined&undefined")){
                hrefString+="&"+selectedPrice;
            }


?pmax=76&prefn1=clothingSize&prefn2=productType&prefv3=black&pmin=51&prefv1=8%7C10&prefv2=Board%20Short%7CDresses&prefn3=refinementColor

?pmax=76&prefn1=clothingSize&prefn2=productType&prefv3=black%7Cgrey&prefv4=Skinny&pmin=51&prefv1=8%7C10&prefv2=Board%20Short%7CDresses&prefn3=refinementColor&prefn4=style
