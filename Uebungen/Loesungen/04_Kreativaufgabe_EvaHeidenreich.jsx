// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear(b.doc());
b.units(b.MM);



var randomNumber = b.random(0,3);

if ( randomNumber < 2){
  b.fill(21,22,59);
  b.rect(0,0,b.width,b.height);
  var x = 105;
  var y = b.random(b.height);
  var size = 100;
  var textsize = b.random(30,60);

  b.textFont("Helvetica","Bold");
  b.fill(255);
  b.textSize(textsize);
  b.text("REGEN",x,y,size,size);

}else {
  b.fill(255,188,99);
  b.rect(0,0,b.width,b.height);
  var x = b.random(b.width);
  var y = b.random(b.height);
  var size = 100;
  var textsize = b.random(30,60);

  b.textFont("Helvetica","Bold");
  b.fill(255);
  b.textSize(textsize);
  b.text("SONNE",x,y,size,size);

}



for(var i=0;i<9;i++){

var startY=b.random(b.height);
var startX=b.random(b.width);


var random=b.random(5,40);

  for(var j=0;j<random;j++){
      var size=10;
      b.stroke(255);
      b.ellipse(startX+j*1,startY+j*2,size,size);
  }



}

b.fill(255);
b.textFont("Helvetica","Regular");

b.textSize(10);
b.text("Wetterbericht / Sardinien, Hamburg",10,10,100,20);
}
b.go();
