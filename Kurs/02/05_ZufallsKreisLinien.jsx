// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var r = random(255);
  var g = random(255);
  var b = random(255);

  fill(r, g, b);
  noStroke();

  for ( var i = 0; i < 20; i++ ) {

    var dia = random(20, 80);

    var x = random(dia / 2, width - dia / 2);
    var y = random(0, height);

    noStroke();
    var circle = ellipse(x, y, dia, dia);

    var x1 = random(width);
    var y1 = random(height);
    var x2 = random(width);
    var y2 = random(height);

    stroke(0);
    line(x, y, x2, y2);
  }

}
