// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  noStroke();

 var red = color(255, 0, 0);
 var green = color( 0, 255, 0);

 var r = random(255, 0, 0);
 var g = random(0, 255, 0);
 var b = random(0, 0, 255);
 var rectSize = (height/ 3, width/ 2);

  var randomColors = [];
  for (var i = 0; i < 4; i++) {
    randomColors.push(color(random(0, 255), random(0, 255), random(0, 255)));
  }

fill(r, g, b);
rect (width/ 2, height/3, rectSize, rectSize + rectSize);

fill(gradient(randomColors, "RandomCol"));
rect (0, 0, rectSize, rectSize );
rect (width/2, height/3, rectSize, rectSize);


gradientMode(RADIAL);
fill(gradient(red, green, "RedGreenRadial"));
rect (width/2, 0, rectSize, rectSize);
rect (0, height/2, rectSize, rectSize);





}
