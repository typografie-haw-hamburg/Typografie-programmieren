// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear( b.doc() );
  b.units(b.MM);

var blue = b.color(148, 169, 208);
var green = b.color(134, 207, 190);
b.gradientMode(b.LINEAR)
b.fill (b.gradient (blue,green, "bluegreen"));
b.rect (0, 0, b.width, b.height)

  for(var i=0; i<100; i++) {

  var x = b.random(b.width);
  var y = b.random(b.height);
  var RandomNumber = b.random(10, 20);

    if (x > b.width/2 && y < b.height/2) {
      b.fill(117, 137, 191);
      b.ellipse(x, y, RandomNumber, RandomNumber);
    } else {
     b.fill(0);
         b.ellipse(x, y , RandomNumber, RandomNumber);

     }
    if (x < b.width/2 && y > b.height/2) {
      b.fill(72, 181, 163);
    b.ellipse(x, y , RandomNumber, RandomNumber);



   }


  }

}

b.go();
