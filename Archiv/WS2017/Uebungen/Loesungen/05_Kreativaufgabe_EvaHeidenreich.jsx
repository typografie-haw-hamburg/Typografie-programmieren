// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
b.units(b.MM);

b.fill(0);
b.rect(0,0,b.width,b.height);

var anzahl = 20;

for(var j=0 ;j<19;j++){
var x = j*11.64;

for(var i = 0; i < anzahl; i++) {

      var size = 1;
      var B = b.random(0,255);
      var R = b.random(0,255);
      var G = b.random(0,255);

        b.noStroke();



        b.fill(R,j*20,B);
        b.ellipseMode(b.CORNER);
        b.ellipse(x, i * 11.64, size, size);




      }


}
b.fill(R,G,B);
b.ellipse(173,260,30,30);

b.fill(255,255,255);
b.textFont("Helvetica","Regular");
b.textSize(8);
b.textLeading(12);
b.text("29/10/2017; 21:40 –––\n\nIch sitze in Stintino, Sardinien, trinke Wein und löse meine Basil-Aufgaben.  ",10,270,50,30);
}

b.go();