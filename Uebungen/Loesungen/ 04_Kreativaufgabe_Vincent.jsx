// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

rectMode(CENTER);

var Menge = 20
var x = 0
var y = 0
var rectSize = 25


  for (var j = 0; j < Menge; j++) {
    fill(0, 0, 0 + j * 20);

      noStroke();
      for (var i = 0; i < Menge; i++) {

        fill(0 + i * 15, 0, 0 + j * 15);

        var quadrat = rect(x + j * 16, y + i * 20, rectSize, rectSize);

        transform(quadrat, "rotation", 0 + i * 4);

       }
  }

textFont("Avenir", "Heavy");
textAlign(Justification.CENTER_ALIGN);
fill(255);
stroke(255, 255, 0);

  for(var l = 0; l < 10; l++) {
    textSize(100 - l * 5);

    for (var k = 0; k < 6; k++) {

      text("QUADRAT", width / 2, height / 4 + k * 30, 200, 70);

    }
  }

// noFill();
// stroke(255);
// strokeWeight(10);
// rect(width / 2, height / 2 - 10, 200, 200);

}
