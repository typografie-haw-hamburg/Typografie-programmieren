// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear( b.doc() );
b.units( b.MM );

 var color1 = b.color(b.random(155, 255), b.random(155, 255), b.random(155, 255));
 var color2 = b.color(b.random(155, 255), b.random(155, 255), b.random(155, 255));

  b.gradientMode(b.RADIAL);
  b.fill(b.gradient(color1, color2, "RandomRadial"));


for(var i = 0; i < 260; i++) {

  b.textSize(12 + i);
  b.text("Ich sage nichts, und sage es, und das ist Poesie, wie ich sie brauche." + (i + 10), 0, i + 1, 210, 40);// 40, 20

  b.text("Ich sage nichts, und sage es, und das ist Poesie, wie ich sie brauche." + (i + 10), 0, 297 - i, 210, 40);// 40, 20

  }

b.fill(0);

for(var i = 0; i < 10; i++) {

var x = b.random(b.width);
var y = b.random(b.height);
var size = b.random(10, 40);

 b.textSize( size );
 b.textFont("Arial", "Bold");

var myText = b.text("Ich sage nichts, und sage es, und das ist Poesie, wie ich sie brauche.", x, y, 100, 100);

 b.typo(myText, "underline", true);

  }


}

b.go();