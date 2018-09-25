// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear (b.doc());
b.units (b.MM);
b.size ( 190, 280);
b.noStroke();

var rotation = b.radians (180);

var imageWidth = 254 /2
var imageHeight = 290 /2
var pages = imageWidth
var bleed = 5
var black =  b.color (0);
var white =  b.color (255);
var gradient =  b.gradient (black, white, "blackWhite");

b.fill (0);
b.rect (-bleed, -bleed, b.width+bleed *2, b.height+bleed *2);

b.image ("are-you-ready-to-meet-god.jpg" , b.width - imageWidth, 100, imageWidth, imageHeight);

b.fill(255);
var textSize = 82
b.textSize(textSize);
b.textLeading (textSize -textSize /10)
b.textFont ("Bluu Next", "Bold");

b.text ( "Sin, Death, Judgement, Eternity. Are you ready to meet God?", 20, 20, b.width-20, 200)

for (var i = 0; i < pages  *2 ; i ++) {

  if (i < 3) {

   b.addPage (b.AT_END);

   if ( i == 1) {
    b.println ("10");
     b.fill(0);
     b.textFont ("Theinhardt");
     b.textSize(12)
     b.text ("I still think I am the greatest. — Kanye West" , b.width - imageWidth, 100, 100, 200);
   }

  } else {

    b.addPage (b.AT_END);


    b.fill (gradient);

    if (i % 2) {



    b.rect (0,0, 10, b.height);


    b.image ("are-you-ready-to-meet-god.jpg" , b.width - imageWidth +i /2, 100, imageWidth-i /2, imageHeight);


    b.textAlign (Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN)
    b.fill (0);
    b.textFont ("Theinhardt");
    b.textSize (30);
    b.text (i+2, 20, 100 + imageHeight- 20, 20, 20);





    }
  }

}

b.fill (0);
b.rect (0, -bleed , b.width+bleed, b.height+bleed *2);

}

b.go();
