// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  rectMode(CENTER);

  for(var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);

    // je weiter rechts das Rechteck, desto blauer und desto kleiner
    var blue = map(x, 0, width, 255, 0);
    var dia = map(x, 0, width, 50, 2);

    // je weiter unten das Rechteck, desto größer die Rotation
    var myRotation = map(y, 0, height, 0, 45);

    fill(0, 0, blue);

    var myRect = rect(x, y, dia, dia);
    transform(myRect, "rotate", myRotation);
  }

}