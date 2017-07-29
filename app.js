var $eames_one = $("#eames_one");
var $eames_elephant = $("#eames_elephant");
var $imgFiveLink = $("#img_five_link");
var $eamesText = $("#eames_text");
var $eamesTextTwo = $("#eames_text_two");
var $eamesTextThree = $("#eames_text_three");
var $description = $(".description");


function showEamesOne(){
    event.preventDefault();
    $eames_one.show();
}

function hideEamesOne() {
    event.preventDefault();
    $eames_one.hide();
}

function showDescription() {
    event.preventDefault();
    $(this).hide();
    $(this).next().show();
}

function hideDescription() {
    event.preventDefault();
    $(this).hide();
    $(this).prev().show();
}

function showText(){
    event.preventDefault()
    $eamesTextTwo.show();
    $eamesTextThree.show();
}

function hideText(){
    $(this).hide();
}

$imgFiveLink.click(showEamesOne);
$eames_one.click(hideEamesOne);

$("#imageGallery img").click(showDescription);
$description.click(hideDescription);

$(".row_of_two_container a").click(showText);

$eamesTextTwo.click(hideText);
$eamesTextThree.click(hideText);


///////////////////


