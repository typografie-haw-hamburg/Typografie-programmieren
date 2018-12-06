// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();

  drawSomething();
  drawSomething();
  drawSomething();

}

function drawSomething() {
  beginShape();
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
    vertex(random(width), random(height));
  endShape(CLOSE);
}