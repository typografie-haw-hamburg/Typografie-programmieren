// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myImageFile = file("~/Desktop/main.jpg");

  noFill();
  var myLine = line(200, 60, 20, 20);
  beginShape();

    vertex(50, 50);
    vertex(150, 80);
    vertex(170, 200);
    vertex(30, 130);

  var myShape = endShape(CLOSE);
  var circle = ellipse(100, 100, 50);

  fill(0);
  text(LOREM, circle);
  text(LOREM, myShape);
  text(LOREM, myLine);

  image(myImageFile, circle);

}