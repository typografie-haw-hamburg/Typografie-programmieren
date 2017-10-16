// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear ( b.doc() );
  b.units ( b.MM);

  b.noStroke();

  // 1/3
  for(var i = 0; i < 250; i++){ //i < 500; i<750

    var red = b.random(0,255);
    var green = b.random(0,255);
    var blue = b.random(0,255);

    b.fill (red,green,blue);

    if (red>220) {
    var x1= b.random(0,b.width);
    var y1= b.random(0,b.height/3);

    var size = b.random (5,25);

    var blend1 = b.rect (x1,y1,size,size)
    b.blendMode(blend1, BlendMode.DARKEN);
    } else {
    }
  }

  // 2/3
  for(var i = 0; i < 250; i++){ //i < 500; i<750

    var red = b.random(0,255);
    var green = b.random(0,255);
    var blue = b.random(0,255);

    b.fill (red,green,blue);

    if (green>220) {
    var x2= b.random(0,b.width);
    var y2= b.random(b.height/3, b.height/3*2);

    var size = b.random (5,25);

    var blend2 = b.rect (x2,y2,size,size)
    b.blendMode(blend2, BlendMode.HUE);
    } else {
    }
  }

  // 3/3
  for(var i = 0; i < 250; i++){ //i < 500; i<750

    var red = b.random(0,255);
    var green = b.random(0,255);
    var blue = b.random(0,255);

    b.fill (red,green,blue);

    if (blue>220) {
    var x3= b.random(0,b.width);
    var y3= b.random(b.height/3*2, b.height);

    var size = b.random (5,25);

    var blend2 = b.rect (x3,y3,size,size)
    b.blendMode(blend2, BlendMode.LIGHTEN);
    } else {
    }
  }
  // Typo

  b.fill (0,0,0);
  b.textSize (250);
  b.textFont ("GT America", "Expanded Bold");

  var xcolor1 = b.random (0,175);
  var ycolor1 = b.random (0,250);
  b.text ("f", xcolor1, ycolor1, 100, 200);

  var xcolor2 = b.random (0,175);
  var ycolor2 = b.random (0,250);
  b.text ("a", xcolor2, ycolor2, 100, 200);

  var xcolor3 = b.random (0,175);
  var ycolor3 = b.random (0,250);
  b.text ("r", xcolor3, ycolor3, 100, 200);

  var xcolor4 = b.random (0,175);
  var ycolor4 = b.random (0,250);
  b.text ("b", xcolor4, ycolor4, 100, 200);

  var xcolor5 = b.random (0,175);
  var ycolor5 = b.random (0,250);
  b.text ("e", xcolor5, ycolor5, 100, 200);

  var xcolor6 = b.random (0,175);
  var ycolor6 = b.random (0,250);
  b.text ("n", xcolor6, ycolor6, 100, 200);

}

b.go();
