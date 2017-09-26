//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units(b.MM);
b.clear(b.doc());
b.noStroke();

var imgCount = 10; 
var allImages = [];

for(i = 1; i <= imgCount; i++){
  var imageName = "banana" + i + ".png";
  allImages.push(imageName);
}

  for(i = 0; i < 10; i++){
    var scale = 7;
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var randomImageNumber = b.round(b.random(1, imgCount));

    b.println(randomImageNumber);
    // var randomImage = allImages[randomImageNumber];

    // var img = b.image(randomImage, x, y)

    // var imgWidth = b.itemWidth(img)*scale;
    // var imgHeight = b.itemHeight(img)*scale;

    // b.transformImage(img, x, y + i*imgHeight, imgWidth, imgHeight);   
}
}
b.go();
