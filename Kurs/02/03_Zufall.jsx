// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var dia = 150;
  var x = random(dia / 2, width - dia / 2);
  var y = random(dia / 2, height - dia / 2);

  ellipse(x, y, dia, dia);

}
