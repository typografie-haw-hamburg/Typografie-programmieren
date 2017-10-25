// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear (b.doc());

//define colors
  var blue = b.color (0, 0, 255);
  var red = b.color (255, 0, 0);

  var red = b.random(255);
  var green = b.random(255);
  var blue = b.random(255);
  var color = b.color (red, green, blue);
  var j = 0

  b.println (red,green,blue);

//define text h1
  b.textSize(40);
  b.textFont ("Helvetica", "Bold");
  b.textAlign(Justification.FULLY_JUSTIFIED);
  b.text ("Opacity of " + red + green + blue + " RGB from 100% to 62%.", 0, 0, b.width, 300);

//define text numbers
  b.textAlign(Justification.LEFT_ALIGN );
  b.textFont ("Helvetica", "Regular");
  b.textSize(10);

//loop 1
  for (var i = 0; i < 40; i++) {

    var y = 0+i*30
    var x = b.width /6
    b.println ("y:" + y );
    b.println ("x:" + x );
    b.println ("height: " + b.height);

//check y position
    if (y > b.height) {

      j++
      x = x+ 100
      y = 0+j*30

      b.println ("new x:" + x)
      b.println ("j:" + j)

    } else if (y > b.height && x > 200) {

       j++
      x = x+ 100
      y = 0+j*30

      b.println ("new x:" + x)
      b.println ("j:" + j)
    }

    b.stroke(0);

// numbers count
    b.fill(0);
    var text = b.text (100-i, x, y, 20  , 15);

    b.noStroke();

//colored rectangles
    b.fill (color);
    var rect = b.rect (x + 15, y, 20  , 20)

    b.opacity (rect, 100-i);

  }

}


b.go();
