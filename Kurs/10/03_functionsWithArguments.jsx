// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();

  drawCircle(20);
  drawCircle(80);
  drawCircle(200);

}

function drawCircle( dia ) {

  var x = random(dia / 2, width - dia / 2);
  var y = random(dia / 2, height - dia / 2);

  ellipse(x, y, dia);

}
