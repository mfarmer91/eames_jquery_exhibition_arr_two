//img_five_overlays
//var $overlay = $('<div id="overlay"><div>');
//var $overlay_two = $('<div id="overlay_two"><div>');

//$("body").append($overlay);
//$("body").append($overlay_two);

var $eames_one = $("#eames_one");
var $eames_elephant = $("#eames_elephant");



//img_five_functions
$("#img_five_link").click(function() {
    //1, disable usual behavior of image.
    event.preventDefault();
    
    $("#eames_one").show();
//    $("#eames_elephant").show();
    $overlay.show();
    $overlay_two.show();
});

$eames_one.click(function() {
    event.preventDefault();
    $eames_one.hide();
    $overlay_two.hide();
})

$("#eames_text").click(function() {
    event.preventDefault();
})


$("#imageGallery img").click(function() {
    //1, disable usual behavior of image.
    event.preventDefault();
    $(this).hide();
    $(this).next().show();
});

$("p").click(function() {
    event.preventDefault();
    $(this).hide();
    $(this).prev().show();
    
});

$(".row_of_two_container a").click(function() {
    //1, disable usual behavior of image.
    event.preventDefault();
    $("#eames_text_two").show();
    $("#eames_text_three").show();
}); 

$("#eames_text_three").click(function() {
    event.preventDefault();
    $(this).remove();
    
});

$("#eames_text_two").click(function() {
    event.preventDefault();
    $(this).remove();
    
});


