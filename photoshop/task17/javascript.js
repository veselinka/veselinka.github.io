$(function() {
    var availableTags = [
        "Palace",
        "Palace T-Shirt",
        "Palace All Terrain Bucket Hat",
        "Palace Tri-Line Yard T-Shirt",
        "Palace Cotch Jacket",
        "Palace Clothing",
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#search").autocomplete({
        source: availableTags
    }).css({ 'backgroundColor': '#00e1f5' });
});





$(document).ready(function() {
    $("#closeBanner").click(function() {
        $(this).closest("div").hide();
    });
    $("#searchImg").on("click", function(e) {
        $(".searchPanel").css({ "display": 'block' });
    });

    $("#closeSearch").click(function() {
        event.stopPropagation();
        $(".searchPanel").css({ "display": 'none' });
    });
});

