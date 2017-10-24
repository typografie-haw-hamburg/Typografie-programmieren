// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);

var h = b.height;
var w = b.width;


var blue = b.color(0,30,230);
var red = b.color(200,30,0);



b.fill(blue);
b.rect(0,0,w,h);


b.textAlign(Justification.CENTER_ALIGN ,Justification.CENTER_ALIGN);


for(i=0; i<3; i++){


  var random = b.random(50);
  var red2 = b.color(200 + i * random,30,0);

  var H = "H"

  //Text Eigenschaften
  b.fill(red2);
  b.textFont("headLineA","Regular");
  b.textSize(1296);



  // Text
  b.text("H",0 + i * random, 30 + i * random, w/2, w/2);

  b.text("E",0 + w/2 + i * random, 30 + i * random, w/2, w/2);

  b.text("L",0 + i * random,100+w/2 + i * random,w/2,w/2);

  b.text("P",0+w/2 + i * random, 100+w/2 + i * random, w/2, w/2);
};


b.textSize(200);

b.text("IM b.LOST IN BASIL",0,h-200,w,250);









}
b.go();
