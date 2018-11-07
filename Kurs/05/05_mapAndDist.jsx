// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  stroke(255);

  for (var i = 0; i < 120; i++) {
    var x = random(width);
    var y = random(height);
    var dia = random(10, 30);

    // Abstand zwischen Seitenmitte und neuem Kreis
    var myDist = dist(width / 2, height / 2, x, y);

    // je näher an der Mitte, desto blauer
    var blue = map(myDist, 0, 200, 255, 0);

    fill(0, 0, blue);

    ellipse(x, y, dia, dia);
  }

}