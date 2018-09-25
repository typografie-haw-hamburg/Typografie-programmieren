// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear ( b.doc() );
  b.units ( b.MM);

  for(var i = 0; i < 250; i++){

    //Koordinaten-Position
    var x = b.random(0,b.width);
    var y = b.random(0,b.height);

    var size = b.random(0,75);
    var opacity = b.random(0,100);

    b.noStroke();

    var red1 = b.random(0,255);
    var green1 = b.random(0,255);
    var blue1 = b.random(0,255);

    var red2 = b.random(0,255);
    var green2 = b.random(0,255);
    var blue2 = b.random(0,255);

    var color1 = b.color(red1,green1,blue1);
    var color2 = b.color(red2,green2,blue2);

    var gradient = b.gradient(color1,color2);

    b.fill (gradient);

    var test = b.rect(x,y,size,size);
    b.opacity (test,opacity);
    b.blendMode(test, BlendMode.OVERLAY);
  }
  b.fill (255,255,255);
  b.textSize (100);
  b.textFont ("Helvetica", "Bold");
  b.text ("Stil", 10, 25, b.width-10, 50);
  b.text ("System", 10, 75, b.width-10, 50);
  b.text ("Methoden", 10, 125, b.width-10, 50);

}

b.go();
