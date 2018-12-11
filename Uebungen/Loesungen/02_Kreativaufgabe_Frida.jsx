// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
  clear(doc());
  

  //background
  var red = color(65, 148, 148);
  var blue = color(0, 0, 0);

  gradientMode(RADIAL);
  fill(gradient(red, blue));
  rect(0, 0, width, height);


//loop
for (var i = 0; i < 20; i++) {
  
  //größe der rechtecke
  var size = random(8, 18);
  var sizeklein = random(2, 10);

  //größe der kreise
  var ksize = random(8,18);
  var ksizeklein = random(2,10);

  //linien
  var x = random(0 + size, width - size); //auf welcher breite liegen sie
  var x1 = random(0 + size, width - size); //auf welcher breite liegen sie
  var z = random(2,50); //varianz der Linie vom Rand (Höhe der Linien)

  stroke(color(255, 255, 255));
    line(x, z, x, height -z);
    line(x1, z, x1, height -z);

var a = 100 // wie hoch an den Rand dürfen sie kommen
var y2 = random(a, height - a);

var b = 50 //kleine dürfen höher
var y3 = random(b, height - b);

var y4 = random(a, height - a);

var y5 = random(b, height - b);

var r = random(150, 255);
var g = random(0, 155);
var b = random(0, 255);

fill(r,g,b);
noStroke();

//deckkraft
  var rechteck = rect(x - size /2, y2, size, size);
  var minirechteck = rect(x - sizeklein /2, y3, sizeklein, sizeklein);

  var circle = ellipse(x1, y4, ksize, ksize);
  var minicircle = ellipse(x1, y5, ksizeklein, ksizeklein);

  
  var opa1 = random(40,90);
  var opa2 = random(40,90);
  var opa3 = random(40,90);
  var opa4 = random(40,90);

  opacity(rechteck, opa1);
  opacity(minirechteck, opa2);

  opacity(circle, opa3);
  opacity(minicircle, opa4);


 

  }



}
