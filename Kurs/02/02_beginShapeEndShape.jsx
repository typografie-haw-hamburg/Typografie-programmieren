// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  println("Die Seitenbreite beträgt: " + width + " mm");
  println("Die Seitenhöhe beträgt: " + height + " mm");

  fill(255, 0, 0);
  rect(50, 50, 100, 100);

  fill(255, 0, 255);

  beginShape( CLOSE );

    vertex(0, 0);
    vertex(width, height / 2);
    vertex(0, height / 2);
    vertex(width, height);

  endShape();

}
