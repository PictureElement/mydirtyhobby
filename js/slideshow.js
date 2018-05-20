var interval = 2000; 
var random_display = 0; // 0: sequential, 1: random
var imageDir = "../assets/thumbnails/";
var totalImages = 8;
var identification = "1";
var imageArray = [];
var index = 0;

// Build array of images
for (var i = 1; i <= totalImages; i++) {
  imageArray.push(imageDir + identification + "_" + i + ".jpg");
}

// Get the next image
function getNextImage() {
  index = (imageNum + 1) % totalImages;
  var newImage = imageArray[index];
  return (newImage);
}

