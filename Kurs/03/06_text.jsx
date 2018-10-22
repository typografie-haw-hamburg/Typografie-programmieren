// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  text(LOREM, 0, 0, 50, 50);

  textFont("Helvetica", "Bold Oblique");
  textSize(24);
  textAlign(Justification.CENTER_ALIGN);

  var tf = text(LOREM, 100, 100, 100, 100);
  typo(tf, "skew", 30);

  fill(255, 0, 0);
  var circle = ellipse(width / 2, height / 2, 50, 50);
  opacity(circle, 50);

}
