//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noFill();

var pink = b.color(200,12,89)
var grey = b.color(138)
  

b.beginShape(); 


for(var i = 0; i < 70; i++) {
 

  var x = b.random(0, b.width);
  var y = b.random(0, b.height);

  var a = 50

  b.vertex(x,y)

  if (x < b.width/2 && y < b.height/2){
    b.strokeWeight(1)
    b.stroke(grey)
    b.line(x,y,a,a)
  }

  if (x > b.width/2 && y > b.height/2){
    b.strokeWeight(1)
    b.stroke(grey)
    b.line(x,y,b.width-a,b.height-a)
  }

  if (x < b.width/2 && y > b.height/2){
    b.strokeWeight(1)
    b.stroke(grey)
    b.line(x,y,a,b.height-a)
  }

  if (x > b.width/2 && y < b.height/2){
    b.strokeWeight(1)
    b.stroke(grey)
    b.line(x,y,b.width-a,a)


  }
   b.stroke(pink)
   b.strokeWeight(2)

}

b.endShape();

b.stroke(grey)
b.strokeWeight(2)

var rect = 10;

b.rect(b.width-a,b.height-a,rect,rect);
b.rect(b.width-a,a,rect,-rect);
b.rect(a,b.height-a,-rect,rect);
b.rect(a,a,-rect,-rect);

}
b.go();