// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  // um das Script auszuführen, muss zunächst ein Objektformat namens "Schlagschatten" angelegt werden

  clear(doc());

  fill(0, 0, 255);

  var ell = ellipse(50, 50, 50);

  applyObjectStyle(ell, "Schlagschatten");

  fill(255, 0, 0);

  beginShape();
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
  var myShape = endShape(CLOSE);

  applyObjectStyle(myShape, "Schlagschatten");

}