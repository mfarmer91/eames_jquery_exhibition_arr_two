var $eames_one = $("#eames_one");
var $eames_elephant = $("#eames_elephant");
var $imgFiveLink = $("#img_five_link");
var $eamesText = $("#eames_text");
var $eamesTextTwo = $("#eames_text_two");
var $eamesTextThree = $("#eames_text_three");



$imgFiveLink.click(function() {
    event.preventDefault();
    $eames_one.show();
});

$eames_one.click(function() {
    event.preventDefault();
    $eames_one.hide();
})

$eamesText.click(function() {
    event.preventDefault();
})



$("#imageGallery img").click(function() {
    event.preventDefault();
    $(this).hide();
    $(this).next().show();
});

$("p").click(function() {
    event.preventDefault();
    $(this).hide();
    $(this).prev().show();
    
});


//Two text bubbles show or remove for final row of 2.

$(".row_of_two_container a").click(function() {
    //1, disable usual behavior of image.
    event.preventDefault();
    $eamesTextTwo.show();
    $eamesTextThree.show();
}); 

$eamesTextTwo.click(function() {
    event.preventDefault();
    $eamesTextTwo.remove();
    
});

$eamesTextThree.click(function() {
    event.preventDefault();
    $eamesTextThree.remove();
    
});




