//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.units(b.MM);

var zufall = b.random(0,100);

for(var i = 0; i < zufall; i++) {



var x = b.random(0, b.width);
var y = b.random(0, b.height);

var randomWidth = b.random (10, b.width/2);
var randomHeight = b.random (10, b.height/2);


 b.line(b.width/2, b.height/2, x, y); 
 b.rect(randomWidth, randomHeight,b.random(0,20), b.random(0, 20));
 



 if (zufall < 30) {
  var zufall = b.random(0,100);

for(var i = 0; i < zufall; i++) {



var x = b.random(0, b.width);
var y = b.random(0, b.height);

var randomWidth = b.random (10, b.width/2);
var randomHeight = b.random (10, b.height/2);


 b.line(b.width/2, b.height/2, x, y); 
 b.rect(randomWidth, randomHeight,b.random(0,20), b.random(0, 20));

  b.stroke(b.color(0, 0, 0));
    b.line(b.width/2, b.height/2, x, y); 

    b.color(b.random(0,255),b.random(0,255), b.random(0, 255));
    b.rect(b.width, b.height, b.width, b.height);
  
} 
}
else {
b.strokeWeight(20);
b.line(b.width/2, b.height/2, x,y);


b.stroke(b.random(0,255),b.random(0,255), b.random(0, 255));
b.rect(b.width, b.height, b.width, b.height);
  

} 
}

 

 }
 b.go();