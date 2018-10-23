// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());
fill(0,0,0)
rect(0, 0, width, height);

var r=random(0,255)
var g=random(0, 20)
var b=random(0, 255)

var r2=random(0, 255);
var g2=random(0, 200);
var b2=random(0, 100);

var a= color(r2,g2, b2);
var z= color(r,g,b)
fill(gradient(a, z, "hallo"));

for(var i=0; i<30; i++) {


var x=random(width);
var y=random(height);

var breite=random(width/2);
var hoehe=random(height);


if (breite < 40){

rect(x, y, breite, hoehe)
}else{

ellipse (x, y, breite, hoehe)

}
}

for(var i=0; i<8; i++){

fill (0,0,0);

var punktGroesse=random(5, 200);
var xAchse=random(width);
var yAchse=random(height);


textFont("Circular Std", "Medium");
textSize(punktGroesse);

  var schräg=random(20, 50)
  var hi= text("hi", xAchse-punktGroesse, yAchse-punktGroesse, 400, 100)
  typo(hi, "skew", schräg)
}

}





