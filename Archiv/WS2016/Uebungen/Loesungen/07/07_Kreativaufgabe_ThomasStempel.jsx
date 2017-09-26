//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units(b.MM);
b.noStroke();
b.clear(b.doc());

var imgCount = 14; 
var allImages = [];

for(i = 1; i <= imgCount; i++){
var imageName = "kreis" + i + ".png";
allImages.push(imageName);
}
var numbers = [];
for (i = 1; i < 45; i++){
var randomNumbers  = b.round(b.random(1, 3));
numbers.push(randomNumbers);
}

for(i = 0; i < numbers.length; i++){
var scale = 1.7;
var x = b.random(0, 2);
var y = b.random(0, 2);
  
var img = b.image(allImages[numbers[i]], 10, 10);
var imgWidth = b.itemWidth(img)*scale;
var imgHeight = b.itemHeight(img)*scale;

var randomScaleX = b.random(0.3,  1.9);
var randomScaleY = b.random(0.3,   1.9);
  b.transformImage(img, x, y, imgWidth*randomScaleX, imgHeight*randomScaleY);   
}

}
b.go();
