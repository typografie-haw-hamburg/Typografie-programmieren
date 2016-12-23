//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.textFont("TheSans","Regular");
b.textSize(9);
b.strokeWeight(0.5);

var x1 = b.random(0,b.width-200);
var y1 = b.random(0,b.height-50);

var x2 = b.random(0,b.width-200);
var y2 = b.random(0,b.height-50);

var x3 = b.random(0,b.width-200);
var y3 = b.random(0,b.height-50);

var x4 = b.random(0,b.width-200);
var y4 = b.random(0,b.height-50);

var x5 = b.random(0,b.width-200);
var y5 = b.random(0,b.height-50);

var x6 = b.random(0,b.width-200);
var y6 = b.random(0,b.height-50);

b.text("Stil/System/Methoden S. 5", x1, y1, 200, 50)
b.text("J.W. Goethe: Einfache Nachahmung der Natur, Manir und Stil S.7", x2, y2, 200, 50)
b.text("Immanuel Kant: Die Architektonik der reinen Vernunft S.11", x3, y3, 200, 50)
b.text("Algorithmen S.14", x4, y4, 200, 50)

var radius1 = b.random(10,200)
var radius2 = b.random(10,200)
var radius3 = b.random(10,200)
var radius4 = b.random(10,200)

b.noFill();

b.ellipse (x1,y1,radius1,radius1);
b.ellipse (x2,y2, radius2, radius2);
b.ellipse (x3,y3, radius3, radius3);
b.ellipse (x4,y4, radius4,radius4);


b.beginShape(b.CLOSE);
b.vertex (x1,y1);
b.vertex (x2,y2);
b.vertex (x3,y3);
b.vertex (x4,y4);
b.vertex (x5,y5);
b.vertex (x6,y6);

b.endShape();

var theorie = ["t","h","e","o","r","i","e"];

b.fill(0);
for (var i = 0; i < theorie.length; i++) {

  b.textSize(b.random(20,40));
  b.text(theorie[i], b.random(20,b.width-20),b.random(20,b.height-20),40,40)
}


}

b.go();
