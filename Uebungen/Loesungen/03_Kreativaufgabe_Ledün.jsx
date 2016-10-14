//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());




var step = 20;
var color= 1;


b.noStroke();
for(var i=0; i < 40; i++){
  var red= i*20; 

  for(var j = 0; j <20; j++){
    var blue= j*20;
    b.fill(b.color(red, 0, blue));
   
      var rotation =b. radians (33);
  b.println (rotation);
  b.rotate (rotation);
b.opacity( b.rect(40 + j * step,i*step , 20, 20), 100 - i * color);
  }
}
 
  for(var i = 0; i < 100; i++){
  var size = b.random (0,40);
  var posX = b.random (0 + size/2,b.width - size/2);
  var posY = b.random (0 + size/2,b.height - size/2);


 if(posX <= b.width/2){
    b.fill(b.color(255, 0, 100));
  }
  else {
    b.fill(b.color(100, 0, 255));  
  }
  var rotation =b. radians (33);
  b.println (rotation);
  b.rotate (rotation);
 b.opacity( b.rect (posX, posY, size, size), 100 - i* color);
 
}
}
b.go();
