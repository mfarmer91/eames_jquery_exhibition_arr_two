//create overlay with image when image is clicked.

$(".description").remove();

//create overlay
var $overlay = $('<div id="overlay"><div>');

//add an image
var $image = $("<img>");

$overlay.append("$image");
$("body").append($overlay);



//1, disable usual behavior of image.


//2, build overlay with image

$("#all_images a").click(function() {
    event.preventDefault();
    $overlay.show();
});


$overlay.click(function() {
  // hide the overlay
  $overlay.hide();
  //could also say $(this).hide();
})
//