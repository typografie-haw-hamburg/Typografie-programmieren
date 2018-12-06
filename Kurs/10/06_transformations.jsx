// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  noStroke();

  translate(width / 2, height / 2);

  ellipse(0, 0, 20);


  var circleCount = 12;
  var myAngle = 360 / circleCount;

  for(var i = 0; i < (circleCount * 5); i++) {

    var myRadiansAngle = radians(myAngle);
    // Arbeitsfläche um angegebene Gradzahl rotieren
    rotate(myRadiansAngle);

    fill(i * 4, 0, 0);
    ellipse(30 + i, 0, i * 0.3);

  }

  // reset all transformations, 0-point is at the top left again
  resetMatrix();
  rect(0, 0, 20, 20);


}
