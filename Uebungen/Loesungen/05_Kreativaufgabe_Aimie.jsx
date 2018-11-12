// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc())


//Element1
noStroke()
var r=random(255);
var g=random(255);
var b=random(255);
fill(r,g,b);
rect(0,0,width,height);

//Element2

for (var i=0; i<50; i++) {
  var x = random(width);
  var y = random(height);

  var red = map(x,0,width,199,210);
  var green = map(x,0,width,150,210);
  var dia = map(x,0,width,50,2);

  fill(red,green,0);
  strokeWeight(4);
  stroke(230,190,180);
  ellipse(x,y,20,20);

  var xOffset = random(-50,30);
  var yOffset = random(-50,30);

  x2 = x + xOffset;
  y2 = y + yOffset;

  line(x,y,x2,y2);

}

//Element3
noFill();
strokeWeight(1);
var r=random(80);
var g=random(150);
var b=random(200);
stroke(r,g,b);
rectMode(CENTER);
rect(width/2,height/2,150,180);
stroke(255);
rect(width/2,height/2,140,170);
rect(width/2,height/2,160,190);




//Element4 Text
for(i=0; i<15; i++) {

  var x = width/2
  var y = height/5

  // var xOffset = random(70,80);
  // var yOffset = random(70,80);

  // x2 = x + xOffset;
  // y2 = y + yOffset;


textAlign(Justification.CENTER_ALIGN)
fill(255);
textSize(90);
textFont("Futura","Bold");
text("GUDE",x,y*i,140,30);

}


}
