// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.fill(0);
b.rect(0,0,b.width, b.height);

var color1 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
var color2 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));

b.fill(b.gradient(color1, color2));
b.opacity(b.ellipse(b.width/2, b.height/2, 230, 230), 30);

b.textFont("Agenda", "Black");

b.strokeWeight(2);
b.stroke(b.color(255));


for(i=0; i<33; i++){


  var x = b.random(10,200);
  var y = b.random(10, 300);


  b.line(b.width/2 , b.height/2, b.width, 10 * i);
  b.line(b.width/2 , b.height/2, 0, 10 * i);


  var xPos = b.random(5,170);
  var yPos = b.random(5,270);

  var distance = b.dist(xPos, yPos, b.width / 2, b.height / 2);

if(distance>60){

  b.textSize(10+ i*2);
  b.opacity(b.text("mind",xPos, yPos, 150, 25), 3*i);

}else{

  b.textSize(40);
  b.text("no",xPos, yPos, 150, 25)

}
}

}

b.go();
