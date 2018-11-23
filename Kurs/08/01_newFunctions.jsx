// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  // ellipse mit nur 3 Argumenten
  ellipse(100, 130, 20);

  // neue Formen
  triangle(50, 50, 150, 100, 30, 100);
  quad(20, 150, 200, 170, 180, 260, 40, 280);

  // Punkt, abhängig von der aktuellen Konturstärke
  point(13, 10);

  strokeWeight(5);
  point(20, 10);

}