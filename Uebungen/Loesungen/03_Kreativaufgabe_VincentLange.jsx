// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

size("A4", PORTRAIT);
clear( doc() );

fill(0);
rect(0, 0, width, height);

  fill(255, 0, 0);
  textFont("Super Grotesk A", "Bold");
  textSize(400);

  var tra = text("RA", 0, 0, 300, 150);
  var tin = text("IN", 0, height / 2, 300, 150);
  typo(tra, "skew", 20);
  typo(tin, "skew", 20);

  for(var i = 0; i < 250; i++) {

    var x = random(width);
    var y = random(height);

    noStroke();
    if(y > height / 2) {
       fill(0, 200, 200);
       rect(x, y, 2, 10);
      } else {
       fill(0, 200, 250);
       rect(x, y, 2, 5);
      }


  }


}