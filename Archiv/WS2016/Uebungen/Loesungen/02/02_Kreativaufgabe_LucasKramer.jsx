//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

   b.clear(b.doc());
   b.units(b.MM);
   b.colorMode(b.CMYK);

   var lineMin = 60
    
   //background
   b.fill(b.color(0, 0, 0, 100));
   b.rect(0, 0, b.width, b.height);

   //loop
   for(var i = 1; i < 15; i++) {
      var size = i;

      var posX1 = b.random(0, b.width);
      var posY1 = b.random(0, b.height);

      var posX2 = b.random(0, b.width);
      var posY2 = b.random(0, b.height);

      b.println(b.dist(posX1, posY1, posX2, posY2));
      if(b.dist(posX1, posY1, posX2, posY2) > lineMin) {
         //lines
         b.strokeWeight(i / 2);
         b.stroke(b.color(0, 0, 100, 0));
         b.line(posX1, posY1, posX2, posY2);

         //ellipse
         for(var j = 1; j < 15; j = j + 3) {
            var waves = i * j / 3;

            b.noFill();
            b.strokeWeight(i / j); 
            b.stroke(b.color(0, 0 , 100, 0));
                    
            b.ellipse(posX1, posY1, waves, waves);
            b.ellipse(posX2, posY2, waves, waves);
         }
      }
   }
}
 
b.go();
